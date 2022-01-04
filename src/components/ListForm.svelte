<script>
    import { session } from '../supabase/auth'
    import { updateData, searchData } from '../supabase/database'
    import { v4 as uuidv4 } from 'uuid'
    import { todos } from '../store'

    const refreshTodos = () => {
        searchData('users', 'username', $session.user.user_metadata.username)
            .then(data => {
                $todos = data[0].todos
            })
    }
    refreshTodos()

    let item

    const addItem = () => {
        if(item.trim() != '') {
            $todos = [...$todos, {
                content: item.trim(),
                completed: false,
                id: uuidv4()
            }]
            
            updateData('users', { todos: $todos }, { username: $session.user.user_metadata.username })
        }
        item = ''
    }
</script>

<form on:submit|preventDefault={ addItem } >
    <input type="text" bind:value={ item }>

    <button type="submit">Add Item</button>
</form>

<style>
    form {
        width: 300px;
        display: flex;
    }

    input {
        font-size: 20px;
        padding: 10px;
        width: 175px;
    }

    button {
        font-size: 20px;
        margin-left: 5px;
        width: 125px;
    }
</style>
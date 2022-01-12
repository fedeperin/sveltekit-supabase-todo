<script>
    import { fly } from 'svelte/transition'
    import { session } from '../supabase/auth'
    import { updateData } from '../supabase/database'
    import { todos } from '../store'
    export let todo

    const changeCompleted = () => {
        if(todo.completed == false) {
            todo.completed = true
        }else {
            todo.completed = false
        }

        let newTodos = []

        $todos.forEach(eachTodo => {
            if(eachTodo.id == todo.id) {
                eachTodo.completed = todo.completed
            }

            newTodos.push(eachTodo)
        })

        $todos = [...newTodos]

        updateData('users', { todos: $todos }, { username: $session.user.user_metadata.username })
    }
    
    const deleteTodo = () => {
        $todos = $todos.filter(todoFinded => {
            return todoFinded.id != todo.id
        })
        $todos = [...$todos]
        updateData('users', { todos: $todos }, { username: $session.user.user_metadata.username })
    }
</script>

<div class="item" transition:fly={{ y: 100, duration: 500 }}>
    <p style={ todo.content.includes(' ') ? '' : 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;' } class={ todo.completed ? 'crossed' : '' } >{ todo.content }</p>

    <div class="icons">
        <i on:click={ changeCompleted } class={ todo.completed ? 'bx bx-plus' : 'bx bx-minus' } ></i>
        <i class='bx bx-x' on:click={ deleteTodo }></i>
    </div>
</div>

<style>
    .item {
        padding: 10px;
        background: #fff;
        margin: 5px 0;
        position: relative;
        display: flex;
        align-items: center;
        overflow: hidden;
        transition: all .5s ease;
    }

    .crossed {
        text-decoration: line-through;
    }

    .item p {
        color: #000;
        width: calc(100% - 40px);
    }

    .item i {
        color: #000;
        font-size: 25px;
        cursor: pointer;
        transition: all .5s ease;
    }

    .item i:hover {
        opacity: 0.5;
    }

    .icons {
        position: absolute;
        right: 10px;
    }
</style>


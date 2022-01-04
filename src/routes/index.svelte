<svelte:head>
    <title>To Do App - Home</title>
</svelte:head>

<script>
    import { session } from '../supabase/auth'
    import LogOutButton from '../components/LogOutButton.svelte'
    import AuthLinks from '../components/AuthLinks.svelte'
    import ListForm from '../components/ListForm.svelte'
    import TodoList from '../components/TodoList.svelte'
</script>

{#if !$session}
    <AuthLinks />
{:else}
    <LogOutButton />

    <div class="centered">
        <ListForm />
        <TodoList />
    </div>
{/if}

<style>
    .centered {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 70px;
    }
</style>
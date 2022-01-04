<svelte:head>
    <title>Log In - To Do App</title>
</svelte:head>

<script>
    import { session } from '../supabase/auth'
    import LogInForm from '../components/LogInForm.svelte'
</script>

{#if !$session}
    <h1>Log In:</h1>

    <LogInForm />
{:else}
    <p>You're logged in! Go to <a href="./">the homepage</a> to get your To Do list.</p>
{/if}

<style>
    h1 {
        margin-bottom: 20px;
    }
</style>
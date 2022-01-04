<svelte:head>
    <title>Sign Up - To Do App</title>
</svelte:head>

<script>
    import { session } from '../supabase/auth'
    import SignUpForm from '../components/SignUpForm.svelte'
</script>

{#if !$session}
    <h1>Sign Up:</h1>

    <SignUpForm />
{:else}
    <p>You're signed up! Go to <a href="./">the homepage</a> to get your To Do list.</p>
{/if}

<style>
    h1 {
        margin-bottom: 20px;
    }
</style>
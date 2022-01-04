<script>
    import { signUpUser } from '../supabase/auth'
    import Loading from '../components/Loading.svelte'
    import ErrorAlert from '../components/ErrorAlert.svelte'

    let username, email, password
    let userError
    let loading = false

    const closeError = () => {
        userError = false
    }

    const signUp = async () => {
        loading = true

        let userData = {
            username: username,
            email: email, 
            password: password
        }

        await signUpUser(userData)
            .then(data => {
                loading = false

                console.log(data)
                if(data.type = 'error') {
                    userError = data
                }

            })

        username = ''
        email = ''
        password = ''
    }
</script>

<form on:submit|preventDefault={ signUp } >
    <label for="username">Username: </label>
    <input type="text" id="username" autocomplete="off" required bind:value={ username }>

    <label for="email">Email: </label>
    <input type="email" id="email" autocomplete="off" required bind:value={ email }>

    <label for="password">Password: </label>
    <input type="password" id="password" autocomplete="off" required bind:value={ password }>

    <button type="submit">Sign Up</button>
</form>

{#if loading}
    <Loading />
{/if}

{#if userError}
    <ErrorAlert error={ userError } { closeError } />
{/if}

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }

    label {
        font-size: 20px;
    }

    button {
        margin-top: 10px;
    }

    input {
        margin-bottom: 10px;
        margin-top: 5px;
        font-size: 20px;
        padding: 10px;
    }
</style>
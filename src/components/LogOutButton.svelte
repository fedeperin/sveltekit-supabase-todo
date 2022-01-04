<script>
    import { logOut } from '../supabase/auth'
</script>

<button on:click={ logOut }>Log Out</button>

<style>
    button {
        position: fixed;
        top: 10px;
        right: 10px;
        background: #500404;
    }
</style>
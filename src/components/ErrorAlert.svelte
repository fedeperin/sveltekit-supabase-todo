<script>
    export let error
    export let closeError
</script>

<div class="fullScreen" on:click={ closeError }>
    <div class="errorAlert">
        <h2 class="title">{ error.status } error</h2>
        <p>{ error.message }</p>
    </div>
</div>

<style>
    .fullScreen {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #00000085;
    }

    .errorAlert {
        padding: 10px;
        background: #fff;
    }

    .errorAlert * {
        color: #000;
    }
</style>
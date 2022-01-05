<script>
    import { Circle2 } from 'svelte-loading-spinners'
</script>

<div class="fullScreen">
    <Circle2 size="100" unit="px" duration="2s" />
</div>

<style>
    .fullScreen {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #111;
    }
</style>
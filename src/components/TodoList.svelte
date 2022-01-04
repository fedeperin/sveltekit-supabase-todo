<script>
    import TodoItem from './TodoItem.svelte'
    import { todos } from '../store'
</script>

<div class="list">
    {#each $todos as todo}
        <TodoItem { todo } />
    {/each}
</div>

<style>
    .list {
        margin-top: 50px;
        width: 300px;
    }
</style>
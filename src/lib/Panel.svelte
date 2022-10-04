<script lang="ts">
    export let header: string;
    export let content: string;
</script>

<div class="panel-container">
    <h3>{header}</h3>
    <p>{content}</p>
</div>

<style>
    .panel-container {
        background-color: white;
        border-radius: 5px;
        box-shadow: 2px 2px 2px 2px #9f9f9f;
        max-width: 20rem;
        padding: 1rem;
    }
</style>
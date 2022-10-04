<script lang="ts">
  import {fade} from "svelte/transition"

  export let images: Array<{ description: string, url: string }>;

  let i = 0
</script>

<div class="wrapper">
    <div class="arrow">
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" on:click={() => i === 0 ? i = images.length - 1 : i -= 1}>
            <path d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1z"
                  fill-rule="nonzero"/>
        </svg>
    </div>
    <div class="inner-wrapper">
        {#each images as image, index}
            {#if index === i}
                <div transition:fade={{duration: 200}}>
                    <p>{@html `${image.description}`}</p>
                    <img src={image.url} alt={image.url}>
                </div>
            {/if}
        {/each}
    </div>
    <div class="arrow">
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" on:click={() => i === images.length - 1 ? i = 0 : i += 1}>
            <path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
                  fill-rule="nonzero"/>
        </svg>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 4rem;
    }

    .inner-wrapper {
        position: relative;
        height: 40rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        justify-items: center;
    }

    .inner-wrapper div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        grid-column: 1;
        grid-row: 1;
    }

    .inner-wrapper p {
        background-color: #B6DDFB;
        border-radius: 5px;
        padding: 0.5rem 0.3rem;
    }

    .arrow {
        cursor: pointer;
        width: 4rem;
    }

    img {
        /*height: 100%;*/
    }
</style>

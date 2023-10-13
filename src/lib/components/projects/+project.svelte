<script lang='ts'>
    import { skills } from "../utils/skills";
    import { projects } from "../utils/projects";

    let elemCarousel: HTMLDivElement;
    function carouselLeft(): void {
        const x =
            elemCarousel.scrollLeft === 0
                ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
                : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
        elemCarousel.scroll(x, 0);
    }
    function carouselRight(): void {
	const x =
		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0 // loop
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
	    elemCarousel.scroll(x, 0); 
    }
</script>



{#each projects as project}
    <div class="p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
        <button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
            <i class="fa-solid fa-arrow-left" />
        </button>
        <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
            {#each project.images as image}
                <img
                    class="snap-center w-[540px] rounded-container-token"
                    src="{image}"
                    alt='{image}'
                    loading="lazy"
                />
            {/each}
        </div>
        <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
            <i class="fa-solid fa-arrow-right" />
        </button>
    </div>
    <div class="p-4">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div>
            <a href={project.link} class="btn variant-filled">
                Live Page
            </a>
            <a href={project.github} class="btn variant-outline-primary">
                <i class='fa-brands fa-github'></i>
                Github
            </a>
        </div>
        <div class="flex flex-row gap-4">
            {#each project.tags as tag}
                {#each skills as skill}
                    {#if tag === skill.name}
                    <div class="badge variant-filled">
                        <i class={skill.icon}></i>
                        <p>{skill.name}</p>
                    </div>
                    {/if}
                {/each}
            {/each}
        </div>
    </div>
{/each}
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


<section class="grid gap-10 grid-cols-1 md:grid-cols-2 p-4 mx-auto">
    {#each projects as project}
        <div class="mb-4 card">
            <div>
                <img class="w-full h-80 object-cover" src="{project.images}" alt="Image of {project.name}"/>
            </div>
            <div class="p-8">
                <h3 class="text-lg font-bold">{project.name}</h3>
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
        </div>
{/each}
</section>

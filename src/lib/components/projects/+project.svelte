<script lang='ts'>
    import { skills } from "../utils/skills";
    import { projects } from "../utils/projects";
    import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
	import SvelteIcon from "./icons/svelte-icon.svelte";

</script>


<section class="grid gap-10 grid-cols-1 md:grid-cols-2">
    {#each projects as project}
        <div class="mb-4 card shadow-sm overflow-hidden">
            <div>
                <img class="w-full h-80 object-cover" src="{project.images}" alt="Image of {project.name}"/>
            </div>
            <div class="p-8 flex flex-col justify-between">
                <Accordion autocollapse>
                    <h3 class="h3 font-bold">{project.name}</h3>
                    <AccordionItem open>
                        <svelte:fragment slot="lead">
                            <i class="fa-solid fa-eye"></i>
                        </svelte:fragment>
                        <svelte:fragment slot="summary">
                            Overview
                        </svelte:fragment>
                        <svelte:fragment slot="content">
                            {project.overview}
                        </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="lead">
                            <i class="fa-solid fa-circle-info"></i>
                        </svelte:fragment>
                        <svelte:fragment slot="summary">
                            Details
                        </svelte:fragment>
                        <svelte:fragment slot="content">
                            {project.description}
                        </svelte:fragment>
                    </AccordionItem>
                </Accordion>
                <div>
                    <div class="mt-8 mb-4 flex">
                        {#if project.link !== ''}
                        <a href={project.link} target="_blank" class="mr-3 btn variant-filled-primary">
                            Live Page
                        </a>
                        {/if}
                        <a href={project.github} target="_blank" class="btn variant-outline-primary">
                            <i class='fa-brands fa-github'></i>
                            Github
                        </a>
                    </div>
                    <div class="flex flex-row gap-4">
                        {#each project.tags as tag}
                            {#each skills as skill}
                                {#if tag === skill.name}
                                    <div class="badge variant-filled">
                                        {#if skill.type.includes('fontAwesome')}
                                        <i class={skill.icon}></i>
                                        {/if}
                                        <p>{skill.name}</p>
                                    </div>
                                {/if}
                            {/each}
                        {/each}
                    </div>
                </div>
            </div>
        </div>
{/each}
</section>

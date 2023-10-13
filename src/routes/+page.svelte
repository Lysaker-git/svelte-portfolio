<script>
	import About from '$lib/components/about/+about.svelte';
	import Project from '$lib/components/projects/+project.svelte';
	import Skills from '$lib/components/skills/+skills.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

</script>
<main>
    <section class="mx-auto min-h-screen grid place-items-center">
        <div>
            <h1 class="sm:p-4 p-0 m-4">Navigating the Digital Frontier</h1>
            <p class="sm:p-4 p-0 m-4">Modern, Accessible Front-End Wonders.</p>
        </div>
    </section>
    <section id="About" style="p-4 my-auto max-w-screen-xl">
        <Avatar src="https://avatars.githubusercontent.com/u/68820814?v=4" width="w-32" rounded="rounded-full"></Avatar>
        <About />
    </section>
    <section>
        <Skills />
    </section>
    <section id="Projects" class="card">
        <Project />
    </section>
</main>
<style>
    h1 {
        font-size: clamp(1.5rem, 4vw + 1rem, 4rem);
    }
    p {
        font-size: clamp(1rem, 2vw + .5rem, 2rem);
    }
    main {
        max-width: 1300px;
        margin: 0 auto;
    }
</style>
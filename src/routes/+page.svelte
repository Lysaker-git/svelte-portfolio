<script>
	import About from '$lib/components/about/+about.svelte';
	import Contact from '$lib/components/contact/+contact.svelte';
	import Project from '$lib/components/projects/+project.svelte';
	import Skills from '$lib/components/skills/+skills.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

</script>
<main class="scroll-smooth">
    <section class="mx-auto min-h-screen grid place-items-center ">
        <div>
            <h1 class="sm:p-4 p-0 m-4">Navigating the Digital Frontier</h1>
            <p class="sm:p-4 p-0 m-4">Modern, Accessible Front-End Wonders.</p>
        </div>
    </section>
    <section id="About" class="p-4 mx-auto max-w-6xl">
        <About />
    </section>
    <section class ="p-4 mx-auto max-w-6xl">
        <Skills />
    </section>
    <section id="Projects" class="mt-60 max-w-6xl">
        <Project />
    </section>
    <section id="Contact" class="max-w-6xl">
        <Contact />
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
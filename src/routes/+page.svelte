<script>
	import About from '$lib/components/about/+about.svelte';
	import Contact from '$lib/components/contact/+contact.svelte';
	import Project from '$lib/components/projects/+project.svelte';
	import Skills from '$lib/components/skills/+skills.svelte';
    
</script>

<main class="scroll-smooth">
    <section class="mx-auto min-h-screen grid place-items-center ">
        <div class="grid place-items-start">
            <h1 class="h1 px-4 md:p-0">Navigating the Digital Frontier</h1>
            <p class="px-4 md:p-0 m-4">Modern, Accessible Front-End Wonders.</p>
        </div>
    </section>
    <section id="About" class="p-4 mx-auto max-w-6xl">
        <About />
    </section>
    <section class ="p-4 mx-auto max-w-6xl">
        <Skills />
    </section>
    <section id="Projects" class="mt-60 p-4 mx-auto max-w-6xl">
        <Project />
    </section>
    <section id="Contact" class="customContact p-4 mx-auto max-w-6xl">
        <Contact />
    </section>
</main>
<style>
    h1 {
        height: fit-content;
        font-size: clamp(1.5rem, 4vw + 1rem, 5rem);
    }
    p {
        position: relative;
        left: -10px;
        font-size: clamp(1rem, 2vw + .5rem, 2rem);
    }
    main {
        max-width: 1300px;
        margin: 0 auto;
    }
    .customContact {
        position: relative;
    }
    .customContact::before {
        position: absolute;
        content: '';
        background: rgba(116, 96, 21, 0.1);
        clip-path: polygon(0 0, 100% 19%, 100% 100%, 0% 100%);
        left: 0;
        right: 0;
        bottom: 0;
        height: 55rem;
        z-index: -1;
    }
    @media only screen and (max-width: 1023px) {
        .customContact::before {
            height: 68rem;
        }
    }
    @media only screen and (max-width: 767px) {
        .customContact::before {
            height: 62rem;
        }
    }
    @media only screen and (max-width: 639px) {

    }
</style>
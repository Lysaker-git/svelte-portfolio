<script lang ="ts">
    import { Accordion, AccordionItem, Step, Stepper, AppBar, TabGroup, Tab } from "@skeletonlabs/skeleton";

    let tabSet = 0;
</script>

<AppBar>
    <Accordion autocollapse>
        <AccordionItem open>
            <svelte:fragment slot="lead">
                <i class="fa-solid fa-question"></i>
            </svelte:fragment>
            <svelte:fragment slot="summary">Who am i?</svelte:fragment>
            <svelte:fragment slot="content">
                <p>
                    Greetings! I'm Robin Lysaker,a professional who thrives on bridging the gap between technology and the human experience. 
                    My journey encompasses a multi-faceted world where data is my day-to-day companion, but my passion doesn't end there.
                </p>
            </svelte:fragment>
        </AccordionItem>
        <AccordionItem>
            <svelte:fragment slot="lead">
                <i class="fa-solid fa-briefcase"></i>
            </svelte:fragment>
            <svelte:fragment slot="summary">My Proffesional Journey</svelte:fragment>
            <svelte:fragment slot="content">
                <p>
                    In the realm of IT and technology, I recently embarked on a transformative two-year higher education journey in front-end development. 
                    This immersive experience unlocked the secrets of HTML, JavaScript, CSS, and delved deeper into content management, agile work methods, and design. 
                    But my mission goes beyond code—my focus is on crafting accessible, user-friendly front-end platforms. 
                    Accessibility (A11y) isn't just a buzzword for me; it's a core value, ensuring that web pages open their doors to everyone.
                </p>
            </svelte:fragment>
        </AccordionItem>
        <AccordionItem>
            <svelte:fragment slot="lead">
                <i class="fa-solid fa-music"></i>
            </svelte:fragment>
            <svelte:fragment slot="summary">
                <h2>From Tech to Dance Floor</h2>
            </svelte:fragment>
            <svelte:fragment slot="content">
                <p>
                    With my extensive workload, alongside full-time studies at Noroff Academy, has honed my skills in Python, Power Queries, M, DAX, SQL, and more. 
                    With experience of coordinating a team for six years and being the right hand of my leader, i have been able to complete a leadership education as well.
                    My journey isn't confined to the digital world. Beyond the screen, I wear various hats with equal enthusiasm. 
                    As an Advanced-level West Coast Swing dancer, I don't just compete—I also teach multiple times a week. 
                    This passion drives my professional life, infusing it with energy and a constant drive to evolve.
                </p>
                <p>
                    But the story doesn't stop there. My love for technology finds an echo in the music realm. 
                    I've taken up DJ'ing at international and social gatherings within my dance community, curating beats that infuse joy into the hearts of friends and fellow dancers. 
                    I'm not just tech-savvy; I'm also quite handy. In fact, I once embarked on a bold adventure of building a bedroom from scratch, proving that my skills go beyond the digital realm.
                    Above all, my dedication to my clients, students, and friends stems from the leadership roles I've held in tech and dance. 
                    Their satisfaction fuels my commitment to seeking the best solutions. 
                </p>
                <p>
                    These experiences, both in technology and on the dance floor, have collectively shaped my journey.
                    Feel free to ask for more details; I've got many stories to share. Let's embark on this multi-faceted journey together.
                </p>
            </svelte:fragment>
        </AccordionItem>
    </Accordion>
</AppBar>


<style>
    p + p {
        margin-top: 1rem;
    }
</style>
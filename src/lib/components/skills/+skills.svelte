<script>
    import { skills } from "../utils/skills";
</script>

<div class="card p-4">
    <div class="card-header">
        <h2>My skills:</h2>
    </div>
    <section class="flex flex-wrap items-center justify-center">
        {#each skills as skill (skill.name)}
        <div class="badge variant-filles">
            <p class="badge-icon variant-filled">
                {#if skill.type === 'fontAwesome'}
                    <i class={skill.icon}></i>
                {/if}
            </p>
            <p>{skill.name}</p>
        </div>
      {/each}
    </section>
</div>

<style>
    section {
        display:flex;
        gap: 1rem;
    }
</style>
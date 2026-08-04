<script lang="ts">
	import ProjectCardTag from "./ProjectCard-Tag.svelte";

    interface ProjectInfo {
        title: string,
        date: string,
        imageSrc: string,
        tags: string[],
    };

    const data: ProjectInfo = $props();
</script>

<div class="max-w-5xl h-120 scrollbar-none overflow-hidden bg-gray-800 rounded-2xl group/card transition-all duration-200 hover:border-gray-600 border-gray-700 border-2">
    <div class="w-full aspect-video bg-white scrollbar-none center-content overflow-hidden">
        <img class="scale-105 group-hover/card:scale-[107%] transition-transform duration-200" loading="lazy" src="{data.imageSrc}" alt="{data.title}-image">
    </div>

    <div class="w-full h-fit max-h-[30%] px-6 py-4">
        <h1 class="text-text-light text-lg">{data.title}</h1>
        <p class="text-text-dark text-md mt-1">{data.date}</p>
    </div>

    <div class="w-full max-h-[15%] px-5 flex flex-wrap [&_div]:m-1 items-center">
        {#each data.tags as tag}
            <ProjectCardTag tag={tag} />
        {/each}
    </div>
</div>
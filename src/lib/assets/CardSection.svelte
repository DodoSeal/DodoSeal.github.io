<script lang="ts">
    const { children, sectionTitle } = $props();
</script>

<!-- Section Title -->
<div class="flex center-content w-full h-12">
    <h1 class="text-center text-text-light text-3xl z-10 bg-backdrop px-6">{sectionTitle}</h1>
    <div class="absolute w-[80%] h-0.5 bg-text-light"></div>
</div>

<!-- Container -->
<div class="gap-6 grid grid-cols-1 md:grid-cols-2 pt-6 mb-6">
    {@render children?.()}
</div>
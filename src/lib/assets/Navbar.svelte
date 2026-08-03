<script lang="ts">
	import { onMount } from "svelte";
    let currentRoute = $state("");

    onMount(() => {
        currentRoute = window.location.pathname;
    });
</script>

<div class="bg-backdrop w-full flex-col md:flex-row center-content md:justify-between">
    <!-- Title and Email -->
    <div class="h-full center-content">
        <a href="/" class="text-text-light hover:text-sky-400 transition-colors duration-200 font-xl font-bold m-1 whitespace-nowrap">Max McDaniel</a>
        
        <div class="w-0.5 h-4 opacity-20 shrink-0 bg-gray-300 m-1"></div>

        <a href="mailto:me@dodoseal.com" id="email-button" class="text-text-light font-xl font-bold m-1 hover:underline underline-offset-2 cursor-pointer">me@dodoseal.com</a>
    </div>

    <!-- Navigation Buttons -->
    <div class="h-full flex center-content gap-6 mt-4 md:mt-0">
        <a href="/" class="{currentRoute === "/" ? "text-text-light" : "text-text-dark"} font-xl font-bold  hover:text-text-light transition-colors duration-200 cursor-pointer" id="nav-home">Home</a>
        <a href="/portfolio" class="{currentRoute === "/portfolio" ? "text-text-light" : "text-text-dark"} font-xl font-bold  hover:text-text-light transition-colors duration-200 cursor-pointer" id="nav-portfolio">Portfolio</a>
        <a href="/contact" class="{currentRoute === "/contact" ? "text-text-light" : "text-text-dark"} font-xl font-bold  hover:text-text-light transition-colors duration-200 cursor-pointer" id="nav-contact">Contact</a>
    </div>
</div>
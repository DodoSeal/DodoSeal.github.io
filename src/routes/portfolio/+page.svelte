<script lang="ts">
	import Footer from "$lib/assets/Footer.svelte";
	import Navbar from "$lib/assets/Navbar.svelte";
	import PageTitle from "$lib/assets/PageTitle.svelte";
	import ProjectCard from "$lib/assets/ProjectCard.svelte";
	import ProjectSection from "$lib/assets/ProjectSection.svelte";
	import { onMount } from "svelte";
    let sitePath: string = $state("");

    onMount(() => {
        sitePath = window.location.pathname;
    });
</script>

<div class="main-wrapper">
    <Navbar />
    <PageTitle title="Projects" description="A display of my open-source work and hobbies :D"/>

    <ProjectSection sectionTitle="Hobby Projects">
        <ProjectCard title="DodoSeal.com" description="My personal website. You're here right now!" imageSrc="/ProjectImages/PersonalWebsite.png" projectUrl="https://github.com/dodoseal/dodoseal.github.io" tags={[ "Svelte", "TypeScript", "TailWind CSS" ]} />
        <ProjectCard title="C Playground" description="All of my open-source C projects." imageSrc="/ProjectImages/C_Playground.png" projectUrl="https://github.com/DodoSeal/C-Playground" tags={[ "C" ]} />
        <ProjectCard title="LPlot" description="A simple tool to design and manage Lighting Plots for any sized productions." imageSrc="/ProjectImages/LPlot.png" projectUrl="https://github.com/DodoSeal/LPlot" tags={[ "TypeScript", "Svelte", "Node.js", "Firebase", "Express.js" ]} />
        <ProjectCard title="Islands Economy Discord Bot" description="Fetch Roblox Islands economy information, such as pricing guides and item rarities." imageSrc="/ProjectImages/IslandsBot.png" projectUrl="https://islandsbot.dodoseal.com" tags={[ "TypeScript", "Node.js", "Discord.js" ]} />

        <!-- Template Card -->
        <!-- <ProjectCard title="" description="" imageSrc="" projectUrl="" tags={[  ]} /> -->
    </ProjectSection>

    <ProjectSection sectionTitle="Airship">
        <ProjectCard title="Airship Docs Discord Bot" description="Lookup resources from the Airship documentation." imageSrc="/ProjectImages/AirshipDocsBot.png" projectUrl="" tags={[ "TypeScript", "Node.js", "Discord.js" ]} />
        <ProjectCard title="Walk to Win" description="A simple game where walking earns points. Made with Airship.gg" imageSrc="/ProjectImages/WalkToWin.png" projectUrl="https://github.com/DodoSeal/airship-walking" tags={[ "TypeScript", "Unity Engine", "Airship" ]} />
        <ProjectCard title="Airship API Discord Bot" description="A powerful Discord Bot to fetch public information from Airship.gg." imageSrc="/ProjectImages/Airship.png" projectUrl="https://github.com/DodoSeal/AirshipAPI-DiscordBot" tags={[ "TypeScript", "Node.js", "Discord.js" ]} />
        <ProjectCard title="Easy Games Notifier" description="A Discord bot that polls the Airship Games API to discover new content from Easy.gg." imageSrc="/ProjectImages/EasyNotifier.png" projectUrl="https://github.com/DodoSeal/EZGG-Notification-Bot" tags={[ "TypeScript", "Node.js", "Discord.js" ]} />
        <ProjectCard title="Airship Bundle Downloader" description="Download Airship.gg Game Bundles using a CLI." imageSrc="/ProjectImages/AirshipBundleDownloader.png" projectUrl="https://github.com/DodoSeal/Airship-Bundle-Downloader" tags={[ "TypeScript", "Node.js" ]} />
        <ProjectCard title="Airship CLI" description="Interact with the Airship.gg API from your Terminal!" imageSrc="/ProjectImages/AirshipCLI.png" projectUrl="https://github.com/DodoSeal/airship-cli" tags={[ "TypeScript", "Node.js" ]} />
    </ProjectSection>

    <div class="gap-6 grid grid-cols-1 md:grid-cols-2 pt-6">
    </div>
    <Footer />
</div>
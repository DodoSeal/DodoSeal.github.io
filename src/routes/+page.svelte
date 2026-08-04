<script lang="ts">
	import Footer from "$lib/assets/Footer.svelte";
	import Navbar from "$lib/assets/Navbar.svelte";
	import PageTitle from "$lib/assets/PageTitle.svelte";
	import ProjectCard from "$lib/assets/ProjectCard.svelte";
	import CardSection from "$lib/assets/CardSection.svelte";
	import aboutMe from '$lib/assets/about-me.txt?raw';
</script>

<div class="main-wrapper">
    <Navbar />
    <PageTitle title="Hey, I am Max! 👋" description={aboutMe}/>
    
    <CardSection sectionTitle="Favorite Projects">
        <ProjectCard title="Airship CLI" description="Interact with the Airship.gg API from your Terminal!" imageSrc="/ProjectImages/AirshipCLI.png" projectUrl="https://github.com/dodoseal/airship-cli" tags={[ "TypeScript", "Node.js" ]} />
        <ProjectCard title="Drift" description="A Skyblock inspired farming game." imageSrc="/ProjectImages/Drift.png" projectUrl="https://airship.gg/g/384d911c-a5e8-4fda-be18-f715e8b2f116" tags={[ "TypeScript", "Unity Engine", "Airship" ]} />
    </CardSection>
    <Footer />
</div>
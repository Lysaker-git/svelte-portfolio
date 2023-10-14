<script>
	import { AppRailAnchor, AppShell, AppBar, LightSwitch, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import '@fortawesome/fontawesome-svg-core';
	
	

</script>

<AppShell>
	<svelte:fragment slot="header">
		<div class="fixed right-12 top-3">
			<LightSwitch
				width="w-18"
				height="h-9" 
				ring="ring-[0px] ring-surface-500/30"
			/>
		</div>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<div class="nav-styles" >
			<nav class="mb-4 fixed bottom-0 left-0 right-0">
				<ul class="ms-4 flex p-4 variant-glass-surface rounded-md">
					<li><a class="" href="#Projects">Projects</a></li>
					<li><a class="" href="#About">About Me</a></li>
					<li><a class="" href="#Contact">Contact</a></li>
				</ul>
			</nav>
		</div>
	</svelte:fragment>
</AppShell>

<style>
	nav a {
		font-size: clamp(1rem, calc(2vw + 1rem), 3rem);
		padding: .5rem 1rem;
	}
	li:hover {
		text-decoration: underline;
	}
	ul {
		width: fit-content;
	}
</style>
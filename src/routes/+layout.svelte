<script>
	import { AppRailAnchor, AppShell, AppBar, LightSwitch, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import '@fortawesome/fontawesome-svg-core';
	
	initializeStores();
	const drawerStore = getDrawerStore();
	

</script>

<Drawer />

<AppShell>
	<svelte:fragment slot="header">
		<div class="absolute right-12 top-3">
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
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<svelte:fragment slot="footer">
			<nav class="mb-4 fixed bottom-0 left-0 right-0">
				<ul class="ms-4 flex gap-8">
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#About">About Me</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			</nav>
	</svelte:fragment>
</AppShell>

<style>
	a {
		font-size: clamp(1rem, calc(2vw + 1rem), 3rem)
	}
</style>
<script>
	import { AppShell, AppBar, LightSwitch, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import '../app.postcss';

	
	initializeStores();
	const drawerStore = getDrawerStore();
	

</script>

<Drawer />

<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">
		<AppBar>
			<LightSwitch />
		</AppBar>
	</svelte:fragment>
</AppShell>

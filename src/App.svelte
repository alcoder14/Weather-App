<script>
	import AppDefault from "./Default Screen/AppDefault.svelte";
	import WeatherDefault from "./Weather Screen/WeatherDefault.svelte";
	
	let default_screen = true

	const toggleView = () =>{

		default_screen = !default_screen
		
		console.log(default_screen)
	} 
</script>

{#if default_screen}
	<AppDefault on:submit={toggleView} on:location_chosen={toggleView}/>
{:else}
	<WeatherDefault />
{/if}


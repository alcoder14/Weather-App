<script>
    import { each } from "svelte/internal";
    import InputDefault from "./InputDefault.svelte";
    import LocationCardDefault from "./LocationCardDefault.svelte";

	let recent_locations_available = false

    let locations = JSON.parse(localStorage.getItem("RecentLocations"))
    console.log(locations)

    if((locations != null) && (locations.length > 6)){
        locations.splice(6, locations.length - 6)
    }

    if((locations != null) && (locations.length > 0)){
        recent_locations_available = true
    }

    let location_text, trigger_save
    let InputDefaultComponent  
    const getLocation = (e) =>{
        location_text = e.detail.text
        trigger_save = "Save"
        console.log(location_text)
    }
    
</script>

<main class="default-page">
    <InputDefault on:submit {location_text} bind:this={InputDefaultComponent} {trigger_save} />
    <section class="recent-locations">
    
        <h1 class="title">Recent Locations:</h1>

        <div class="content">
            {#if !recent_locations_available}
                <div class="nothing-to-show">
                    <p>You have no recent locations</p>
                </div>
            {:else}
                <div class="locations-boxes">
                    {#each locations as location_text}
                        <LocationCardDefault {location_text} on:location_chosen/>
                    {/each}
                </div>
            {/if}
        </div>
    
    </section>
</main>

<style>
    .default-page{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 100px;
    }
	.recent-locations{
		width: 75%;
        height: 75%;
	}
	.title{
		color: white;
		font-size: 30px;
        margin-bottom: 30px;
	}
    .content{
        width: 100%;
        height: 80%;
    }
	.nothing-to-show{
		width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        background-color: #383838;
	}
    p{
        color: #82E2E2;
        font-size: 30px;
    }

    .locations-boxes{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        align-content: space-between;
        justify-content: space-between;
    }

    /* Media Queries */

    @media(max-width: 1750px){
        .content{
            height: 70%;
        }
    }
    @media(max-width: 1600px){
        .recent-locations{
            width: 85%;
        }
        .title{
            font-size: 28px;
        }
    }
    @media(max-width: 1500px){
        .recent-locations{
            width: 100%;
        }
        .title{
            font-size: 26px;
        }
    }
    @media(max-width: 1250px){
        
        .default-page{
            padding: 50px;
        }
        
        .locations-boxes{
            grid-template-columns: 48% 48%;
        }
        .content{
            height: 100%;
        }
        .title{
            font-size: 24px;
        }
    
    }

    @media(max-width: 620px){
        .default-page{
            padding: 30px;
            width: 100%;
        }
        .locations-boxes{
            grid-template-columns: 100%;
        }
        .content{
            height: 100%;
        }
        .title{
            font-size: 20px;
        }
        .nothing-to-show p{
            font-size: 26px;
            text-align: center;
        }
    }
    @media(max-width: 500px){
        .nothing-to-show p{
            font-size: 22px;
            text-align: center;
        }
        .default-page{
            justify-content: flex-start;
        }
    }
    @media(max-width: 350px){
        .nothing-to-show p{
            font-size: 14px;
        }
    }
</style>
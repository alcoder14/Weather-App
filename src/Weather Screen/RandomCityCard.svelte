<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
    import { location } from "../stores";
    export let city
    export let unit

    let dispatch = createEventDispatcher()
    let resolved_address, temp, icon 

    
    onMount(async()=>{
        const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=ARD8FYHMN85N9QUAMZ2AFMNGQ&contentType=json`)
        const data = await res.json()
        console.log(data)

        resolved_address = data.resolvedAddress
        resolved_address = resolved_address.slice(0, resolved_address.length - (resolved_address.length - resolved_address.indexOf(",")))


        temp = data.currentConditions.temp
        icon = data.currentConditions.icon 

    })

    const select_city = () =>{
        location.update(value => city)

        let recent_locations = JSON.parse(localStorage.getItem("RecentLocations"))

        // LOCAL STORAGE MANAGEMENT

        if(!recent_locations.includes(city)){

            recent_locations.unshift(city)
            recent_locations = recent_locations

            if(recent_locations.length == 7){
                recent_locations.pop()
            }

            localStorage.setItem("RecentLocations", JSON.stringify(recent_locations))

            dispatch("city_selected")
        }

    }

</script>

<div class="city-data" on:click={select_city} on:keypress={select_city}>
    <div class="city-data-box">
        <h3 class="city">{resolved_address}</h3>
    </div>

    <div class="city-data-box">
        {#if unit == "metric"}
            <h3 class="current-temp">{temp}°C</h3>
        {:else}
            <h3 class="current-temp">{temp}°F</h3>
        {/if}
    </div>

    <div class="city-data-box">
        <img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/{icon}.png" alt="Weather icon" class="icon">
    </div>

    
</div>

<style>
    .city-data{
        width: 30%;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #383838;
        padding: 10px;
        transition: all 0.4s;
        cursor: pointer;
    }
    .city-data-box{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .city{
        color: #82E2E2;
        font-size: 25px;
    }
    .current-temp{
        color: white;
        font-size: 25px;
    }

    .city-data:hover{
        background-color:#82E2E2;
    }
    .city-data:hover .city{
        color: #383838;
    }
    .city-data:hover .current-temp{
        color: white;
    }

    @media(max-width: 1200px){
        .city, .current-temp{
            font-size: 20px;
        }
        .icon{
            height: 35px;
            width: auto;
        }
    }
    @media(max-width: 1000px){
        .city, .current-temp{
            font-size: 17px;
        }

        .icon{
            height: 28px;
            width: auto;
        }
    }

    @media(max-width: 800px){
        .city, .current-temp{
            font-size: 18px;
        }

        .icon{
            height: 28px;
            width: auto;
        }
    }

    @media(max-width: 600px){
        .city, .current-temp{
            font-size: 14px;
        }

        .icon{
            height: 20px;
            width: auto;
        }
    }

    @media(max-width: 850px){
        .city-data{
            width: 100%;
        }
        .city-data-box{
            width: 30%;
        }
        .city, .current-temp{
            font-size: 26px;
        }
        .icon{
            height: 38px;
            width: auto;
        }
        .city-data:nth-child(2){
            margin: 20px 0;
        }
    }
</style>
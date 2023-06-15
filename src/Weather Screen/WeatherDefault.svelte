<script>
    import { each } from "svelte/internal";
    import WeatherDataCard from "./WeatherDataCard.svelte";
    import InputWeather from "./InputWeather.svelte"
    import { location } from "../stores"

    import Top from "./Layout/Top.svelte"
    import Center from "./Layout/Center.svelte";
    import Bottom from "./Layout/Bottom.svelte";
    import Forecast from "./Layout/Forecast.svelte";

    import { Circle } from "svelte-loading-spinners"

    let location_string
    let unit = "metric"

    let resolved_address = "", resolved_address_city = "", time = "", details = [], forecast_data
    let currentConditions = {}

    // FETCH DATA
    let res 
    const fetch_data = async (location, unit) =>{
        res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=ARD8FYHMN85N9QUAMZ2AFMNGQ&contentType=json`)
		const data = await res.json()
        
        // Forecast Data
        forecast_data = data.days
        forecast_data = forecast_data.splice(1, 7)

        // Current Conditions
        currentConditions = data.currentConditions
        
        // Resolved Address
        resolved_address = data.resolvedAddress

        // Resolved Address - only city
        resolved_address_city = resolved_address.slice(0, resolved_address.length - (resolved_address.length - resolved_address.indexOf(",")))

        // Current Time
        time = currentConditions.datetime
     
        details = [
            {id: Math.random(), icon: "fa-wind", data: currentConditions.windspeed, description:"Wind"},
            {id: Math.random(), icon: "fa-gauge", data: currentConditions.pressure, description:"Pressure"},
            {id: Math.random(), icon: "fa-temperature-half", data: currentConditions.feelslike, description:"Feels Like"},
            {id: Math.random(), icon: "fa-eye", data: currentConditions.visibility, description:"Visibility"},
            {id: Math.random(), icon: "fa-droplet", data: currentConditions.humidity, description:"Humidity"},
            {id: Math.random(), icon: "fa-cloud", data: currentConditions.cloudcover, description:"Cloud Cover"}
        ]

    }

    // RETRIEVE LOCATION FROM INPUT FIELD
    const refresh = () =>{
        location.subscribe((value)=>{
            location_string = value
            fetch_data(location_string, unit)
        })
    }
    refresh()

    // RETRIEVE UNITS FROM BUTTONS - METRIC BY DEFAULT
    const retrieve_units = (e) =>{
        unit = e.detail.unit
        fetch_data(location_string, unit)
    }

    // RE-LIST ALL LOCATIONS

    let locations_component
    const list_locations = () =>{
        locations_component.list_locations()
    }

</script>

<main class="main">

    {#if res}

    <section class="weather-data">
        <Top on:submit={refresh} on:unitChange={retrieve_units} {resolved_address} {time} {unit} on:location_change={list_locations}/>
        <Center {currentConditions} {details} {unit} condition={currentConditions.conditions} {res}/>
        <Bottom {unit} {resolved_address_city} on:city_selected={refresh} />
    </section>
    <section class="recent-locations">
        <h1 class="forecast-title">7-day Forecast</h1>
        <Forecast {forecast_data} {unit}/>
    </section>

    {:else}
        <div class="circle-loader">
            <Circle size="60" color="#82E2E2" unit="px" duration="1s" />
        </div>
    {/if}
</main>

<style>
    .circle-loader{
        height: 100%;
        width: 100%;
        background-color: #2f2f2f;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main{
        padding: 40px;
        height: 100%;
        display: flex;
        flex-direction: row;
    }
    .weather-data, .recent-locations{
        margin: 20px;
    }
    .weather-data{
        flex-basis: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    /*Recent Locations section*/
    .recent-locations{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #383838;
        border-radius: 20px;
        padding: 30px;
        flex-basis: 30%;
    }
    .forecast-title{
        font-size: 23px;
        color: white;
        margin-bottom: 10px;
    }

    @media(max-width: 1600px){
        .main{
            flex-direction: column;
            height: fit-content;
        }
        .weather-data, .recent-locations{
            margin: 0;
            flex-basis: 100%;
        }
        .recent-locations{
            margin-top: 20px;
        }
    }

    @media(max-width: 800px){
        .main{
            padding: 20px;
        }
        .recent-locations{
            background-color: unset;
            padding: 0;
        }
    }
</style>
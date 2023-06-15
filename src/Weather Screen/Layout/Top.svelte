<script>
    import { createEventDispatcher } from "svelte";
    import InputWeather from "../InputWeather.svelte";

    export let resolved_address
    export let time
    export let unit

    const dispatch = createEventDispatcher()

    const toggleUnit = () =>{
        if(unit == "metric"){
            unit = "us"
        } else {
            unit = "metric"
        }
        console.log(unit)
        dispatch("unitChange", {
            unit: unit
        })
    }
</script>

<div class="top-window">
    <div class="search-filters-container">
        <InputWeather on:submit on:location_change />
        <button class="unit celsius" class:selected_unit={unit == "metric"} on:click={toggleUnit} >°C</button>
        <button class="unit fahrenheit" class:selected_unit={unit == "us"} on:click={toggleUnit}>°F</button>
    </div>
    <div class="location">
        <i class="fa-solid fa-location-dot"></i>
        <h3 class="location-text">{resolved_address}</h3>
    </div>
    <div class="date-time">
        <i class="fa-regular fa-clock"></i>
        <h3 class="date-time-text">As of {time} </h3>
    </div>
</div>

<style>
    .search-filters-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .unit{
        flex-basis: 8%;
        font-size: 28px;
        padding: 12px 24px;
        background-color: #383838;
        color: #82E2E2;
        outline: none;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }
    .selected_unit{
        background-color: #82E2E2;
        color: #383838;
    }
    
    .location{
        margin-top: 30px;
        margin-bottom: 10px;
    }
    .date-time{
        margin-top: 10px;
    }
    .location, .date-time{
        display: flex;
        flex-direction: row;
    }

    .fa-location-dot, .fa-clock{
        font-size: 23px;
        color: #82E2E2;
        margin-right: 10px;
        align-self: center;
    }
    .location-text, .date-time-text{
        font-size: 23px;
        color: white;
    }

    @media(max-width: 1000px){
       .unit{
            width: 15%;
       }
       .location-text, .date-time-text{
            font-size: 16px;
            color: white;
        }
    }
    @media(max-width: 800px){
       .search-filters-container{
            display: grid;
            grid-template-columns: 50% 50%;
       }
       .unit{
            margin-top: 20px;
            width: 100%;
            font-size: 20px;
            padding: 9px 18px;
       }
       .celsius{
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
       }
       .fahrenheit{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
       }
    }
</style>
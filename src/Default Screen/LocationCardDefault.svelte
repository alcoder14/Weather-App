<script>

    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
    import { location } from "../stores"
    import { Circle } from "svelte-loading-spinners"

    export let location_text = ""

    let unit = "metric"

    let resolved_address = "", date = new Date(0), icon = "", temp
    let month, year, day, datestring, time


    let res
    onMount(async()=>{
        res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location_text}?unitGroup=${unit}&key=ARD8FYHMN85N9QUAMZ2AFMNGQ&contentType=json`)
		const data = await res.json()
        
        // CONSTRUCT DATE 
        
        date.setUTCSeconds(data.currentConditions.datetimeEpoch)
        month = date.getMonth() + 1
        year = date.getFullYear()
        day = date.getDate()
        time = data.currentConditions.datetime
        datestring = year + "/" + month + "/" + day  + " " + time

        // GET DATA

        resolved_address = data.resolvedAddress
        resolved_address = resolved_address.slice(0, resolved_address.length - (resolved_address.length - resolved_address.indexOf(",")))


        temp = data.currentConditions.temp
        icon = data.currentConditions.icon

        
    })

    let dispatch = createEventDispatcher()
    
    const emit_location_text = () =>{
        location.update(value => location_text)
        dispatch("location_chosen")
    }
</script>

<div class="card">
    {#if res}
    <div class="location">
        <h1>{resolved_address}</h1>
    </div>
    <div class="datetime">
        <h3>As of {datestring}</h3>
    </div>
    <div class="conditions">
        <img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/{icon}.png" alt="Weather icon" class="icon">
        <h2>{temp} °C</h2>
        <button on:click={emit_location_text}>View</button>
    </div>
    {:else}
    <div class="circle-container">
        <Circle size="60" color="#82E2E2" unit="px" duration="1s" />
    </div>
    {/if}
</div>

<style>
    .card{
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: #383838;
        border-radius: 20px;
        margin: 0;
    }
    .location{
        font-size: 30px;
        color: #82E2E2;
    }
    .datetime{
        font-size: 18px;
        color: white;
        margin: 10px 0;
    }
    .conditions{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    button{
        outline: none;
        background-color: #383838;
        border: #82E2E2 solid 3px;
        padding: 10px;
        border-radius: 20px;
        color: white;
        font-size: 25px;
        cursor: pointer;
        transition: all 0.4s;
    }

    button:hover{
        background-color: #82E2E2;
        color: #383838;
        border-color: white;
    }

    .icon{
        color: #82E2E2;
        height: 60px;
        width: auto;
        align-self: center;
    }
    h2{
        color: white;
        font-size: 40px;
    }


    @media(max-width: 1750px){
        .card{
            margin-bottom: 20px;
        }
        h2{
            font-size: 36px;
        }   
        .icon{
            height: 52px;
            width: auto;
        }
        button{
            font-size: 21px;
        }
        .datetime{
            font-size: 15px;
        }
        .location{
            font-size: 26px;
        }
    }
    @media(max-width: 1600px){
        h2{
            font-size: 36px;
        }   
        .icon{
            height: 52px;
            width: auto;
        }
        button{
            font-size: 21px;
        }
        .datetime{
            font-size: 15px;
        }
        .location{
            font-size: 26px;
        }
    }
    @media(max-width: 800px){
        h2{
            font-size: 32px;
        }   
        .icon{
            height: 44px;
            width: auto;
        }
        button{
            font-size: 18px;
        }
        .datetime{
            font-size: 13px;
        }
        .location{
            font-size: 22px;
        }
    }
    @media(max-width: 700px){
        h2{
            font-size: 28px;
        }   
        .icon{
            height: 40px;
            width: auto;
        }
        button{
            font-size: 15px;
        }
        .datetime{
            font-size: 11px;
        }
        .location{
            font-size: 19px;
        }
    }
    @media(max-width: 1750px){
        .card{
            margin-bottom: 20px;
        }
    }
</style>
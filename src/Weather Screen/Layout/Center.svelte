<script>
    import WeatherDataCard from "../WeatherDataCard.svelte";
    import { Circle } from "svelte-loading-spinners"

    export let currentConditions = {}
    export let condition = ""
    export let details = []
    export let unit
    export let res

    console.log(details)

    let long_condition = false 
    
    if(condition.includes(" ")){
        long_condition = true
    } else {
        long_condition = false
    }
    
    console.log(long_condition)
    
</script>

<div class="main-window">

    {#if res}
    <div class="main-data">
       <img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/{currentConditions.icon}.png" alt="Weather icon" class="icon">
       <h4 class="condition" class:smaller_text={long_condition == true}>{currentConditions.conditions}</h4>
       {#if unit == "metric"}
            <h2 class="temp">{currentConditions.temp} °C</h2>
       {:else if unit == "us"}
            <h2 class="temp">{currentConditions.temp} °F</h2>
       {/if}
    </div>

    {#each details as detail}
        <WeatherDataCard icon={detail.icon} data={detail.data} description={detail.description} {unit}/>
    {/each}
    
    {:else}
    <div class="circle-container">
        <Circle size="60" color="#82E2E2" unit="px" duration="1s" />
    </div>
    {/if}

</div>

<style>
    .main-window{
        display: grid;
        grid-template-columns: 23% 23% 23% 23%;
        row-gap: 4%;
        column-gap: 2%;
        justify-content: center;
        justify-items: center;
        align-content: center;
        background-color: #383838;
        padding: 30px;
        border-radius: 30px;
    }
    .main-data{
        grid-row: 1 / span 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .icon{
        height: 200px;
        width: auto;
    }
    .condition{
        font-size: 55px;
        line-height: 1.2;
        text-align: center;
    }
    .smaller_text{
        font-size: 35px;
    }
    .temp{
        font-size: 80px;
        text-align: center;
    }
    .condition, .temp{
        color: white;
    }

    @media(max-width: 1600px){
        .main-window{
            flex-direction: column;
            height: fit-content;
            margin-top: 20px;
        }
        .icon{
            height: 160px;
        }
    }

    @media(max-width: 1220px){
        .icon{
            height: 120px;
        }
        .condition{
            font-size: 38px;
            margin: 20px 0;
        }
        .temp{
            font-size: 65px;
        }
    }

    @media(max-width: 1000px){
        .icon{
            height: 120px;
        }
        .condition{
            font-size: 32px;
            margin: 18px 0;
        }
        .temp{
            font-size: 46px;
        }
    }


    @media(max-width: 700px){
        .main-window{
            grid-template-columns: 33.33% 33.33% 33.33%;
            row-gap: 2%;
            column-gap: 1%;
        }
        .main-data{
            grid-row: unset;
            grid-column: 1 / span 3;
        }

    }
</style>
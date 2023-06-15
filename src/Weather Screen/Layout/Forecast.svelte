<script>
    export let forecast_data = []
    export let unit
</script>

{#each forecast_data as day}
    <div class="day">
        <h3 class="datetime">{day.datetime}</h3>

        {#if unit == "metric"}
        <h3 class="temps">{day.tempmax}°C/ <span class="tempmin">{day.tempmin}°C</span> </h3>
        {:else if unit == "us"}
        <h3 class="temps">{day.tempmax}°F/ <span class="tempmin" >{day.tempmin}°F</span> </h3>
        {/if}

        <img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/{day.icon}.png" alt="Weather icon" class="icon">
    </div>
{/each}

<style>
    .day{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 10px;
        align-items: center;
        padding: 15px;
        background-color: #2F2F2F;
    }
    .icon{
        height: 60px;
        width: auto;
    }
    .datetime{
        font-size: 24px;
        color: #82E2E2;
    }
    .temps{
        font-size: 30px;
        color: white;
    }
    .tempmin{
        font-size: 24px;   
    }

    @media(max-width: 1600px){
        .day{
            margin: 10px;
            padding: 8px;
        }
    }

    @media(max-width: 800px){
        .day{
            margin: 10px 0;
            background-color: #383838;
            border-radius: 20px;
        }
        .icon{
            height: 50px;
            width: auto;
        }
        .datetime{
            font-size: 18px;
            color: #82E2E2;
        }
        .temps{
            font-size: 25px;
            color: white;
        }
        .tempmin{
            font-size: 18px;   
        }
    }
</style>
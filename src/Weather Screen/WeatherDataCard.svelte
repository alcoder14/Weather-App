<script>
    //export let id
    export let icon
    export let data
    export let description
    export let unit
</script>

<div class="detail-window">
    <i class="fa-solid {icon}"></i>
    {#if unit == "metric"}
        {#if description == "Wind" }
            <h3 class="data"> {data} km/h </h3>
        {:else if description == "Feels Like"}
            <h3 class="data"> {data} °C </h3>
        {:else if description == "Visibility"}
            <h3 class="data">{data} km</h3>
        {/if}
    {:else if unit == "us"}
        {#if description == "Wind" }
            <h3 class="data"> {data} mp/h </h3>
        {:else if description == "Feels Like"}
            <h3 class="data"> {data} °F </h3>
        {:else if description == "Visibility"}
            <h3 class="data">{data} m</h3>
        {/if}
    {/if}
    
    {#if description == "Humidity"}
        <h3 class="data">{data} %</h3>
    {:else if description == "Cloud Cover"}
        <h3 class="data">{data} %</h3>
    {:else if description == "Pressure"}
        <h3 class="data"> {data} mb</h3>
    {/if}

    <h4 class="description">{description}</h4>
</div>

<style>
    .detail-window{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .fa-solid{
        color: #82E2E2;
        font-size: 96px;
        margin-bottom: 20px;
    }
    .data, .description{
        color: white;
        text-align: center;
    }
    .data{
        font-size: 36px;
        margin-bottom: 10px;
    }
    .description{
        font-size: 32px;
    }

    @media(max-width: 1600px){
        .data{
            font-size: 32px;
        }
        .description{
            font-size: 28px;
        }
    }
    @media(max-width: 1220px){
        .fa-solid{
            font-size: 72px;
        }
        .data{
            font-size: 26px;
        }
        .description{
            font-size: 22px;
        }
    }

    @media(max-width: 800px){
        .fa-solid{
            font-size: 62px;
        }
        .data{
            font-size: 23px;
        }
        .description{
            font-size: 18px;
        }
    }
    
    @media(max-width: 500px){
        .fa-solid{
            font-size: 34px;
        }
        
        .data{
            font-size: 19px;
        }
        .description{
            font-size: 16px;
        }
    
    }
    
</style>
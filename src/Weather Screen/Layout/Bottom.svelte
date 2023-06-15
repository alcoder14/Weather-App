<script>
    import { location } from "../../stores";
    import RandomCityCard from "../RandomCityCard.svelte";
    export let resolved_address_city = ""
    export let unit

    let cities = ["New York City", "Los Angeles", "London", "Paris", "Barcelona", "Dublin", "Jakarta", "Tokyo", "Vienna", "Ljubljana"];

    console.log(resolved_address_city)
    //cities.splice(cities.indexOf(resolved_address_city), 1)

    let chosen_cities = [];
    for(let i = 0; i < 3; i++){
        let index = Math.floor(Math.random() * cities.length)
        console.log(index)
        chosen_cities[i] = cities[index]
        console.log(chosen_cities[i])
        //cities.splice(index)
        cities.splice(index, 1)
    }
    console.log(chosen_cities)
    cities = cities.concat(chosen_cities)
    console.log(cities)
</script>

<div class="random-locations" >
    {#each chosen_cities as city}
        <RandomCityCard {city} {unit} on:city_selected/>
    {/each}
</div>

<style>
    .random-locations{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    @media(max-width: 1600px){
        .random-locations{
            margin-top: 20px;
        }
    }
    @media(max-width: 850px){
        .random-locations{
            flex-direction: column;
        }
    }
</style>
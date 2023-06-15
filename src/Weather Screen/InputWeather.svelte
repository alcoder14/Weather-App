<script>
    
    import { createEventDispatcher } from "svelte";
    import { refresh } from "../stores";
    import { location } from "../stores";
 

    export let width

    let dispatch = createEventDispatcher()

    let location_text = ""

    let recentlocations = []
    const save_data = (e) =>{
        location.update(value => location_text)
        e.preventDefault()

        recentlocations = JSON.parse(localStorage.getItem("RecentLocations"))

        // LOCAL STORAGE MANAGEMENT
        // Only save to storage if it isn't already saved
        
        if(!recentlocations.includes(location_text)){

            recentlocations.unshift(location_text)
            recentlocations = recentlocations

            if(recentlocations.length == 7){
                recentlocations.pop()
            }

            localStorage.setItem("RecentLocations", JSON.stringify(recentlocations))

            dispatch("location_change")
        }

        location_text = "" 
    }


</script>


<form class="input" class:long={width == "long"} class:short={width == "short"} on:submit>
    <input type="text" placeholder="Location" bind:value={location_text}>
    <button on:click={save_data}><i class="fa-solid fa-magnifying-glass"></i></button>
</form>


<style>

    .input{
        display: flex;
        width: 80%;
    }
    .long{
        width: 80%;
    }
    .short{
        width: 60%;
    }

    input, button{
        outline: none;
        border: none;
        font-size: 28px;
        padding: 12px 24px;
    }
    input{
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        flex-basis: 90%;
    }
    input::placeholder{
        color: #2F2F2F;
    }
    button{
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        background-color: white;
        flex-basis: 10%;
    }
    button:hover{
        cursor: pointer;
    }
    @media(max-width: 1000px){
        .input{
            width: 70%;
        }
    }
    @media(max-width: 800px){
        .input{
            width: 100%;
            grid-column: 1 / span 2;
        }
        input, button{
            font-size: 22px;
            padding: 9px 18px;
        }
    }

    @media(max-width: 500px){
        input, button{
            font-size: 18px;
            padding: 6px 12px;
        }
    }
    @media(max-width: 350px){
        input, button{
            font-size: 15px;
            padding: 5px 10px;
        }
    }
</style>
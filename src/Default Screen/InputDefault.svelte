<script >

    import { location } from "../stores";

    export let location_text = ""
    export let trigger_save = ""

    let error = false;

    // Initialize Local Storage

    let recentlocations
    if(localStorage.getItem("RecentLocations") == null){
        recentlocations = []
        localStorage.setItem("RecentLocations", JSON.stringify(recentlocations))
    }

    // Save location to Svelte storage and local storage

    const save_data = (e) =>{
        if(location_text == ""){
            e.preventDefault();
            error = true
        } else {
            location.update(value => location_text)
            error = false

            recentlocations = JSON.parse(localStorage.getItem("RecentLocations"))


            // LOCAL STORAGE MANAGEMENT
            if(!recentlocations.includes(location_text)){

                recentlocations.unshift(location_text)
                recentlocations = recentlocations

                if(recentlocations.length == 7){
                    recentlocations.pop()
                }

                localStorage.setItem("RecentLocations", JSON.stringify(recentlocations))
            }



            location_text = ""
        }
    }

    if(trigger_save == "Save"){
        save_data()
    }


</script>


<form class="input" class:empty={error == true} on:submit>
    <input type="text" placeholder="Location" bind:value={location_text} >
    <button on:click={save_data}><i class="fa-solid fa-magnifying-glass"></i></button>
</form>


<style>

    .input{
        display: flex;
        width: 50%;
        border-radius: 30px;
        margin-bottom: 20px;
    }
    .empty{
        border: 2px #82E2E2 solid;
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
        transition: all 0.4s;
    }
    button:hover{
        cursor: pointer;
        background-color: #82E2E2;
        color: #2F2F2F;
    }

    @media(max-width: 1750px){
        .input{
            width: 60%;
        }
    }
    @media(max-width: 1600px){
        .input{
            width: 67%;
        }
    }

    @media(max-width: 1500px){
        .input{
            width: 75%;
        }
    }
    @media(max-width: 1250px){
        .input{
            margin-bottom: 30px;
        }
    }
    @media(max-width: 800px){
        .input{
            width: 100%;
        }
        input, button{
            font-size: 22px;
            padding: 9px 22px;
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
let locations = []
export const list_locations = () =>{
    locations = JSON.parse(localStorage.getItem("RecentLocations"))
    console.log(locations)
}
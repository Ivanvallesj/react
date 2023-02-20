const api_url = 'https://api.spacexdata.com/v3'

export async function getAllLaunches(){
    try{
        const responce = await fetch(`${api_url}/launches`);
        const data = await responce.json();
        return data;
    }catch (err){
        console.log(err);
    }
}


export async function getLaunchFlightNumber(flightNumber){
    try{
        const responce = await fetch(`${api_url}/launches/${flightNumber}`);
        const data = await responce.json();
        return data;
    }catch (err){
        console.log(err);
    }
}
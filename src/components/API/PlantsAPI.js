const url = "https://my-json-server.typicode.com/monikahelfer/Roslinne_Kalendarium/plants";

export const getPlants = callback => {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error));
}

export const addPlant = (plantData, callback) => {
    fetch((url), {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plantData)
    })
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error));
}
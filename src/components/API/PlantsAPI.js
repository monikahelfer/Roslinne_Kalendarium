const url = "https://run.mocky.io/v3/d018b23d-9cb4-4db4-83fd-14f4df93b85c";

export const getPlants = callback => {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data.plants))
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
    .then(data => callback(data.plants))
    .catch(error => console.log(error));
}


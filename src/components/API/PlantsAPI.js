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

export const removePlant = (id, callback) => {
    fetch((`${url}/${id}`), {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(callback(id))
    .catch(error => console.log(error));
}

export const editPlant = (id, plantData, callback) => {
    fetch((`${url}/${id}`), {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plantData)
    })
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error));
}


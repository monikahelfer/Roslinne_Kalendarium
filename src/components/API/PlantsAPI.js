// Firestore Firebase
const url = 'https://us-central1-roslinne--kalendarium.cloudfunctions.net/plant';
// JSON server & mocs (JSON Placeholder & Mocky)
// const url = "http://localhost:3000/plants";
// const url = "https://my-json-server.typicode.com/monikahelfer/Roslinne_Kalendarium/plants";
// const url = "https://run.mocky.io/v3/3abcba7c-bf2d-40b8-9d93-59706a0d9935";

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
    .then(response => response.text())
    .then(data => callback(data))
    .catch(error => console.log(error));
}

export const removePlant = (id, callback) => {
    fetch((`${url}/${id}`), {
        method: "DELETE"
    })
    .then(response => response.text())
    .then(callback(id))
    .catch(error => console.log(error));
}

export const editPlant = async (id, plantData, callback) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    });

    if (!response.ok) {
      throw new Error('Failed to edit plant');
    }

    const data = await response.json();
    callback(id, data);
  } catch (error) {
    console.error('Error editing plant:', error);
  }
};

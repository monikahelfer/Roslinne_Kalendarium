import './PlantsList.scss';

import { useState } from 'react';

import {removePlant} from './../API/PlantsAPI.js';

function PlantList({listOfPlants, onRemove}) {

    const [plantInfo, setPlantInfo] = useState(false);

    const handleRemovePlant = (id) => {
        removePlant(id, onRemove);
    };

    const togglePlantInfo = (id) => {
        plantInfo === false && setPlantInfo(true);
    }

    return (
        <section id="plant-list" className="plant-list">
            <div className="box">
            <h2>Lista moich {listOfPlants.length} roślin</h2>
                <ul>
                    {listOfPlants.map((plant, index) => {
                        return(
                            <div key={index} className="plant-list_list">
                                <li>{plant.species}</li>
                                {plantInfo && (
                                    <ul>
                                        <li>Podlewanie: {plant.watering}</li>
                                        <li>Rodzaj wody: {plant.waterType}</li>
                                        <li>Nawożenie: {plant.fertilizing}</li>
                                        <li>Ostatni przesadzana: {plant.lastRepoting}</li>
                                        {/* Jeden stan sprawia, że lista opkazuje się dla wszystkich pozycji. Chyba trzeba zrobić jednak oddzielny komponent Plant którybędzie zawierał listę i guziki. Wtedy te komponentymogą mieć swój stan na którego podstawie będą zarządzać guzikami. */}
                                    </ul>
                                )}
                                    <div className="buttons">
                                        <button onClick={() => handleRemovePlant(plant.id)}><i className="fas fa-trash-alt"></i></button>
                                        <button><i className="far fa-edit"></i></button>
                                        <button onClick={() => togglePlantInfo(plant.id)}>+</button>
                                    </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
  }

export default PlantList;
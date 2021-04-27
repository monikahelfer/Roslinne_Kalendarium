import { useState, useEffect } from 'react';
import './PlantsList.scss';

import {getPlants} from './../API/PlantsAPI';

function PlantList() {
    const [plantList, setPlantList] = useState([]);

    useEffect(() => {
        getPlants(setPlantList);
    }, []);

    return (
        <section id="plant-list" className="plant-list">
            <div className="box">
            <h2>Lista moich {plantList.length} roślin</h2>
                <ul>
                    {plantList.map(plant => {
                        return(
                            <li className="plant-list_list" key={plant.id}>{plant.species}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
  }

export default PlantList;
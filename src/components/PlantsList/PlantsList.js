import './PlantsList.scss';
import Plant from "../Plant/Plant.js";

import {removePlant} from './../API/PlantsAPI.js';

function PlantList({listOfPlants, onRemove}) {

    const handleRemovePlant = (id) => {
        removePlant(id, onRemove);
    };

    return (
        <section id="plant-list" className="plant-list">
            <div className="box">
            <h2>Lista moich {listOfPlants.length} roślin</h2>
                <ul>
                    {listOfPlants.map((plant, index) => {
                        return(
                            <div key={index} className="plant-list_list">
                                <Plant key={index} {...plant}/>
                                    <div className="buttons">
                                        <button onClick={() => handleRemovePlant(plant.id)}><i className="fas fa-trash-alt"></i></button>
                                        <button><i className="far fa-edit"></i></button>
                                        <button>+</button>
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
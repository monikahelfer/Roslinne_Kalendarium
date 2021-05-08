import { useState } from 'react';

import {addPlant} from './../API/PlantsAPI.js';

import './NewPlant.scss';

function NewPlant({addNewPlant}) {
    const [species, setSpecies] = useState("");
    const [watering, setWatering] = useState("0");
    const [waterType, setWaterType] = useState("0");
    const [fertilizing, setFertilizing] = useState("0");
    const [lastRepoting, setLastRepoting] = useState("");

    const handleSpeciesChange = (event) => {
        setSpecies(event.target.value);
    }
    const handleWateringChange = (event) => {
        setWatering(event.target.value);
    }
    const handleWaterTypeChange = (event) => {
        setWaterType(event.target.value);
    }
    const handleFerilizingChange = (event) => {
        setFertilizing(event.target.value);
    }
    const handleLastRepotingChange = (event) => {
        setLastRepoting(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const plantData = {
            species,
            watering,
            waterType,
            fertilizing,
            lastRepoting
        };

        addPlant(plantData, addNewPlant);

        setSpecies("");
        setWatering("0");
        setWaterType("0");
        setFertilizing("0");
        setLastRepoting("");
    };

    return (
        <section id="new-plant" className="new-plant">
            <div className="box">
                <h2>Dodaj nową roślinę</h2>
                <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        name="species"
                        value={species}
                        placeholder="Gatunek"
                        onChange={handleSpeciesChange}/>
                </div>
                <div>
                    <select value={watering} onChange={handleWateringChange}>
                        <option value="0">Częstotliwość podlewania:</option>
                        <option value="often">Dwa razy w tygodniu</option>
                        <option value="moderate">Raz w tygodniu</option>
                        <option value="rare">Raz na dwa tygodnie</option>
                    </select>
                </div>
                <div>
                    <select value={waterType} onChange={handleWaterTypeChange}>
                        <option value="0">Typ wody:</option>
                        <option value="distill">Destylowana</option>
                        <option value="tap">Filtrowana</option>
                    </select>
                </div>
                <div>
                    <select value={fertilizing} onChange={handleFerilizingChange}>
                        <option value="0">Intenwywność nawożenia:</option>
                        <option value="rare">Często</option>
                        <option value="moderate">Umiarkowanie</option>
                        <option value="often">Wcale</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="date"
                        name="lastRepoting"
                        value={lastRepoting}
                        placeholder="Ostatnie przesadzanie"
                        onChange={handleLastRepotingChange}/>
                </div>
                <button>
                    Dodaj
                </button>
                </form> 
            </div>
        </section>
    );
  }

export default NewPlant;
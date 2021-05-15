import { useState } from 'react';

import { addPlant } from '../API/PlantsAPI.js'
import { editPlant } from '../API/PlantsAPI.js'

import './PlantForm.scss';

export function PlantForm(props) {
    const [plantSpecies, setPlantSpecies] = useState("");
    const [watering, setWatering] = useState("0");
    const [waterType, setWaterType] = useState("0");
    const [fertilizing, setFertilizing] = useState("0");
    const [lastRepoting, setLastRepoting] = useState("");
    const [dateType, setDateType] = useState("text");

    const handleSpeciesChange = (event) => {
        setPlantSpecies(event.target.value);     
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

    let plantData = null;
    let species = null;
    let id = null;

    if (props.label === 'Dodaj!'){
        species = plantSpecies;

        id = props.nextId + 1;

        plantData = {
            id,
            species,
            watering,
            waterType,
            fertilizing,
            lastRepoting
        };

        addPlant(plantData, props.onSubmit);

    } else if (props.label === 'Zapisz zmiany!'){
        species = props.plantName;

        id = props.id;

        plantData = {
            id,
            species,
            watering,
            waterType,
            fertilizing,
            lastRepoting
        };

        editPlant(props.id, plantData, props.onSubmit);
        props.action();
    };

        setPlantSpecies("");
        setWatering("0");
        setWaterType("0");
        setFertilizing("0");
        setLastRepoting("");
        setDateType("text");
    };

    const changeDate = () =>{
        if (dateType === "text"){
            setDateType("date");
        }else {
            setDateType("text");
        }
        
    }

    return (
        <section key={props.plantId} className="plant-form" >
            <form onSubmit={handleSubmit}>
                {(props.label === 'Dodaj!') && (
                <div>
                    <input 
                        type="text"
                        name="species"
                        value={plantSpecies}
                        placeholder="Gatunek"
                        onChange={handleSpeciesChange}/>
                </div>
                )}
            <div>
                <select value={watering} onChange={handleWateringChange}>
                    <option value="0">
                    Częstotliwość podlewania
                    </option>
                    <option value="often">Dwa razy w tygodniu</option>
                    <option value="moderate">Raz w tygodniu</option>
                    <option value="rare">Raz na dwa tygodnie</option>
                </select>
            </div>
            <div>
                <select value={waterType} onChange={handleWaterTypeChange}>
                    <option value="0">Typ wody</option>
                    <option value="distill">Destylowana</option>
                    <option value="tap">Filtrowana</option>
                </select>
            </div>
            <div>
                <select value={fertilizing} onChange={handleFerilizingChange}>
                    <option value="0">Intenwywność nawożenia</option>
                    <option value="often">Często</option>
                    <option value="moderate">Umiarkowanie</option>
                    <option value="rare">Wcale</option>
                </select>
            </div>
            <div>
                <input 
                    type={dateType}
                    onFocus={changeDate}
                    onBlur={changeDate}
                    name="lastRepoting"
                    value={lastRepoting}
                    placeholder="Ostatnie przesadzanie"
                    onChange={handleLastRepotingChange}/>
            </div>
            <button>
                {props.label}
            </button>
            </form> 
        </section>
    );
  }
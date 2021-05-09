import './Plant.scss';

import { useState } from 'react';

import { PlantForm } from '../PlantForm/PlantForm.js';
import { removePlant } from './../API/PlantsAPI.js';

export function Plant(props) {

    const [plantInfo, setPlantInfo] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const togglePlantInfo = () => {
        if (plantInfo === false){
            setPlantInfo(true);
        }else if (plantInfo === true){
            setPlantInfo(false);
        }
    }

    const togglePlantForm = () => {
        if (showForm === false){
            setShowForm(true);
        }else if (showForm === true){
            setShowForm(false);
        }
    }

    const handleRemovePlant = () => {
        removePlant(props.plantID, props.onRemove);
    };

    const displayPlantWatering = (watering) => {
        if (watering === 'often'){
            return('dwa razy w tygodniu');
        }else if (watering === 'moderate'){
            return('raz w tygodniu');
        }else if (watering === 'rare'){
            return('raz na dwa tygodnie');
        }
    }

    const displayPlantWaterType = (waterType) => {
        if (waterType === 'distill'){
            return('destylowana');
        }else if (waterType === 'tap'){
            return('filtrowana');
        }
    }

    const displayPlantFertilizing = (fertilizing) => {
        if (fertilizing === 'often'){
            return('często');
        }else if (fertilizing === 'moderate'){
            return('umiarkowanie');
        }else if (fertilizing === 'rare'){
            return('wcale');
        }
    }

    const handler = () => {
        setShowForm(false);
    }

    return (
        <div className="plant-list_list">
            <li className="list-element">{props.plantSpecies}
            <div className="buttons">
                    {!showForm && (
                    <button onClick={togglePlantInfo}>+</button>
                    )}
                    {plantInfo && (
                    <button onClick={togglePlantForm}><i className="far fa-edit"></i></button>
                    )}
                    <button onClick={handleRemovePlant}><i className="fas fa-trash-alt"></i></button>
                </div>
            </li>
            {plantInfo && (
                showForm ? (
                    <PlantForm onSubmit = {props.onEdit} label='Zapisz zmiany!' id={props.plantID} plantName={props.plantSpecies} action={handler}/>
                ) : (
                <ul className="plant-details" >
                    <li>Podlewanie: {displayPlantWatering(props.plantWatering)}</li>
                    <li>Rodzaj wody: {displayPlantWaterType(props.plantWaterType)}</li>
                    <li>Nawożenie: {displayPlantFertilizing(props.plantFertilizing)}</li>
                    <li>Ostatnie przesadzanie: {props.plantLastRepoting}</li>
                </ul>
                )
            )}
        </div>
    );
  }
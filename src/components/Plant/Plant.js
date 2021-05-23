import './Plant.scss';

import { useState } from 'react';

import { EditPlantForm } from '../EditPlantForm/EditPlantForm.js';
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
            return('Dwa razy w tygodniu');
        }else if (watering === 'moderate'){
            return('Raz w tygodniu');
        }else if (watering === 'rare'){
            return('Raz na dwa tygodnie');
        }
    }

    const displayPlantWaterType = (waterType) => {
        if (waterType === 'distill'){
            return('Destylowana');
        }else if (waterType === 'tap'){
            return('Filtrowana');
        }
    }

    const displayPlantFertilizing = (fertilizing) => {
        if (fertilizing === 'often'){
            return('Często');
        }else if (fertilizing === 'moderate'){
            return('Umiarkowanie');
        }else if (fertilizing === 'rare'){
            return('Wcale');
        }
    }

    const handler = () => {
        setShowForm(false);
    }

    return (
        <div className="plant-list__item">
            <div className="displayed-list">
                <li className="list-element">{props.plantSpecies}</li>
                <div className="buttons">
                    {!showForm && (
                    <button onClick={togglePlantInfo}>
                        {plantInfo ? (<i className="fas fa-minus-circle"></i>) : (<i className="fas fa-plus-circle"></i>)}
                    </button>
                    )}
                    {plantInfo && (
                    <button onClick={togglePlantForm}><i className="far fa-edit"></i></button>
                    )}
                    <button onClick={handleRemovePlant}><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
            {plantInfo && (
                showForm ? (
                    <EditPlantForm 
                    onSubmit = {props.onEdit} 
                    id={props.plantID} 
                    species={props.plantSpecies} 
                    action={handler} 
                    plantWatering = {props.plantWatering}
                    plantWaterType={props.plantWaterType}
                    plantFertilizing={props.plantFertilizing}
                    plantLastRepoting={props.plantLastRepoting}
                    />
                ) : (
                <ul className="plant--details" >
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
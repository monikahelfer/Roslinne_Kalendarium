import { useState, useEffect, useRef } from 'react';
import { editPlant } from '../API/PlantsAPI.js'

import './EditPlantForm.scss';

export function EditPlantForm({onSubmit, id, species, action, plantWatering, plantWaterType, plantFertilizing, plantLastRepoting}) {
    const [watering, setWatering] = useState(plantWatering);
    const [waterType, setWaterType] = useState(plantWaterType);
    const [fertilizing, setFertilizing] = useState(plantFertilizing);
    const [lastRepoting, setLastRepoting] = useState(plantLastRepoting);
    const [dateType, setDateType] = useState("text");
    const [validForm, setValidForm] = useState(true);
    
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isMounted.current) {
            return;
        }

        if (watering === "0" || waterType === "0" || fertilizing === "0" || lastRepoting === ""){
            setValidForm(false);
        }else{
            setValidForm(true);

            let plantData = {
                id,
                species,
                watering,
                waterType,
                fertilizing,
                lastRepoting
            };

            await editPlant(id, plantData, onSubmit);
            action();
            onSubmit(id, plantData);

            setWatering("0");
            setWaterType("0");
            setFertilizing("0");
            setLastRepoting("");
            setDateType("text");
        }
    }

    const changeDate = () =>{
        if (dateType === "text"){
            setDateType("date");
        }else {
            setDateType("text");
        }
    }

    return (
        <section className="plant-form" >
            <form onSubmit={handleSubmit}>
            <div>
                <select value={watering} onChange={handleWateringChange}>
                    <option value="0" disabled>
                    Częstotliwość podlewania
                    </option>
                    <option value="often">Dwa razy w tygodniu</option>
                    <option value="moderate">Raz w tygodniu</option>
                    <option value="rare">Raz na dwa tygodnie</option>
                </select>
            </div>
            <div>
                <select value={waterType} onChange={handleWaterTypeChange}>
                    <option value="0" disabled>Typ wody</option>
                    <option value="distill">Destylowana</option>
                    <option value="tap">Filtrowana</option>
                </select>
            </div>
            <div>
                <select value={fertilizing} onChange={handleFerilizingChange}>
                    <option value="0" disabled>Intenwywność nawożenia</option>
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
            <div className="form__submit">
                <ul className="form__warnings">
                    {!validForm && (
                        <p>Uzupełnij wszystkie pola formularza.</p>)
                    }
                </ul>
                <button>
                    Zapisz zmiany!
                </button>
            </div>
            </form> 
        </section>
    );
  }
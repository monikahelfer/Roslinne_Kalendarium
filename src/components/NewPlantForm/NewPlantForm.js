import { useState } from 'react';
import { addPlant } from '../API/PlantsAPI.js'

export function NewPlantForm({onSubmit}) {
    const [species, setSpecies] = useState("");
    const [watering, setWatering] = useState("0");
    const [waterType, setWaterType] = useState("0");
    const [fertilizing, setFertilizing] = useState("0");
    const [lastRepoting, setLastRepoting] = useState("");
    const [dateType, setDateType] = useState("text");
    const [validForm, setValidForm] = useState(true);
    const [plantId, setPlantId] = useState(0);

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

        if (species.length === 0 || watering === "0" || waterType === "0" || fertilizing === "0" || lastRepoting === ""){
            setValidForm(false);
        }else{
            setValidForm(true);

            setPlantId(plantId + 1);

            let id = plantId;

            let plantData = {
                id,
                species,
                watering,
                waterType,
                fertilizing,
                lastRepoting
            };

            addPlant(plantData, onSubmit);

            setSpecies("");
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
                <input 
                    type="text"
                    name="species"
                    value={species}
                    placeholder="Gatunek"
                    onChange={handleSpeciesChange}/>
                </div>
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
                    Dodaj!
                </button>
            </div>
            </form> 
        </section>
    );
  }
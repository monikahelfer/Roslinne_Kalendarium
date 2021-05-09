import './PlantsList.scss';

import {Plant} from '../Plant/Plant.js';

function PlantList(props) {

    return (
        <section id="plant-list" className="plant-list">
            <div className="box">
            <h2>Lista moich {props.listOfPlants.length} roślin</h2>
                <ul>
                    {props.listOfPlants.map(plant => {
                        return(
                            <Plant key={plant.id} onRemove={props.onRemove} onEdit={props.onEdit} plantID={plant.id} plantSpecies={plant.species} 
                            plantWatering = {plant.watering}
                            plantWaterType={plant.waterType}
                            plantFertilizing={plant.fertilizing}
                            plantLastRepoting={plant.lastRepoting}/>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
  }

export default PlantList;
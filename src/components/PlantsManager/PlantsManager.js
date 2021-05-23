import { useState, useEffect } from 'react';

import Menu from '../Menu/Menu.js';
import PlantList from "../PlantsList/PlantsList.js";
import NewPlant from "../NewPlant/NewPlant.js";
import Notification from "../Notification/Notification.js";

import {getPlants} from './../API/PlantsAPI';


function PlantsManager() {

    const [plantList, setPlantList] = useState([]);
    const [plantsToWater, setPlantsToWater] = useState(false);

    useEffect(() => {
      getPlants(setPlantList);
    }, []);

    useEffect(() => {
      const currentDate = new Date();
      const currentDayOfWeek = currentDate.getDay();
      const currentWeekNumber = require('current-week-number');

      if (currentDayOfWeek === 3){
        setPlantsToWater(plantList.filter((plant) => plant.watering === "often"));
      }else if (currentDayOfWeek === 6){
        if(currentWeekNumber(currentDate) % 2 !== 0){
          setPlantsToWater(plantList);
        }else{
          setPlantsToWater(plantList.filter((plant) => plant.watering === "moderate" || plant.watering === "often"));
        }
      } else {
        setPlantsToWater([]);
      }
    }, [plantList])


    const handleAddNewPlant = plantData => {
      setPlantList(previousPlants => [...previousPlants, plantData]);
    }

    const handleRemovePlant = id => {
      setPlantList(previousList => previousList.filter(plant => plant.id !== id))
    }

    const handleEditPlant = (id, data) => {
      setPlantList(previousList => previousList.map(plant => {
        if(plant.id !== id){
          return plant;
        } else {
          return {...data};
        }
      }))
    }

  return (
    <>
      <Menu />
      {plantsToWater.length > 0 &&
       <Notification plantList={plantsToWater}/>
      }
      <NewPlant addNewPlant={handleAddNewPlant}/>
      <PlantList listOfPlants={plantList} onRemove={handleRemovePlant} onEdit={handleEditPlant}/>
    </>
  );
}

export default PlantsManager;
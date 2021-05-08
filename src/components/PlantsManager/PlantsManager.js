import { useState, useEffect } from 'react';

import Menu from '../Menu/Menu.js';
import PlantList from "../PlantsList/PlantsList.js";
import NewPlant from "../NewPlant/NewPlant.js";
// import Notification from "../Notification/Notification.js";

import {getPlants} from './../API/PlantsAPI';


function PlantsManager() {

    const [plantList, setPlantList] = useState([]);
    // const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
      getPlants(setPlantList);
    }, []);

    const handleAddNewPlant = plantData => {
      setPlantList(previousPlants => [...previousPlants, plantData]);
    }

    const handleRemovePlant = id => {
      setPlantList(previousList => previousList.filter(plant => plant.id !== id))
    }

    // let plantsToWater = null;
    // const currentDate = new Date ();
    // const currentDayOfWeek = currentDate.getDay();

    // function checkNotifications(currentDayOfWeek){
    //   if (currentDayOfWeek === 3){
    //     setShowNotification(true);
    //     plantsToWater = plantList.filter((plant) => plant.watering === "often");
    //     console.log(plantsToWater);
    //     return(plantsToWater);
    // } else if (currentDayOfWeek === 6){
    //     setShowNotification(true);
    //     plantsToWater = plantList.filter((plant) => plant.watering === "moderate");
    //     return(plantsToWater);
    // } else {
    //     setShowNotification(false);
    //     return(plantsToWater);
    // }
    // }

  return (
    <>
      <Menu />
      {/* {checkNotifications(currentDayOfWeek)} */}
      {/* {showNotification === true &&
       <Notification plantList={plantsToWater}/>
      } */}
      <NewPlant addNewPlant={handleAddNewPlant}/>
      <PlantList listOfPlants={plantList} onRemove={handleRemovePlant}/>
    </>
  );
}

export default PlantsManager;
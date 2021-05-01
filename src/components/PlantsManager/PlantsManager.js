import { useState, useEffect } from 'react';

import Menu from '../Menu/Menu.js';
import PlantList from "../PlantsList/PlantsList.js";
import NewPlant from "../NewPlant/NewPlant.js";

import {getPlants} from './../API/PlantsAPI';


function PlantsManager() {
    const [plantList, setPlantList] = useState([]);

    useEffect(() => {
        getPlants(setPlantList);
    }, []);

    const handleAddNewPlant = plantData => {
        setPlantList(previousPlants => [...previousPlants, plantData]);
    }

  return (
    <>
      <Menu />
      <PlantList listOfPlants={plantList}/>
      <NewPlant addNewPlant={handleAddNewPlant}/>
    </>
  );
}

export default PlantsManager;
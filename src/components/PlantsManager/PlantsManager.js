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

    const handleRemovePlant = id => {
      setPlantList(previousList => previousList.filter(plant => plant.id !== id))
  };

  return (
    <>
      <Menu />
      <NewPlant addNewPlant={handleAddNewPlant}/>
      <PlantList listOfPlants={plantList} onRemove={handleRemovePlant}/>
    </>
  );
}

export default PlantsManager;
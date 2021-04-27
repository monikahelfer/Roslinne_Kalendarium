import '../styles/index.scss';
import Menu from './Menu/Menu.js';
import PlantList from "./PlantsList/PlantsList.js";
import NewPlant from "./NewPlant/NewPlant.js";

function App() {
  return (
    <>
      <Menu />
      <PlantList />
      <NewPlant/>
    </>
  );
}

export default App;

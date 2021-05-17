import { NewPlantForm } from '../NewPlantForm/NewPlantForm.js';

import './NewPlant.scss';

function NewPlant(props) {

    return (
        <section id="new-plant" className="new-plant">
          <div className="box">
          <h2>Dodaj nową roślinę</h2>
          <NewPlantForm onSubmit={props.addNewPlant}/>
          </div>
        </section>
    );
  }

export default NewPlant;
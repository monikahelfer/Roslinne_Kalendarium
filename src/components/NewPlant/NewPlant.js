import { PlantForm } from '../PlantForm/PlantForm.js';

import './NewPlant.scss';

function NewPlant(props) {

    return (
        <section id="new-plant" className="new-plant">
          <div className="box">
          <h2>Dodaj nową roślinę</h2>
          <PlantForm onSubmit={props.addNewPlant} label='Dodaj!'/>
          </div>
        </section>
    );
  }

export default NewPlant;
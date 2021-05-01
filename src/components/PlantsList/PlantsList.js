import './PlantsList.scss';

function PlantList(props) {

    return (
        <section id="plant-list" className="plant-list">
            <div className="box">
            <h2>Lista moich {props.listOfPlants.length} roślin</h2>
                <ul>
                    {props.listOfPlants.map((plant, index) => {
                        return(
                            <li className="plant-list_list" key={index}>{plant.species}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
  }

export default PlantList;
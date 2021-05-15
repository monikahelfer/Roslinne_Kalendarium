import './Notification.scss';

function Notification(props) {

    return (
        <section id="notification" className="notification">
            <div className="box">
            <h2>Dzisiaj oczekują podlania:</h2>
                <ul>
                    {props.plantList.map((plant, index) => {
                        return(
                            <div key={index} className="plant-list_list">
                                <li>{plant.species}</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </section> 
    );
  }

export default Notification;
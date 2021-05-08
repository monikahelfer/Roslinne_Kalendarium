import './Notification.scss';

function Notification({plantList}) {

    return (
        <section id="notification" className="notification">
            <div className="box">
            <h2>Dzisiaj oczekują podalnia:</h2>
                <ul>
                    {plantList.map((plant, index) => {
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
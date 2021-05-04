import './Plant.scss';


function Plant({id, species, watering, waterType, fertilizing, astRepoting}) {


    return (
        <li>{species}</li>
    );
  }

  export default Plant;
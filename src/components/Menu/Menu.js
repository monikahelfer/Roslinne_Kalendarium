import '../Menu/Menu.scss';

function Menu() {
    return (
        <section id="menu" className="menu">
            <h1>Roślinne Kalendarium</h1>
            <ul className="menu_items">
                <li><a href="#new-plant">Nowa roślina</a></li>
                <li><a href="#plant-list">Lista roślin</a></li>
            </ul>
        </section>
    );
  }

export default Menu;
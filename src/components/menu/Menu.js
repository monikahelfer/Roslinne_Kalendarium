import '../menu/Menu.scss';

function Menu() {
    return (
        <section id="menu" className="menu">
            <h1>Roślinne Kalendarium</h1>
            <ul>
                <li><a href="#menu">Lista roślin</a></li>
                <li><a href="#menu">Nowa roślina</a></li>
                <li><a href="#menu">Zadania</a></li>
                <li><a href="#menu">Przelicznik stężeń</a></li>
            </ul>
        </section>
    );
  }

export default Menu;
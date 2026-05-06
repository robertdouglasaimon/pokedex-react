import "./assets/css/App.css";
import Pokedex from './assets/img/pokedex.png'

export default function App() {
  return (
    <>
      <div className="pokedex-container">
        <h1>Pokedex</h1>

        <div className="img-pokedex">
          <img src={Pokedex} alt="Pokedex" />
        </div>
      </div>
    </>
  );
}

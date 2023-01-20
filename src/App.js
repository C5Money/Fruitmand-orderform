import React, {useState} from 'react';
import './App.css';
import bedrijfsLogo from "./assets/screenshot-logo.png";
import aardbei from "./assets/aardbei.png";
import banaan from "./assets/banaan.jpg";
import appel from "./assets/appel.jpg";
import kiwi from "./assets/kiwi.jpg";
import Fruitblok from "./components/Fruitblok";
import Button from "./components/Button";


function App() {

    const [counter, setCounter] = useState(0);

    function minus() {
        setCounter(counter -1) ;
    }

    function plus() {
        setCounter(counter +1);
    }

  return (
    <>
        <main>
            <section className="logo">
                <img src={bedrijfsLogo} alt="Bedrijfslogo"/>
            </section>

            <section className="fruitblok">
                <img src={aardbei} alt={aardbei} className="fruitImg"/>
                <h3>Aardbei</h3>

                <Button type={ "button" } className={ "counter-btn"} clickHandler={ minus } disabled={counter === 0}>-</Button>

                <p>{counter}</p>
                <button type="button" className="counter-btn" onClick={() => {setCounter(plus)}}>+</button>
            </section>



            <section></section>
            <section></section>
        </main>
    </>
  );
}

export default App;

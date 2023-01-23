import React, {useState} from 'react';
import './App.css';
import bedrijfsLogo from "./assets/screenshot-logo.png";
import aardbeiPic from "./assets/aardbeiPic.png";
import banaanPic from "./assets/banaanPic.jpg";
import appelPic from "./assets/appelPic.jpg";
import kiwiPic from "./assets/kiwiPic.jpg";
import Button from "./components/Button";


function App() {

    const [aardbei, setAardbei] = useState(0);
    const [banaan, setBanaan] = useState(0);
    const [appel, setAppel] = useState(0);
    const [kiwi, setKiwi] = useState(0);

    function resetFruits(){
        setAardbei(0);
        setBanaan(0);
        setAppel(0);
        setKiwi(0);
    }

  return (
    <>
        <main>
            <section className="logo">
                <img src={bedrijfsLogo} alt="Bedrijfslogo"/>
            </section>

            <section >
                <article className="fruitblok">
                    <img src={aardbeiPic} alt="aardbei" className="fruitImg"/>
                    <h3>Aardbei</h3>
                    <Button type={ "button" } className={ "counter-btn"} clickHandler={ () => {setAardbei(aardbei -1)} } isDisabled={ aardbei === 0 }>-</Button>
                    <p>{aardbei}</p>
                    <Button type={"button"} className={"counter-btn"} clickHandler={ () => {setAardbei(aardbei +1)} }>+</Button>
                </article>

                <article className="fruitblok">
                    <img src={banaanPic} alt="banaan" className="fruitImg"/>
                    <h3>Banaan</h3>
                    <Button type={ "button" } className={ "counter-btn"} clickHandler={ () => {setBanaan(banaan -1)} } isDisabled={ banaan === 0 }>-</Button>
                    <p>{banaan}</p>
                    <Button type={ "button" } className={ "counter-btn"} clickHandler={ () => {setBanaan(banaan +1)} }>+</Button>
                </article>

                <article className="fruitblok">
                    <img src={appelPic} alt="appel" className="fruitImg"/>
                    <h3>Appel</h3>
                    <Button type={ "button" } className={ "counter-btn"} clickHandler={ () => {setAppel(appel -1)} } isDisabled={ appel === 0 }>-</Button>
                    <p>{appel}</p>
                    <Button type={ "button" } className={ "counter-btn"} clickHandler={ () => {setAppel(appel +1)} }>+</Button>
                </article>

                <article className="fruitblok">
                    <img src={kiwiPic} alt="kiwi" className="fruitImg"/>
                    <h3>Kiwi</h3>
                    <Button type={ "button" } className={ "counter-btn"} clickHandler={ () => {setKiwi(kiwi -1)} } isDisabled={ kiwi === 0 }>-</Button>
                    <p>{kiwi}</p>
                    <Button type={ "button" } className={ "counter-btn"} clickHandler={ () => {setKiwi(kiwi +1)} }>+</Button>
                </article>

                <Button type={ "button" } className={ "reset-btn" } clickHandler={ () => { resetFruits() } }>Reset</Button>
            </section>

        </main>
    </>
  );
}

export default App;

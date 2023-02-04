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

    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        age: 0,
        zipCode: "",
        deliveryFreq: "weekly",
        timeOfDay: "",
        comment: "",
        voorwaarden: false,
    });

    function handleChange(e){
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(`aardbei = ${aardbei} stuks, 
        banaan = ${banaan} stuks, 
        appel = ${appel} stuks, 
        kiwi = ${kiwi} stuks`);
        console.log(` Naam: ${formState.firstname} ${formState.lastname}, Leeftijd: ${formState.age} jaar, Postcode: ${formState.zipCode}, 
        Bezorginsfrequentie: ${formState.deliveryFreq}, Bezorgingsmoment: ${formState.timeOfDay}, Mededeling: ${formState.comment}, Voorwaarden: ${formState.voorwaarden}`);
    }

  return (
    <>
        <main>
            <section className="logo">
                <img src={bedrijfsLogo} alt="Bedrijfslogo"/>
            </section>

            <section>
                <article className="fruitblok">
                    <img src={aardbeiPic} alt="aardbei" className="fruitImg"/>
                    <h3>Aardbei</h3>
                    <Button type={ "button" } className={ "btn counter-btn"} clickHandler={ () => {setAardbei(aardbei -1)} } isDisabled={ aardbei === 0 }>-</Button>
                    <p>{aardbei}</p>
                    <Button type={"button"} className={ aardbei !== 0 ? "counter-btn-active" : "btn counter-btn" } clickHandler={ () => {setAardbei(aardbei +1)} }>+</Button>
                </article>

                <article className="fruitblok">
                    <img src={banaanPic} alt="banaan" className="fruitImg"/>
                    <h3>Banaan</h3>
                    <Button type={ "button" } className={ "btn counter-btn"} clickHandler={ () => {setBanaan(banaan -1)} } isDisabled={ banaan === 0 }>-</Button>
                    <p>{banaan}</p>
                    <Button type={ "button" } className={ banaan !== 0 ? "counter-btn-active" : "btn counter-btn" } clickHandler={ () => {setBanaan(banaan +1)} }>+</Button>
                </article>

                <article className="fruitblok">
                    <img src={appelPic} alt="appel" className="fruitImg"/>
                    <h3>Appel</h3>
                    <Button type={ "button" } className={ "btn counter-btn"} clickHandler={ () => {setAppel(appel -1)} } isDisabled={ appel === 0 }>-</Button>
                    <p>{appel}</p>
                    <Button type={ "button" } className={ appel !== 0 ? "counter-btn-active" : "btn counter-btn" } clickHandler={ () => {setAppel(appel +1)} }>+</Button>
                </article>

                <article className="fruitblok">
                    <img src={kiwiPic} alt="kiwi" className="fruitImg"/>
                    <h3>Kiwi</h3>
                    <Button type={ "button" } className={ "btn counter-btn"} clickHandler={ () => {setKiwi(kiwi -1)} } isDisabled={ kiwi === 0 }>-</Button>
                    <p>{kiwi}</p>
                    <Button type={ "button" } className={ kiwi !== 0 ? "counter-btn-active" : "btn counter-btn" } clickHandler={ () => {setKiwi(kiwi +1)} }>+</Button>
                </article>

                <Button type={ "button" } className={ "btn reset-btn" } clickHandler={ () => { resetFruits() } }>Reset</Button>
            </section>

            <form className="formblok" onSubmit={handleSubmit}>
                <section >
                    <label htmlFor="firstname">Voornaam</label>
                    <input type="text" id="firstname" name="firstname" value={formState.firstname} onChange={handleChange}/>
                </section>

                <section>
                    <label htmlFor="lastname">Achternaam</label>
                    <input type="text" id="lastname" name="lastname" value={formState.lastname} onChange={handleChange}/>
                </section>

                <section>
                    <label htmlFor="age">Leeftijd</label>
                    <input type="number" id="age" name="age" value={formState.age} onChange={handleChange}/>
                </section>

                <section>
                    <label htmlFor="zipcode">Postcode</label>
                    <input type="text" id="zipcode" name="zipCode" value={formState.zipCode} onChange={handleChange}/>
                </section>

                <section className="remarks">
                    <label htmlFor="delivery" className="evenZo">Bezorgfrequentie</label>
                    <select name="deliveryFreq" id="delivery" value={formState.deliveryFreq} onChange={handleChange}>
                        <option value="weekly">Iedere week</option>
                        <option value="every 2 weeks">Om de week</option>
                        <option value="monthly">Iedere maand</option>
                    </select>
                </section>

                <section>
                    <input type="radio" id="daytime" name="timeOfDay" value={ "Overdag" } checked={formState.timeOfDay === "Overdag" } onChange={handleChange}/>
                    <label htmlFor="daytime">Overdag</label>
                    <input type="radio" id="evening" name="timeOfDay" value={ "'s Avonds" } checked={formState.timeOfDay === "'s Avonds" } onChange={handleChange}/>
                    <label htmlFor="evening">'s Avonds</label>
                </section>

                <section className="remarks">
                    <label htmlFor="message">Opmerking</label>
                    <textarea name="comment" id="message" cols="30" rows="10" value={formState.comment} onChange={handleChange}></textarea>
                </section>

                <section>
                    <input type="checkbox" id="voorwaarden" name="voorwaarden" checked={formState.voorwaarden} onChange={handleChange}/>
                    <label htmlFor="voorwaarden">Ik ga akkoord met de voorwaarden</label>
                </section>

                <Button type="submit" className="btn verzend-btn">Verzend</Button>

            </form>
         </main>
    </>
  );
}

export default App;

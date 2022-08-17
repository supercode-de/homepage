import { useState, useEffect } from "react"
import kurseRasterData from "../components/data/kurseRasterData.json"
import KurseCard from './KurseCard';
const hrefs = ['/kurse/fullstack', '/kurse/frontend', '/kurse/uxui'];
const KurseRaster = () => {
    const [kurseData, setKurseData] = useState([])
    console.log(kurseData);
    // const n = 1 // das ist der e.target.value
    // const conditions = [ 1, 2, 3, 4, 5 ] // das ist zb kurserasterdata.format
    // if (conditions.includes(n)) {
    //   // ...
    // }

    const handleFilterChangeFachrichtung = (e) => {
        console.log(e.target.value)
        let filteredKurseData = kurseData.filter(function (singleData) {
            return singleData.fachrichtung == e.target.value
        })
        setKurseData(filteredKurseData)
    }
    const handleFilterChangeFormat = (e) => {
        console.log(e.target.value)
        let filteredKurseData = kurseData.filter(function (singleData) {
            return singleData.format == e.target.value
        })
        setKurseData(filteredKurseData)
    }
    const handleFilterChangeFinanzierung = (e) => {
        console.log(e.target.value)
        // let filteredKurseData = kurseData.filter(function (singleData) {
        //     return singleData.finanzierung == e.target.value
        // })
        // setKurseData(filteredKurseData)
    }
    const handleFilterChangeStandort = (e) => {
        console.log(e.target.value)
        // let filteredKurseData = kurseData.filter(function (singleData) {
        //     return singleData.finanzierung == e.target.value
        // })
        // setKurseData(filteredKurseData)
    }

    const handleReset = () => {
        console.log("reset click")
        setKurseData(kurseRasterData)
    }

    useEffect(() => {
        setKurseData(kurseRasterData)
    }, [])
    return (
        <section className="kurseRaster lilaGitter">
            <article className='bootcampInfos'>
                <div className='headlines'>
                    <h2>Unsere</h2>
                    <h2>Bootcamps</h2>
                    <h2>& Workshops</h2>
                </div>
                <div className='copy'>
                    <p>In einem halben Jahr zum Web Developer - geht das überhaupt? Und ob! Durch unsere zertifizierte Intensiv-Weiterbildung wirst du in 5-7 Monaten zum Web Developer Front-end oder Full-Stack und steigerst deine Jobchancen im IT-Bereich. Egal, ob dein Studium nicht mehr zu dir passt, es in deinem Beruf keine Zukunft gibt oder du einfach etwas ganz Neues lernen willst - Wir unterstützen dich!</p>
                    <p>Von der Beratung bis zum erfolgreichen Kursabschluss stehst du mit deiner Motivation, deiner Geschichte und deinen Fortschritten bei uns im Mittelpunkt. Mit zwei Trainer*innen pro Kurs, einem durchdachten Lehrplan, modernster Technik und guten Job-Kontakten machen wir dich fit für deine Zukunkt als Web Developer.</p>
                    <p>No Money? No Problem! Unsere Kurse können durch die Chancen eG oder einen Bildungsgutschein zu 100% finanziert werden.</p>
                </div>
            </article>
            <section className="selectOptions">
                <select name="fachrichtung" id="fachrichtung" onChange={e => handleFilterChangeFachrichtung(e)}>
                    <option value="field">Fachrichtung</option>
                    <option value="web-dev">Web-Entwicklung</option>
                    <option value="design">Design</option>
                    <option value="data-path">Data Path</option>
                </select>
                {/* der value teilzeit kommt absichtlich doppelt vor, damit ich im json nicht über ein array im objekt iterieren muss, weil ich das nicht hinbekommen habe fürs erste haha. es gibt eh bei uns intern keinen unterschied zw teilzeit und berufsbegleitend. das gleiche gilt für die finanzierungsmöglichkeiten */}
                <select name="format" id="format" onChange={e => handleFilterChangeFormat(e)}>
                    <option value="format">Format</option>
                    <option value="vollzeit">Vollzeit</option>
                    <option value="teilzeit">Teilzeit</option>
                    <option value="teilzeit">Berufsbegleitend</option>
                </select>
                <select name="finanzierung" id="finanzierung" onChange={e => handleFilterChangeFinanzierung(e)}>
                    <option value="finanzierung">Finanzierung</option>
                    <option value="bgs">Bildungsgutschein</option>
                    <option value="raten">Raten-Zahlung</option>
                    <option value="chancen-eg">Chancen EG</option>
                    <option value="deutscheBildung-ag">Deutsche Bildung AG</option>
                </select>
                <select name="campus" id="campus" onChange={e => handleFilterChangeStandort(e)}>
                    <option value="campus">Campus</option>
                    <option value="remote">Remote</option>
                    <option value="duesseldorf">Düsseldorf</option>
                </select>
                <button id="resetBtn" onClick={() => handleReset()}>RESET</button>
            </section>
            {/* {kurseData.map((item) => (
                <section className="kurseCard">
                    <h5 id={item.id}>{item.headline}</h5>
                    <div className="text">
                        <p>{item.umfang}</p>
                    </div>

                </section>
            ))} */}
            <section className="cards">
                {kurseData.map((item, index) => (
                    <KurseCard key={index} data={item} href={hrefs[index]} />
                ))}
            </section>


            <style jsx>{`
            .kurseRaster {
                color: var(--super-white);
                padding-bottom: 80px;
            }
            h2 {
                margin: 0;
            }
            .selectOptions {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin: 80px 0;
            }
            .selectOptions select {
                border: none;
                padding: 10px;
                background: none;
                border: 1px solid var(--super-green);
                // border-bottom: 1px solid var(--super-green);
                color: var(--super-white);
                font-size: 1em;
                // width: 200px;
            }
            .selectOptions select:focus {
                outline: none;
            }
            .selectOptions #resetBtn {
                font-size: 0.875em;
                background: none;
                border: 1px solid var(--super-green);
                padding: 0 80px;
                color: var(--super-white);
            }
            .selectOptions #resetBtn:hover {
                background: var(--super-green);
                color: var(--super-lila);
                cursor: pointer;
            }
            .bootcampInfos > * {
                width: 100%;
            }
            .bootcampInfos {
                padding: 5rem 6% 0rem;
                display: flex;
                justify-content: space-between;
            }
            .cards {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                // padding: 5rem 0;
                gap: 50px;
                width: 90%;
                margin: 0 auto;
            }
            `}
            </style>
        </section >
    );
}

export default KurseRaster;
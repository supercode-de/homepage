import Collapsible from './WeiterbildungItem'


const Weiterbildung = () => {
    return (
        <div id="weiterbildung">
            <h1>IT Weiterbildung – <br /> zertifiziert, intensiv & praxisnah.
                <span>Wähle das Format, was dir am besten passt</span>
            </h1>
            <div className="kurse">
                <Collapsible trigger="Test">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur numquam culpa iure nam molestiae natus, rem cum a tempora beatae!</p>
                </Collapsible>
            </div>
            <style jsx>{`
                #weiterbildung {
                    background: #000;
                    color: #3DD7AC;
                    padding: 10vh 0;
                }
                h1 {
                    font-size: 3em;
                    letter-spacing: 2px;
                    margin: 0 auto;
                    width: 80%
                }
                span {
                    display: block;
                    color: transparent;
                    letter-spacing: 3px;
                    -webkit-text-stroke-width: 1.5px;
                    -webkit-text-stroke-color: #3DD7AC;
                }
            `}</style>
        </div>
    );
}

export default Weiterbildung;
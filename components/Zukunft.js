// import { useWindowSize } from './functions/windowSize'

const Zukunft = (props) => {
    // const width = useWindowSize().width / 12
    const pixelSize = 2
    return (
        <div id="zukunft">
            <h1>Denkst du über deine <span>Zukunft</span> nach?</h1>
            <div className="infos">
                <div className="info-one">
                    <p>Wir bieten Menschen einen modernen Ansatz für lebenslanges Lernen und den ultimativen Skill Power-UP für eine schöne berufliche Zukunft!</p>
                    <p>Teste dich, uns und deine Skills in einem unserer kostenlosen Workshops!</p>
                </div>
                <div className="info-headline">
                    <h3>Bootcamps ⟶</h3>
                    <p>Intensiv, praxisnah und euphorisierend – wir machen dich fit in nur 5 Monaten</p>
                </div>
                <div className="info-headline">
                    <h3>Workshops ⟶</h3>
                    <p>Kurz, divers und zeitgemäß – lerne Grundlagen im Bereich IT oder schärfe deine Wissen in einer Programmiersprache.</p>
                </div>
            </div>
            <div className="images">
                <img className="img-one" src="https://unsplash.it/900/600" alt="" />
                <img className="img-two" src="https://unsplash.it/900/600" alt="" />
                <img className="img-three" src="https://unsplash.it/900/600" alt="" />
            </div>

            <style jsx>{`
            #zukunft {
                color: #3DD7AC;
                background: linear-gradient(90deg, #000 ${props.width - pixelSize}px, transparent 1%), linear-gradient(#000 ${props.width - pixelSize}px, transparent 1%) , #fff;
                background-size: ${props.width}px ${props.width}px;
            }
            h1 {
                padding: ${props.width * 1.5}px 0 0 ${props.width}px;
                font-size: 4em;
                letter-spacing: 2px;
                color: #3DD7AC;
                width: ${props.width * 5}px;
                margin: 0;
            }
            h1 span {
                color: transparent;
                letter-spacing: 3px;
                -webkit-text-stroke-width: 1.5px;
                -webkit-text-stroke-color: #3DD7AC;
            }
            .infos {
                display: flex;
                margin: ${props.width}px 0 0;
            }
            .info-one {
                width: ${props.width * 3}px;
                margin: 0 ${props.width}px;
            }
            .info-headline {
                width: ${props.width * 2}px;
                margin-right: ${props.width}px;
            }
            p {
                font-weight: 200;
            }
            h3 {
                color: #5D3EDE;
                font-size: 2em;
                margin: 0
            }
            .images {
                margin-top: ${props.width}px;
                position: relative;
                text-align: center;
                padding-bottom: ${props.width * 4}px;
            }
            .img-one {
                width: ${props.width * 6}px;
            }
            .img-two {
                width: ${props.width * 4}px;
                position: absolute;
                top: ${props.width * 2}px;
                right: 0;
            }
            .img-three {
                position: absolute;
                top: ${props.width * 6}px;
                left: ${props.width}px;
                width: ${props.width * 3}px;
                z-index: 20;
            }
            `}</style>
        </div>
    );
}

export default Zukunft;
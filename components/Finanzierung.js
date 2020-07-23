import React from 'react';

const Finanzierung = (props) => {
    return (
        <div>
            <section id="finanzierung">
                <h2>#Finanzierung</h2>
                <h1>No Mon€y, no Probl€m! <span>Wähle zwischen 3 flexiblen und fairen Finazierungsmodellen.</span></h1>
                <div className="infos">
                    <div className="info-headline">

                        <h3>Bildungsgutschein ➔</h3>
                        <p>
                            Intensiv, praxisnah und euphorisierend – wir machen dich fit in nur 5 Monaten
                        </p>
                    </div>
                    <div className="info-headline">
                        <h3>Chancen eG ➔</h3>
                        <p>
                            Intensiv, praxisnah und euphorisierend – wir machen dich fit in nur
                            5 Monaten
                        </p>
                    </div>
                    <div className="info-headline">
                        <h3>Ratenzahlung ➔</h3>
                        <p>
                            Kurz, divers und zeitgemäß – lerne Grundlagen im Bereich IT oder
                            schärfe deine Wissen in einer Programmiersprache.
                        </p>
                    </div>
                </div>
            </section>
            <style jsx>{`
        #finanzierung {
            background: #03000F;
            color: #fff;
            padding: 40px 10%;
        }
        h2 {
            
            font-size: 2em;
            letter-spacing: 2px;
            color:#5D3EDE;
            margin-bottom:100px
        }
        #finanzierung div{
            padding:20px;
            
        }
        p {
            font-weight: 400;
            color:#3DD7AC;
            font-size:18px
        }
        h1 {
            font-size: 4em;
            letter-spacing: 2px;
            color:#3DD7AC
        }
        span {
            display: block;
            color: transparent;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: #3DD7AC;
        }
        .infos {
            display: grid;
            grid-template-columns:repeat(3,1fr);
            gap:20px
          }
          
          h3{
            color:#5D3EDE;
            font-size:1.4em
          }
          @media (max-width: 768px) {
            .infos {
                display: grid;
                grid-template-columns:repeat(1,1fr);
                gap:20px
              }
              h1{
                  font-size:2em
              }
        }
    `}
            </style>
        </div>
    );
}

export default Finanzierung;
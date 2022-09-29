import React from "react";

const Finanzierung = (props) => {
  return (
    <div id="finanzierung">
      <h1>
        <span className="stroke">No Mon€y, no Probl€m!</span>
        Wähle zwischen 3 verschiedenen Finanzierungs&shy;modellen.
      </h1>
      <div className="infos">
        <div className="info-headline">
          <h3>Bildungsgutschein</h3>
          <p>
            Unsere Kurse sind zertifiziert und könnnen zu 100% durch einen
            Bildungsgutschein finanziert werden.
          </p>
        </div>
        <div className="info-headline">
          <h3>Bildungskredit</h3>
          <p>
          Lerne jetzt und zahle erst wenn du einen Job gefunden hast – der umgekehrte Generationen Vertrag der Chancen eG machen es möglich.
          </p>
        </div>
        <div className="info-headline">
          <h3>Ratenzahlung</h3>
          <p>
            Du möchtest die Kurskosten in Raten abbezahlen, kein Problem. Wir
            bieten dir 3 faire und flexible Modelle.
          </p>
        </div>
      </div>
      <style jsx>{`
          #finanzierung {
            background: url("./img/Gold-Chain.png") top right/contain no-repeat, var(--super-blau);
            color: var(--super-white);
            padding: 68px 6%; 
          }

          span.stroke {
            display: block;
            color: transparent;
            font-weight: 400;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: var(--super-white);
          }

          .infos {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
            margin-top: 10%;
          }
          .info-headline h3 {
            color: var(--super-lila);
            font-size: 2em;
            margin-bottom: 3%;
          }
          .info-headline p {
            color: var(--super-green); 
            font-weight: 500;
          }

          @media (max-width: 1024px) {
            #finanzierung {
              background-size: 70%;
            }
          }

          @media (max-width: 936px) {
            .infos {
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              gap: 20px;
            }
          }

          @media (max-width: 768px) {
            .infos {
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              gap: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Finanzierung;

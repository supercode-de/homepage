const WerdeTeilTeam = () => {
  return (
    <section className='werdeTeilTeam blueGitter'>
      <article className='info'>
        <div>
          <h2>Werde Teil unseres</h2>
          <h2 className='super-stroke'>Super-Teams!</h2>
        </div>
        <div>
          <p>
            Wir sind immer auf der Suche nach neuen, motivierten Menschen! Wir
            sind jung, dynamisch, international und haben Lust etwas zu
            verändern! Hilf uns dabei unsere Vision von digitaler Bildung
            umzusetzen und dadurch die Welt zu einem chancengerechteren Ort zu
            machen.
          </p>
          <br />
          <p>
            SuperCode steht für moderne didaktische und methodische Bildung,
            eine nachhaltige und gemeinwohlorientierte Unternehmensführung,
            Ehrlichkeit und Transparenz. Wir sind ein Team aus qualifizierten
            und praxiserfahrenen Expert*innen, die Spaß an ihrer Arbeit haben
            und an das glauben, was sie machen. Wir sind mit vielen Firmen aus
            der Region gut vernetzt, nutzen immer den neuesten Tech-Stack und
            legen viel Wert darauf, dass sich jede*r einbringen und mit
            ihrer/seiner Persönlichkeit entfalten kann.{' '}
          </p>
        </div>
      </article>

      <section className='grid-container'>
        <div>
          <h3 className='super-green'>01</h3>
        </div>
        <div>
          <h2 className='grid-HL'>
            <span className='super-stroke'>Tolles Team</span> voller IT
            Enthusiast*innen
          </h2>
        </div>
        <div>
          <h3 className='super-green'>02</h3>
        </div>
        <div>
          <h2 className='grid-HL'>
            Tätigkeit in einem{' '}
            <span className='super-stroke'>innovativen Feld</span>
          </h2>
        </div>
        <div>
          <h3 className='super-green'>03</h3>
        </div>
        <div>
          <h2 className='grid-HL'>
            <span className='super-stroke'>Flexible</span> Beschäftigungsformen
            (Fest, Frei, Remote)
          </h2>
        </div>
        <div>
          <h3 className='super-green'>04</h3>
        </div>
        <div>
          <h2 className='grid-HL'>
            Faires Gehalt, angepasst an{' '}
            <span className='super-stroke'>deine Kenntnisse</span>
          </h2>
        </div>
        <div>
          <h3 className='super-green'>05</h3>
        </div>
        <div>
          <h2 className='grid-HL'>
            Raum für <span className='super-stroke'>eigene Projekte</span>
          </h2>
        </div>
        <div>
          <h3 className='super-green'>06</h3>
        </div>
        <div>
          <h2 className='grid-HL'>
            Super <span className='super-stroke'>Team-Events</span>
          </h2>
        </div>
        <div>
          <h3 className='super-green'>07</h3>
        </div>
        <div>
          <h2 className='grid-HL'>
            Einen Grund morgens{' '}
            <span className='super-stroke'>mit guter Laune</span> aufzustehen!
          </h2>
        </div>
      </section>

      <style jsx>{`
        .werdeTeilTeam {
          color: #fff;
        }
        .info {
          padding: 10vw calc(100vw / 12);
        }
        .info,
        .flex {
          display: flex;
        }
        .info > * {
          width: 100%;
        }
        h2,
        h3,
        p {
          margin: 0;
        }
        .grid-HL {
          font-size: 2.65rem;
          line-height: normal;
        }
        h3 {
          font-size: 2rem;
        }
        .was-wir-bieten {
          margin-top: 8rem;
        }
        .grid-container {
          display: grid;
          grid-template-columns: 0.1fr 1.7fr;
          row-gap: 1rem;
          padding: 0 5% 5rem;
        }
        .super-stroke {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
          display: inline-block;
        }
        .super-green {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--super-green);
          font-weight: 200;
          // font-size: 0.7em;
          // padding-right: 20px;
        }
        @media (max-width: 1040px) {
        }
        @media (max-width: 768px) {
          .info {
            display: block;
          }
          .info div:nth-of-type(1) {
            margin-bottom: 2rem;
          }
          p {
            font-size: 2em;
          }
        }

        @media (max-width: 580px) {
          h3 {
            font-size: 1.5rem;
          }
          .grid-container {
            grid-template-columns: 0.2fr 1.6fr;
          }
          .grid-HL {
            font-size: 1.7rem;
          }
        }
        @media (max-width: 425px) {
          h3 {
            font-size: 1.3rem;
          }
          .grid-container {
            grid-template-columns: 0.3fr 1.5fr;
          }
          .grid-HL {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 375px) {
          h3 {
            font-size: 1.2rem;
          }
          .grid-HL {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WerdeTeilTeam;

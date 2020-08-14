

const ImpressumBody = (props) => {
  return (
    <div id="impressum-text">
      <div className="text-body">
        <div className="block">
          <p>Anbieter dieser Internetseiten ist dieSuperCode GmbH & Co. KG</p>
          <p>hallo@super-code.de</p>
        </div>
        <div className="block">
          <p>Telefon: 0211 7817 2330</p>
        </div>
        <div className="block">
          <p>Geschäftsführer: Sérgio Cardeal, Markus Lezaun</p>
          <p>Handelsregister Nummer: HRA 25439</p>
          <p>Registergericht: Amtsgericht Düsseldorf</p>
        </div>
        <div className="block">
          <p>Alle Rechte an den Inhalten dieser Webseiten bleiben vorbehalten. Jede kommerzielle Verwertung bedarf der vorherigen Zustimmung des Rechtsinhabers. Diese Internetseite enthält gegebenenfalls Verknüpfungen (Links) zu Internetangeboten Dritter. Wir haben bei Setzen der Verknüpfung keine rechtswidrigen Inhalte des Verknüpfungsziels feststellen können. Für den aktuellen Inhalt und etwaige Änderungen nach Setzen der Verknüpfung können wir keine Gewähr übernehmen.</p>
        </div>
      </div>
      <style jsx>{`
        #impressum-text {
          position: relative;
          background-color: #fff;
          background-image: linear-gradient(
              to right,
              rgba(255, 0, 0, 0.25) 0,
              rgba(255, 0, 0, 0.25) 1px,
              transparent 1px,
              transparent 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255, 0, 0, 0.25) 0,
              rgba(255, 0, 0, 0.25) 1px,
              transparent 1px,
    transparent 100%
            );
          background-position: 0 0, 0 0;
          back g round-size: ${props.width}px ${props.width}px;
          
        }
        .text-body {
          font-size: .8em;
            width: 85%;
            margin: 0 auto;
            padding: 50px 0;
        }
        .block {
          padding: 5px 0
        }
        .block p {
          margin: 0;
        }
        
        }
      `}</style>
    </div>

  );
};

export default ImpressumBody;

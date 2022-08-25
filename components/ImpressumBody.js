const ImpressumBody = () => {
  return (
    <section className='impressum-container'>
      <div className='text-body'>
        <div className='block'>
          <p>Anbieter dieser Internetseiten ist die SuperCode GmbH & Co. KG</p>
          <p>hallo@super-code.de</p>
          <p>Telefon: 0211 7817 2330</p>
        </div>
        <div className='block'>
          <p>Geschäftsführer: Sérgio Cardeal</p>
          <p>Handelsregister Nummer: HRA 25439</p>
          <p>Registergericht: Amtsgericht Düsseldorf</p>
        </div>
        <div className='block'>
          <p>
            Alle Rechte an den Inhalten dieser Webseiten bleiben vorbehalten. Jede kommerzielle Verwertung bedarf der vorherigen Zustimmung des Rechtsinhabers. Diese Internetseite enthält gegebenenfalls Verknüpfungen (Links) zu Internetangeboten Dritter. Wir haben bei Setzen der Verknüpfung keine rechtswidrigen Inhalte des Verknüpfungsziels feststellen können. Für den aktuellen Inhalt und etwaige Änderungen nach Setzen der Verknüpfung können wir keine Gewähr übernehmen.
          </p>
        </div>
      </div>
      <style jsx>{`
        .impressum-container {
          color: var(--super-white);
          background: var(--super-lila);
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

      `}</style>
    </section>
  );
};

export default ImpressumBody;

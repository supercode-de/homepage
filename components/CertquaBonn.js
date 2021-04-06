const CertquaBonn = () => {
  return (
    <div id="header-call">
      <h2>
        “SuperCode bietet ein arbeitsmarktlich aussichtsreiches und praxisnahes
        Bildungsangebot im IT-Bereich mit methodisch modernen und hohem Einsatz
        von Lehrpersonal. Hervorzuheben ist die hervorragende Branchenvernetzung
        sowie die innovative Praxiskompetenz der Geschäftsführung und des
        Teams.”
      </h2>

      <div>
        <img src="/img/Certqua_Zeichen_AZAV_klein_4c.png" alt="" />
        <p>- Certqua Bonn</p>
        <p>CERTQUA ist eine durch die Deutsche Akkreditierungsstelle GmbH (DAkkS) akkreditierte Zertifizierungsstelle für Managementsysteme sowie für die Zulassung von Trägern und Maßnahmen nach der Akkreditierungs- und Zulassungsverordnung Arbeitsförderung - AZAV.</p>
      </div>

      <style jsx>{`
        #header-call {
          background: #fff;
          color: #5d3ede;
          font-family: "Neue_Machina_Regular_400";
          padding: 3rem 6.5%;
        }
        #header-call div {
          display: flex;
          align-items: center;
        }

        p {
          margin-left: 2%;
          color: #3dd7ac;
          font-size: 18px;
        }
        p:nth-of-type(2) {
          width: 70%;
          font-size: 16px;
        }
        h2 {
          font-size: 2.3em;
          line-height: 1.4em;
          font-weight: 500;
        }
        @media (max-width: 1040px) {
          h2 {
            font-size: 1.8em;
          }
        }
        @media (max-width: 768px) {
          h2 {
            font-size: 2em;
          }
        }
        @media (max-width: 468px) {
          h2 {
            font-size: 1.5em;
          }
        }
        @media (max-width: 320px) {
          h2 {
          }
        }
      `}</style>
    </div>
  );
};

export default CertquaBonn;

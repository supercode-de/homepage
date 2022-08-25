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

      <div className="certqua-wrapper">
        <div className="certqua">
          <img src="/img/Certqua_Zeichen_AZAV_klein_4c.png" alt="" />
          <p>– Certqua Bonn</p>
        </div>
        <div className="certqua-text">
          <p>CERTQUA ist eine durch die Deutsche Akkreditierungsstelle GmbH (DAkkS) akkreditierte Zertifizierungsstelle für Managementsysteme sowie für die Zulassung von Trägern und Maßnahmen nach der Akkreditierungs- und Zulassungsverordnung Arbeitsförderung - AZAV.</p>
        </div>
      </div>

      <style jsx>{`
        #header-call {
          color: var(--super-lila);
          padding: 7.25rem 6.5%;
        }

        h2 {
          font-size: 3.125rem;
          line-height: 133%;
          margin-bottom: 26px;
        }
        p {
          color: var(--super-green);
        }
        .certqua-wrapper, 
        .certqua {
          display: flex;
          align-items: center;
        }
        .certqua {
          gap: 20px;
        }
        .certqua-wrapper {
          justify-content: space-between;
        }

        .certqua-text {
          width: 70%;
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
          .certqua-wrapper {
            display: block;
          }
        }
        @media (max-width: 468px) {
          h2 {
            font-size: 1.5em;
          }
          p, p:nth-of-type(2) {
            font-size: 1.5em;
          }
        }
        @media (max-width: 540px) {
          #header-call div {
            display: block;
          }
          p:nth-of-type(2) {
            width: 100%;
          }
      }

      `}</style>
    </div>
  );
};

export default CertquaBonn;

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
        </div>
     
      <style jsx>{`
        #header-call {
          background: #fff;
          color: #5d3ede;
          font-family: "Neue_Machina_Regular_400";
          padding: 7.2vh 6.5%;
        }
        #header-call div {
         display:flex;
         align-items: center;
        }
        
        p {
          margin-left: 2%;
          color: #3dd7ac;
          font-size: 18px;
        }
        h2 {
          font-size: 2.8em;
          line-height: 60px;
          font-weight: 300;
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
           h2{
            font-size: 1.5em;
            line-height: 42px;
          }
        }
      `}</style>
    </div>
  );
};

export default CertquaBonn;

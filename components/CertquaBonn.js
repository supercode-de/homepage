
const CertquaBonn = () => {
    return (
        <div id="header-call">
            <h2>“SuperCode bietet ein arbeitsmarktlich aussichtsreiches und <br/> praxisnahes Bildungsangebot im IT-Bereich mit methodisch <br/> modernen und hohem Einsatz von Lehrpersonal. Hervorzuheben <br/> ist die hervorragende Branchenvernetzung sowie die innovative <br/> Praxiskompetenz der Geschäftsführung und des Teams.”</h2>
            <article>
                <div>
            <img src="/img/Certqua_Zeichen_AZAV_klein_4c.png" alt=""/>
            <p>- Certqua Bonn</p>
            </div>
            <div></div>
            </article>
            <style jsx>{`
            #header-call {
                background:#fff;
                color: #5D3EDE;
                font-family:"Neue_Machina_Regular_400";
                padding: 7.2vh 0;
                display:flex;
                flex-direction: column;
                align-items:center;
            }
            #header-call article {
                width: 100%;
                display:grid;
                grid-template-columns: repeat(2,1fr 1fr);
            }

            article div:nth-of-type(1){
                width:97%;
                justify-self: center;
                // grid-column-start: 1;
                display:flex;
                align-items: center;
               justify-content:flex-end;
            }
            p {
                margin-left: 7%;
                color: #3DD7AC;
                font-size:18px;
            }
            h2 {
                font-size:2.6em; 
                line-height:60px; 
                padding: 0 1%;
                font-weight: 300;
                
            }

        `}</style>
        </div>
    );
}

export default CertquaBonn;
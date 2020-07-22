import React from 'react';

const Qualitat = (props) => {
    return (
        <div>
            <section id="qualitat">
                <h2>#Qualität vor Gewinn</h2>
                <div class="border">
                    <p>“SuperCode bietet ein arbeitsmarktlich aussichtsreiches und praxisnahes Bildungsangebot im IT-Bereich mit methodisch modernen und hohem Einsatz von Lehrpersonal. Hervorzuheben ist die hervorragende Branchenvernetzung sowie die innovative Praxiskompetenz der Geschäftsführung und des Teams.”</p>
                    <h3>– Certqua Bonn</h3>
                </div>
            </section>
            <style jsx>{`
        #qualitat {
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
        #qualitat div{
            border:4px solid #3DD7AC;
            padding:20px;
            text-align:center
        }
        p {
            font-weight: 300;
            color:#3DD7AC;
            font-size:20px
        }
    `}
            </style>
        </div>
    );
}

export default Qualitat;
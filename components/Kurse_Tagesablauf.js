import Tagesablauf from "./small/Tagesablauf";

export default function Kurse_Tagesablauf(props) {
  const {kurs, dauer, welt} = props
    return (
        <section className='tagesablauf'>
            <h2 className='tagesablauf-header'>Tagesablauf</h2>
            <article>
                <div>
                    <img src='/img/tagesablauf.jpg' alt='Menschen arbeiten an Computern' />
                </div>
                <div className='tagesablauf-txt'>
                    <h2 className='eat-sleep-header'>
                        <span className='stroke'>
                            Eat, sleep, {kurs} - <br />
                        </span>
                        repeat!
                    </h2>
                    <p>
                        Dein Tagesablauf orientiert sich an der modernen Arbeitswelt von
                        IT-Unternehmen aus der Praxis. Mit genug Zeit für Ruhephasen und
                        Austausch in der Gruppe, sowie mehr Praxis als Theorie und
                        individuelle One-on-One-Trainingsstunden, kommst du optimal durch
                        die {dauer} Monate des Bootcamps.
                    </p>
                    <p>
                        Mit einem Mix aus Livecoding-Sessions, kurzen Theorieparts,
                        Gamification, Gruppenarbeiten, Teambuilding-Projekten und
                        Selbstlernphasen lassen wir keine Langeweile aufkommen und nehmen
                        dich mit in die wunderbare Welt des {welt}.
                    </p>
                </div>
            </article>
            <Tagesablauf kurs={kurs}/>
            <style jsx>{`
              .tagesablauf {
                padding:150px 0 100px 0;
                background: var(--super-lila);
              }
  
            .tagesablauf-header{
              color: var(--super-white);
              padding:0 6% 62px 6%;
              font-size:5rem;
            }
            h2{
              color: var(--super-white);
            }
            h2 .stroke {
              color: transparent;
              -webkit-text-stroke-width: 0.1px;
              -webkit-text-stroke-color: var(--super-white);
              
            }
            .eat-sleep-header{
              color: var(--super-white);
            }
            .tagesablauf article {
              display: flex;
              padding-right: 1%;
            }
            .tagesablauf article > div {
              width: 47%;
            }
            .tagesablauf-txt{
              padding: 0 0 0 4%;
            }
            .tagesablauf-txt p{
              color: var(--super-white);
              width:85%;
            }
            .tagesablauf-txt p:nth-of-type(1){
              margin-bottom: 20px;
            }
            .tagesablauf article > div img {
              width: 100%;
            }
            .tagesablauf_imgContainer {
              padding-top:100px;
              padding-left:1%;
              
            }
            .tagesablauf_imgContainer div{
              width:45%;
              margin:auto;
            }
  
            .tagesablauf_imgContainer img {
              width: 100%;
            }
            .img-wrapper{
              padding: 0 0 10% 0;
            }
            .img-wrapper div{
            padding-right:0;
            }
            @media (max-width: 768px) {
              .tagesablauf-header{
                font-size:3rem;
              }
              .tagesablauf_imgContainer div{
                width:60%;
              }
              .tagesablauf article {
                display: block;
                padding-right: 1%;
              }
              .tagesablauf article > div {
                width: 90%;
                margin:auto;
                
              }
              .tagesablauf article > div p{
                width:100%;
              }

            }
            @media (max-width: 520px) {
              .tagesablauf {
                padding:50px 0 70px 0;
              }
  
              .tagesablauf_imgContainer div{
                width:80%;
              }
              .eat-sleep-header{
                font-size:2rem;
                line-height:28px;
              }
            }
            @media (max-width: 425px) {
              .tagesablauf article {
                display: block;
                padding-right: 1%;
              }
              .tagesablauf-header{
                font-size:2rem;
              }
              .tagesablauf article > div {
                width: 90%;
              }

              .tagesablauf_imgContainer{
                display:block;
              }
              @media (max-width: 375px) {
                  .tagesablauf-header{
                    font-size:1.4rem;
                    padding:0 6% 20px 6%;
                  }
                .eat-sleep-header{
                  font-size:1.4rem;
                  line-height:20px;
                }
                h2 .stroke {
                  color: transparent;
                  -webkit-text-stroke-width: 0.5px;
                  -webkit-text-stroke-color: var(--super-white);
                  
                }
              }
          
          `}
            </style>
        </section>
    );
}

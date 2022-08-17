export default function VZ_Tagesablauf() {
    return (
        <section className='tagesablauf'>
            <h2 className='tagesablauf-header'>
                <span className='circle'>Tagesablauf </span>
            </h2>
            <article>
                <div>
                    <img src='/img/_DSC2128_MidRes.png' alt='' />
                </div>
                <div className='tagesablauf-txt'>
                    <h2 className='eat-sleep-header'>
                        <span className='stroke'>
                            Eat, sleep, code - <br />
                        </span>
                        repeat!
                    </h2>
                    <p>
                        Dein Tagesablauf orientiert sich an der modernen Arbeitswelt von
                        IT-Unternehmen aus der Praxis. Mit genug Zeit für Ruhephasen und
                        Austausch in der Gruppe, sowie mehr Praxis als Theorie und
                        individuelle One-on-One-Trainingsstunden, kommst du optimal durch
                        die fünf Monate des Bootcamps.
                    </p>
                    <p>
                        Mit einem Mix aus Livecoding-Sessions, kurzen Theorieparts,
                        Gamification, Gruppenarbeiten, Teambuilding-Projekten und
                        Selbstlernphasen lassen wir keine Langeweile aufkommen und nehmen
                        dich mit in die wunderbare Welt des Codens.
                    </p>
                </div>
            </article>
            <div className='tagesablauf_imgContainer'>
                <div>
                    <img
                        id="tagesablauf"
                        src={
                            window.screen.width <= 768
                                ? '/img/TagesablaufMobileFullstack.svg'
                                : '/img/Tagesablauf.svg'
                        }
                        alt=''
                    />
                </div>
            </div>
            <style jsx>{`
              .tagesablauf {
                padding:50px 0 100px 0;
                background: var(--super-lila);
              }
  
            .tagesablauf-header{
              color: var(--super-white);
              padding:0 6% 62px 6%;
              font-size:5rem;
            }
            h2{
              color: var(--super-white);
              margin-bottom:0;
            }
            h2 .stroke {
              color: transparent;
              -webkit-text-stroke-width: 0.1px;
              -webkit-text-stroke-color: var(--super-white);
              
            }
            .circle {
              position: relative;
            }
            .tagesablauf-header span.circle::after {
              position: absolute;
              background: url('/img/Vector64.svg') center/contain no-repeat;
              height:135%;
              width: 100%;
              right: 28%;
              bottom: -20%;
              content: '';
              display: block;
            }
  
            .eat-sleep-header{
              font-size:3.5rem;
              color: var(--super-white);
              margin-bottom:0;
              line-height:50px;
            }
            .tagesablauf article {
              display: flex;
              padding-right: 1%;
            }
            .tagesablauf article > div {
              width: 47%;
            }
            .tagesablauf-txt{
              padding 0 0 0 4%;
            }
            .tagesablauf-txt p{
              color: var(--super-white);
              width:85%;
              font-size:1rem;
              line-height:19px;
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

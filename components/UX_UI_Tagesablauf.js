export default function UX_UI_Tagesablauf() {
  return (
    <section className='tagesablauf '>
      <h2 className='tagesablauf-header'>
        <span className='circle'>Tagesablauf </span>
      </h2>
      <article>
        <div>
          <img src='/img/_DSC2690_LowRes.png' alt='' />
        </div>
        <div className='tagesablauf-txt'>
          <h2 className='eat-sleep-header'>
            <span className='stroke'>
              Eat, sleep, design- <br />
            </span>
            repeat!
          </h2>
          <p>
            Dein Tagesablauf orientiert sich an der modernen Arbeitswelt von
            IT-Unternehmen aus der Praxis. Mit genug Zeit für Ruhephasen und
            Austausch in der Gruppe, sowie mehr Praxis als Theorie und
            individuellen One-on-One-Trainingsstunden, kommst du optimal durch
            die drei Monate des Bootcamps.
          </p>
          <p>
            Mit einem Mix aus Livecoding-Sessions, kurzen Theorieparts,
            Gamification, Gruppenarbeiten, Teambuilding-Projekten und
            Selbstlernphasen lassen wir keine Langeweile aufkommen und nehmen
            dich mit in die wunderbare Welt des Designs.
          </p>
        </div>
      </article>
      <div className='tagesablauf_imgContainer'>
        <div>
          {/* <img src='/img/Group196.svg' alt='' /> */}
          <img
            src={
              window.screen.width >= 525
                ? '/img/TagesablaufSamstagUX.svg'
                : '/img/TagesablaufGanztägigUX.svg'
            }
          />
        </div>
        <div className='img-wrapper'>
          {/* <img src='/img/Group197.svg' alt='' /> */}
          <img
            src={
              window.screen.width >= 525
                ? '/img/TagesablaufAbendsUX.svg'
                : '/img/TagesablaufAbendsMobileUX.svg'
            }
          />
        </div>
      </div>
      <style jsx>
        {`
              .tagesablauf {
                padding:50px 0 100px 0;
                
                 
                  font-family: 'Neue_Machina_Regular_400';
                  position: relative;
                  background-color: var(--super-green);
                  background-image: linear-gradient(
                      to right,
                      rgba(255, 255, 255, 0.25) 0,
                      rgba(255, 255, 255, 0.25) 1px,
                      transparent 1px,
                      transparent 100%
                    ),
                    linear-gradient(
                      to bottom,
                      rgba(255, 255, 255, 0.25) 0,
                      rgba(255, 255, 255, 0.25) 1px,
                      transparent 1px,
                      transparent 100%
                    );
                  background-position: 0 0, 0 0;
                  background-size: calc(100vw / 12) calc(100vw / 12);
                
              }
  
            .tagesablauf-header{
              color: #fff;
              padding:0 6% 62px 6%;
              font-size:5rem;
            }
  h2{
    color:var(--super-lila);
    margin-bottom:0;
  }
            h2 .stroke {
              color: transparent;
              -webkit-text-stroke-width: 0.1px;
              -webkit-text-stroke-color: var(--super-lila);
              
            }
            .circle {
              position: relative;
            }
            .tagesablauf-header span.circle::after {
              position: absolute;
              background: url('/img/Vector64-lila.svg') center/contain no-repeat;
              height:135%;
              width: 100%;
              right: 28%;
              bottom: -20%;
              content: '';
              display: block;
            }
  
            .eat-sleep-header{
              font-size:3.4rem;
              color:var(--super-lila);
              margin-bottom:0;
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
          color: var(--super-lila);
          width:80%;
          font-size: 1rem;
          line-height:19px;
            }
            .tagesablauf article > div img {
              width: 100%;
            }
            // .tagesablauf_imgContainer {
            //   // display: grid;
            //   grid-template-columns: 78% 22%;
              
            //   padding:110px 10% 0 10%;
              
            // }
            .tagesablauf_imgContainer {
              display: flex;
              grid-template-columns: 45% 45%;
              padding: 0 5%;
              padding-top:70px;
            text-align:center;

            }
            .tagesablauf_imgContainer div:nth-of-type(1) {
              margin-bottom:30px;
             }
             .tagesablauf_imgContainer div {
             padding:0 20px;
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
              // .tagesablauf-header{
              //   font-size:3rem;
              // }
              .tagesablauf_imgContainer {
                display:block;
              }
              .eat-sleep-header{
                font-size:2.4rem;
                color:var(--super-lila);
                margin-bottom:0;
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
              // .img-wrapper{
              //   display:none;
              // }
            }
            @media (max-width: 525px) {
              .tagesablauf-header{
                font-size:2.3rem;
              }
            }
            @media (max-width: 425px) {
              .tagesablauf article {
                display: block;
                padding-right: 1%;
              }
              .tagesablauf-header{
                font-size:1.8rem;
              }
              .tagesablauf article > div {
                width: 90%;
                
              }
              .img-wrapper{
                // display:none;
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
                color:var(--super-lila);
                margin-bottom:0;
              }
              h2 .stroke {
                color: transparent;
                -webkit-text-stroke-width: 0.4px;
                -webkit-text-stroke-color: #fff;
                
              }
            }
          `}
      </style>
    </section>
  );
}

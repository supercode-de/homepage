export default function FS_Tagesablauf() {
  return (
    <section className='tagesablauf lilaGitter'>
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
            Dein Tagesablauf orientiert sich an der modernen Arbeitswelt von IT-Unternehmen aus der Praxis.Mit genug Zeit für Ruhephasen und Austausch in der Gruppe, sowie mehr Praxis als Theorie und individuellen One-on-One-Trainingsstunden, kommst du optimal durch die sieben Monate des Bootcamps.
          </p>
          <p>
            Mit einem Mix aus Livecoding-Sessions, kurzen Theorieparts, Gamification, Gruppenarbeiten, Teambuilding-Projekten und Selbstlernphasen lassen wir keine Langeweile aufkommen und nehmen dich mit in die wunderbare Welt des Codens.
          </p>
          <p>
            An den Samstagen arbeitest du im Peer-to-Peer Format an spannenden Webprojekten und lernst den Arbeitsalltag als Web-Entwickler*in kennen. Zusätzlich bieten wir dir vier Intensiv-Workshops mit Fachexpert*innen aus der Praxis an, die dich noch tiefer in die Materie mitnehmen.
          </p>
        </div>
      </article>
      <div className='tagesablauf_imgContainer'>
        {/* <div>
         
          <img
            src={
              window.screen.width >= 525
                ? '/img/Tagesablauf-abends.svg'
                : '/img/Tagesablauf-mobile-abends.svg'
            }
          />
        </div>
        <div className=''>
         
          <img
            src={
              window.screen.width >= 525
                ? '/img/Tagesablauf-samstags.svg'
                : '/img/Tagesablauf-mobile-samstags.svg'
            }
          />
        </div> */}

        <div>
          <picture>
            <source media="(max-width:576px)" srcset="/img/FE-Tagesablauf-Mobile.svg" />
            <source media="(max-width:768px)" srcset="/img/FE-Tagesablauf-Tablet.svg" />

            <img src="/img/FE-Tagesablauf.svg" alt="" />
          </picture>
        </div>
      </div>
      <style jsx>{`
                      .tagesablauf {
                        padding:50px 0 100px 0;
                      }

                    .tagesablauf-header{
                      color: #fff;
                      padding:0 6% 62px 6%;
                      font-size:5rem;
                    }
          h2{
            color:#fff;
            margin-bottom:0;
          }
                    h2 .stroke {
                      color: transparent;
                      -webkit-text-stroke-width: 0.1px;
                      -webkit-text-stroke-color: #fff;

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
                      color:#fff;
                      margin-bottom:0;
                      line-height:38px;
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
                  color: #fff;
                  width:85%;
                  font-size:1rem;
                  line-height:19px;
                    }
                    .tagesablauf article > div img {
                      width: 100%;
                    }
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
                      .tagesablauf {
                        padding:50px 0 70px 0;
                      }

                      .tagesablauf-header{
                        font-size:3rem;
                      }
                      .tagesablauf_imgContainer {
                        display:block;
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
                    @media (max-width: 520px) {
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
                      .img-wrapper{
                        display:none;
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
                        -webkit-text-stroke-color: #fff;
                        
                      }
                    }
        `}
      </style>
    </section>
  );
}

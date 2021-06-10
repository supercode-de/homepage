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
              Eat -Sleep - Code <br />
            </span>
            Repeat!
          </h2>
          <p>
            Dein Tagesablauf orientiert sich an der modernen Arbeitswelt von
            IT-Unternehmen aus der Praxis. Mit genug Zeit für Ruhephasen und
            Austausch in der Gruppe, sowie mehr Praxis als Theorie und
            individuelle 1on1-Trainingsstunden, kommst du optimal durch die fünf
            Monate des Bootcamps.
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
          <img src='/img/Group153.svg' alt='' />
        </div>
        <div className='img-wrapper'>
          <img src='/img/_DSC2141_LowRes.png' alt='' />
        </div>
      </div>
      <style jsx>
        {`
            .tagesablauf {
              padding:50px 0 100px 0;
            }

          .tagesablauf-header{
            color: #fff;
            padding:0 6% 62px 6%;
            font-size:4.95rem;
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
            font-size:4rem
            color:#fff;
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
        color: #fff;
        width:80%;
          }
          .tagesablauf article > div img {
            width: 100%;
          }
          .tagesablauf_imgContainer {
            display: grid;
            grid-template-columns: 78% 22%;
            padding-top:30px;
            padding-left:1%;
            
          }
          .tagesablauf_imgContainer div:nth-of-type(2) {
            margin-top:130px;
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
        `}
      </style>
    </section>
  );
}

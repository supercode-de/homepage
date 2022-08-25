import Layout from '../components/Layout';
import { useWindowSize } from '../components/functions/windowSize';
import HubspotForm from 'react-hubspot-form';
import TelefonAside from '../components/small/TelefonAside';

export default function Workshop() {
  const pixelSize = 1;
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div id='headr'>
          <header>

            <h1 className='headline'>
              <span className='stroke'>Yeah!</span>
            </h1>
            <h1 className='willkommen'>
              <span className='after-span'> Willkommen</span>
            </h1>

            <h2>kostenloser UX & UI-Design Workshop!</h2>
          </header>
          <section className='headerCTA'>
            <h3 id='reibungslos'>
              Für einen <span className='circle'>reibungslosen </span> Ablauf
              benötigst du:
            </h3>
            <article>
              <div>
                <h3>
                  – einen{' '}
                  <a
                    href='https://www.figma.com 
'
                    target='_blank'
                  >
                    Figma.com
                  </a>{' '}
                  Account
                </h3>
                <h3>– bestenfalls zwei Monitore</h3>
              </div>
              <div>
                <h3>– eine ruhige Umgebung</h3>
                <h3>– Gute Laune :) </h3>
              </div>
            </article>
            <h3 className='ps'>
              PS: Am besten lässt du dein Mikrofon auf stumm und aktivierst es erst, wenn du etwas sagen möchtest.
            </h3>
          </section>
          <TelefonAside/>
        </div>
        <div id='arrow-img'>
          <img src='/img/Arrow24.svg' alt='' />
        </div>
        <div id='sign-up'>
          <div id='notice'>
            <h4 id='hier'>Hier gehts zur Anmeldung!</h4>
            <p>Aber, DSGVO First! ;)</p>
            <p>
              Aus Datenschutzgründen müsst ihr unser online Kontaktformular
              ausfüllen.
              <br />
              Anschließend werdet ihr zum Workshop-Video-Chat weitergeleitet.
            </p>
          </div>
          <div id='form'>
            <HubspotForm
              portalId='5807040'
              formId='900d6ea0-0379-4182-a786-61c2092c9e75'
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
              loading={<div>Loading...</div>}
            />
          </div>

        </div>
        <style jsx>{`
          #arrow-img{
            position:absolute;
            z-index:3;
            bottom:-566px;
          }
          #hier{
            font-size:1.6rem;
            color: var(--super-black);
          }
          header{
            padding: 15rem 0;
            text-align: center;
            background-color: var(--super-lila);
          }
          header h2{
            font-size:1.8rem;
            color:var(--super-white);
          }
          .headline .stroke{
            color: black;
            font-size:7.5rem;
            margin-top:0;
          }
          .willkommen{
            color:var(--super-green);
            font-size:8rem;
          }
          .headline .stroke{
            color: transparent;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 0.1px;
            -webkit-text-stroke-color: var(--super-green);
          }
          .after-span {
            padding-bottom: 2rem;
            padding-right: 2rem;
            display:inline-block;
            position:relative;
          }
          .willkommen .after-span {
            content: '';
            background: url('/img/vector127.svg') 0px 120px / contain no-repeat;
          }
          .headerCTA{
            color: var(--super-white);
            background: var(--super-black);
            padding: 120px 0;
          }
          .headerCTA #reibungslos{
            font-size:2.1rem;
            padding-left:2%;
            width:90%;
            margin:auto;
            margin-bottom:40px;
          }
          .headerCTA article{
            display:flex;
            justify-content:space-between;
          }

          .ps{
            width:85%;
            margin:auto;
            font-size:1.3rem;
            margin-top:30px;
          }
          .headerCTA article div{
            width:50%;
            padding-left:5%;
          }
          .headerCTA article h3{
            font-size:2rem;  
          }
          .headerCTA article h3 a{
            color:var(--super-white);
          }

          #index-finger{
            font-size: 4rem;
            position:relative;
            top:50px;
          }

          .circle {
            position: relative;
          }
          .circle::after {
            position: absolute;
            background: url('/img/Vector64.svg') center/contain no-repeat;
            height: 285%;
            width: 100%;
            right: 2%;
            bottom: -81%;
            content: '';
            display: block;
          }

          .buttons{
            display:flex;
            justify-content: center;
            padding-left:60%;
            text-align:right;
          }
          #sign-up {
            display:flex;
            justify-content:center;
            padding-bottom: 5rem;
            padding-top: 15rem;
          }
          #notice {
            font-weight: bold;
            padding: 5rem 0;
            max-width: 35rem;
          }

          #form {
            padding-top: 5rem;
            padding: 20px;
            background: var(--super-black);
            color: var(--super-green);
            border-radius: .5rem;
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 3em;
              width: 90%;
              margin: 0 auto;
            }
            .headline .stroke{
              font-size:2.8rem;
              margin-top:0;
              position:relative;
              top:0px;
              }
            .willkommen{
              font-size:3rem;
              font-family:"Neue_Machina_Ultrabold"
            }
            #index-finger{
              font-size: 3rem;
            }
            .headerCTA #reibungslos{
              font-size:1.5rem;
              padding-left:2%;
            }
            .headerCTA article div{
              width:50%;
              padding-left:5%;
            }
            .headerCTA article h3{
              font-size:1rem;
            }
            .buttons{
              padding-left:15%;
              margin:auto;
              text-align:center;
            }
          }
          @media (max-width: 575px) {
            .buttons{
              display:flex;
              padding:0;
              text-align:right;
            }
          }
            @media (max-width: 425px) {
              header h2{
                font-size:1.8rem;
                color:#fff;
                position:relative;
                top:-45px;
              }
              .headline{
                font-size:2.5rem;
                margin-top:0;
                position:relative;
                top:0;
              }
              .willkommen{

                font-size:2rem;
              }
              .headerCTA article h3{
                font-size:1rem;
              }
              .headerCTA #reibungslos{
                ont-size:1.3rem;
              }

              #form{
                width:100%;
              }
            }
        }
      `}</style>
      </Layout>
    );
  } else {
    return '';
  }
}

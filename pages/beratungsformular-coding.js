import Layout from '../components/Layout';
import { useWindowSize } from '../components/functions/windowSize';
import HubspotForm from 'react-hubspot-form';
import Arrow from '../components/small/Arrow';
import Telefon from '../components/small/Telefon';
import Beratung from '../components/Beratung';
import Beratung_flexible from '../components/Beratung_flexible';
import Button from '../components/small/Button';
import Link from 'next/link';

export default function Workshop() {
  const pixelSize = 1;
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div id='headr'>
          <header className='lilaGitter'>
            {/* <div id='header'></div> */}
            {/* <div id='waving'>👋</div> */}

            <h1 className='headline'>
              <span className='stroke'>Willkommen</span>
            </h1>
            <h1 className='willkommen'>
              <span className='after-span'>
                {' '}
                <span className='stroke'>bei </span> SuperCode
              </span>
            </h1>
            {/* <div className="aside">📞 +49 211 7817 233-0</div> */}
            <Telefon color='#fff' />
          </header>

          {/* <div className="aside">📞 +49 211 7817 233-0</div> */}
          <Telefon color='#fff' />
        </div>
        <div id='arrow-img'>
          <img src='/img/Arrow24.svg' alt='' />
        </div>
        <div id='sign-up'>
          <div id='form'>
            {/* <HubspotForm
              portalId='5807040'
              formId='e48452f8-ff46-4ff5-b946-f9fc138ed732'
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
              loading={<div>Loading...</div>}
            /> */}
            <HubspotForm
              portalId='5807040'
              formId='b1c54768-9387-49e1-9669-ea5c0f58ebd6'
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>

        <style jsx>{`
        * {
          font-family: "Neue_Machina_Regular_400";
        }

        #arrow-img img{
            width:100%;
          }
  
          #arrow-img{
            width:25%;
              position:absolute;
              z-index:3;
             bottom:-250px;
             left:4%;
         
            }
       
        header{
          padding:100px 0;
          text-align:center;
          padding-bottom:195px;
          
        }
        header h2{
          font-size:1.8rem;
          color:#fff;
          position:relative;
          top:-45px;
        }
        .headline{
          color:#3DD7AC;
          font-size:7.5rem;
          margin-top:0;
          position:relative;
          top:110px;
        }
        .willkommen{
          color:#3DD7AC;
          font-size:8rem;
          font-family:"Neue_Machina_Ultrabold"
          font-weight:ultra-bold;
          margin-top:48px;
        }

        .stroke{
            color: transparent;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 0.1px;
            -webkit-text-stroke-color: #3DD7AC;
        }
        .headline .stroke{
              color: transparent;
              letter-spacing: 3px;
              -webkit-text-stroke-width: 0.1px;
              -webkit-text-stroke-color: #3DD7AC;
        }
        .after-span {
          padding-bottom: 2rem;
          padding-right: 2rem;
          display:inline-block;
          position:relative;
         
        }
        .willkommen .after-span {
          content: '';
          background: url('/img/stricheGreen.svg') 0px 120px / contain no-repeat;
        }
        .strich {
          padding-bottom: 2rem;
          padding-right: 0.9rem;
          display:inline-block;
          position:relative;
          content: '';
          background: url('/img/stricheGreen.svg') -7px 30px / contain no-repeat;
        }
     
        .headerCTA{
          color:#fff;
          background: var(--super-black);
          padding: 100px 0;
        }
        .headerCTA #reibungslos{
          // font-family: "Neue_Machina_Regular_400"
          font-size:2.1rem;
          padding-left:2%;
         
      
        }
   
     
       
       
        .ps{
          width:85%;
          margin:auto;
          font-size:1.3rem;
          margin-top:30px;
      }
        #index-finger{
          font-size: 4rem;
        }
        .footerCTA{
          color:#fff;
          background: var(--super-lila);
          padding: 120px 0;
        }
        .footerCTA h2{
        
           font-size: 3.3rem;
           width:80%;
           margin:auto;
         
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
        .headerCTA article h3 a{
          color:#fff;
         
             }

             #index-finger{
              font-size: 4rem;
              position:relative;
              top:50px;
            }
        .website {
          font-family: 'Fira Sans', sans-serif;
          font-size: 15px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 10px 0px;
          background: transparent;
          border: 1px solid var(--super-green);
         
          color: #fff;
          justify-self: center;
          display: inline-block;
          min-width: 200px;
          width: 50px;
        }
        .website:hover {
          color: var(--super-lila);
          background: var(--super-green);
          cursor: pointer;
        }
        .buttons{
          display:flex;
          justifiy-content: center;
        padding-left:60%;
        margin-:auto;
        text-align:right;
        }
        //=========== Alter Code ========
        #header {
            background:       linear-gradient(90deg, #03000F ${
              width - pixelSize
            }px,
                              transparent 1%),
                              linear-gradient(#03000F ${
                                width - pixelSize
                              }px, transparent 1%),
                              #fff;
            background-size: ${width}px ${width}px;
            padding: 10vh 2rem;
        }
        #sign-up {
          position: relative;
          background-color: #fff;
          background-image:
            linear-gradient(
              to right,
              rgba(255, 0, 0, 0.25) 0,
              rgba(255, 0, 0, 0.25) 1px,
              transparent 1px,
              transparent 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255, 0, 0, 0.25) 0,
              rgba(255, 0, 0, 0.25) 1px,
              transparent 1px,
              transparent 100%
            )
          ;
          background-position: 0 0, 0 0;
          background-size: ${width}px ${width}px;
          
          justify-content: center;
        
          padding:7em 7%;
        }
        #notice {
          font-weight: bold;
          padding: 5rem 0;
          max-width: 35rem;
        }
        #waving {
          text-align: center;
          font-size: 5rem;
          padding: 0;
          margin-bottom: 1rem; 
          animation: wave 0.45s linear infinite;
          animation-direction: alternate-reverse;
        }
        #form {
          background: 
          padding-top: 5rem;
          padding: 20px;
          background: #03000F;
          color:#3DD7AC;
          border-radius: .5rem;
          width:100%;
        }
        
        
        // h1 {
        //     margin: 0;
        //     font-size: 4em;
        //     letter-spacing: 2px;
        //     color: #3DD7AC;
        //     text-align: center;
        //     padding-bottom: 3rem;
        // }
        // .aside {
        //     position: absolute;
        //     transform: rotate(-90deg);
        //     transform-origin: right;
        //     right: 3%;
        //     top: 30vh;
        //     color: #fff
        //   }
        // h1 span {
        //     display: block;
        //     color: transparent;
        //     letter-spacing: 3px;
        //     -webkit-text-stroke-width: 1.5px;
        //     -webkit-text-stroke-color: #3DD7AC;
        // }
        
          @keyframes wave {
            0% {
              transform: rotate(-40deg);
            }
            100% {
              transform: rotate(-10deg);
            }
          }
          @media (max-width: 768px) {
            h1 {
                font-size: 3em;
                width: 90%;
                margin: 0 auto;
            }
            .headline{
              color:#3DD7AC;
              font-size:2.8rem;
              margin-top:0;
              position:relative;
              top:10px;
            }
            .willkommen{
              color:#3DD7AC;
              font-size:3rem;
              font-family:"Neue_Machina_Ultrabold"
              font-weight:ultra-bold;
    
            }
            #index-finger{
              font-size: 3rem;
            }
            .headerCTA #reibungslos{
              // font-family: "Neue_Machina_Regular_400"
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
            .footerCTA{
              color:#fff;
              background: var(--super-lila);
              padding: 120px 0;
            }
            .footerCTA h2{
            
               font-size: 2rem;
               width:80%;
               margin:auto;
             
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
              justifiy-content: center;
            padding:0;
            margin-:auto;
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
                color:#3DD7AC;
                font-size:2.5rem;
                margin-top:0;
                position:relative;
                top:0;
              }
              .willkommen{
                color:#3DD7AC;
                font-size:2rem;
                font-family:"Neue_Machina_Ultrabold"
                font-weight:ultra-bold;
              }
              .headerCTA article h3{
                font-size:1rem;
               
                   }
                   .headerCTA #reibungslos{
                     font-size:1.3rem;
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

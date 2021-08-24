import React from 'react';
import Beratung from './Beratung';
export default function FS_Bildungsberatung() {
  return (
    <section className='blackGitter bildungsberatung'>
      <h2>
        {' '}
        Unsere <br />{' '}
        <span className='circle'>
          {' '}
          <span className='stroke'>Bildungsberatung </span>
        </span>
      </h2>

      <article className='bildungs-berater'>
        <figure className='berater_1'>
          <img src='/img/team/Henri Delfmann.png' alt='' />

          <figcaption className='bold'>
            Henri Delfmann <br /> SuperCode Bildungsberater
          </figcaption>
        </figure>
        <figure className='berater_2'>
          <img
            src='/img/team/Shapour Amir Ebrahimi Bildungsberatung_neu.jpg'
            alt=''
          />
          <figcaption className='bold'>
            Shapour Amir-Ebrahimi <br /> SuperCode Bildungsberater
          </figcaption>
        </figure>
      </article>
      <div className='berater-txt'>
        <p>
          Ganz gleich welcher Weg dich zu SuperCode geführt hat, Shapour und
          Henri sind deine ersten Ansprechpartner und nehmen dich an die Hand im
          gesamten Aufnahmeprozess.
        </p>
        <p>
          Sie beantworten alle Fragen, helfen dir bei den Formularen und klären
          mit dir und dem Kostenträger die Finanzierung ab.
        </p>

        <p>
          Beratungsgespräche können telefonisch, online oder vor Ort erfolgen.
        </p>
        <p>Wir freuen uns auf dich!</p>
      </div>
      <button className='kontakt-btn'>
        <Beratung buttonText='KONTAKT' buttonTextColor='#fff' />
      </button>
      <style jsx>
        {`
          .bildungsberatung {
            padding: 115px 0 116px 0;
          }

          h2 {
            color: #fff;
            padding-left: 6%;
            margin: 0 0 50px 0;
            font-size: 5rem;
            line-height:74px;
          }
          h2 .stroke {
            color: transparent;
            -webkit-text-stroke-width: 0.1px;
            -webkit-text-stroke-color: #fff;
          }

        }
        .circle {
          position: relative;
        }
        h2 .circle::after {
          position: absolute;
          background: url('/img/Vector64.svg') center/contain no-repeat;
          height:190%;
          width: 89%;
          right: -19%;
          bottom: -38%;
          content: '';
          display: block;
        }
          .bildungs-berater {
            display: grid;
            grid-template-columns: 1fr 1fr;
            // padding: 0 8% 10% 8%;
            justify-items: center;
            padding: 0 7%;
            column-gap: 2%;
          }
          figure {
            width: 100%;
            font-size: 1.4rem;
            font-weight: bolder;
          }
          .berater_1 img,
          .berater_2 img {
            width: 100%;
          }
          .bildungs-berater .berater_2 {
          }
          .bildungs-berater .berater_1 {
          }

          figcaption {
            color: var(--super-green);
            padding-top: 50px;
          }
          .berater-txt {
            padding: 60px 6%;
          }
          .berater-txt p {
            color: #fff;
            margin: 28px auto;
          }
          .kontakt-btn{
           background:transparent;
           border:none;
           display:block;
        
           position:absolute;
           right:13%;
       
          }
          @media (max-width: 905px) {
            h2{
              font-size:3rem;
            }
          }
          @media (max-width: 768px) {
            h2{
              font-size:2.4rem;
            }
            .bildungs-berater{
            
              padding:0 2%;
            }
            figcaption{
              font-size:1rem;
              padding:20px 0;
            }
            figure{
              margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
            }
            .berater-txt p {
              margin-bottom:0;
            }
          }
          @media (max-width: 460px) {
            .bildungsberatung {
              padding: 35px 0 116px 0;
            }
            h2{
              font-size:1.8rem;
              line-height:28px;
              
            }
            .berater-txt p {
             font-size:1rem;
             line-height:1rem;
            }
          }
          @media (max-width: 425px) {
            h2{
              font-size:1.8rem;
            }
            .bildungs-berater{
            
              padding:0 2%;
            }
            figcaption{
              font-size:1rem;
              padding:20px 0;
            }
          }
  
            @media (max-width: 375px) {
              h2{
                font-size:1.4rem;
              }
            }
     
          
        `}
      </style>
    </section>
  );
}

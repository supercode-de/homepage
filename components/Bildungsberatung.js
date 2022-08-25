import React from 'react';
import Beratung from './Beratung';
import data from './data/team.json';
export default function Bildungsberatung() {
  return (
    <section className='bildungsberatung'>
      <h2>Unsere</h2>
      <h2>
        <span className='circle'>
          <span className='stroke'>Bildungsberatung </span>
        </span>
      </h2>
      <section className='bildungs-berater'>
        {data.map((teammitglied) => {
          if (teammitglied.team === "beratung") {
            return (
              <figure>
                <img
                  src={teammitglied.img}
                  alt={`${teammitglied.name} ${teammitglied.job}`}
                />
                <figcaption>{teammitglied.name}</figcaption>
              </figure>
            );
          }
        })}
      </section>

      <div className='berater-txt'>
        <p>
          Ganz gleich welcher Weg dich zu SuperCode geführt hat, Shapour, Henri und Nina sind deine ersten Ansprechpartner*innen und nehmen dich an die Hand im gesamten Aufnahmeprozess. Sie beantworten alle Fragen, helfen dir bei den Formularen und klären mit dir und dem Kostenträger die Finanzierung ab.
        </p>

        <p>
          Beratungsgespräche können telefonisch, online oder vor Ort erfolgen.
        </p>
        <p>Wir freuen uns auf dich!</p>
      </div>
      <button className='kontakt-btn'>
        <Beratung buttonText='KONTAKT' buttonTextColor='#fff' />
      </button>
      <style jsx>{`
          .bildungsberatung {
            padding: 115px 0 116px 0;
            background: var(--super-black);
          }

          h2 {
            color: var(--super-white);
            padding-left: 6%;
            margin: 0 0 50px 0;
            font-size: 5rem;
            line-height:74px;
          }
          h2 .stroke {
            color: transparent;
            -webkit-text-stroke-width: 0.1px;
            -webkit-text-stroke-color: var(--super-white);
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
            grid-template-columns: repeat(3, 1fr);
            width: 80%;
            justify-items: center;
            margin: 0 auto;
          }

          figcaption {
            color: var(--super-green);
            padding-top: 1rem;
            font-size: 1.4rem;
          }
          .berater-txt {
            padding: 100px 6%;
          }
          .berater-txt p {
            color: var(--super-white);
            margin: 28px auto;
          }
          .kontakt-btn{
            background:transparent;
            border:none;
            display:block;
        
            position:absolute;
            right:13%;
          }
          @media (max-width: 1530px) {
            .bildungs-berater {
              grid-template-columns: repeat(2, 1fr);
              row-gap: 50px;
            }
          }
          @media (max-width: 1140px) {
            .bildungs-berater {
              grid-template-columns: 1fr;
              row-gap: 50px;
            }
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
              line-height:18px;
            }
          }
          @media (max-width: 425px) {
            h2{
              font-size:1.8rem;
              line-height:20px;
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

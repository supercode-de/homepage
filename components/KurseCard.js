import Curriculum from './Curriculum_Popup';
import { useRouter } from 'next/router';
import HubspotForm from 'react-hubspot-form';
import JetztBewerben_UXUI_Warteliste from './JetztBewerben_UXUI_Warteliste';
// import ButtonGreen from './small/ButtonGreen';
// import Link from 'next/dist/client/link';
// import Router from 'next/dist/next-server/server/router';
const KurseCard = (props) => {
  const router = useRouter();
  const {
    headline,
    headlineID,
    umfang,
    start,
    copy,
    hubspotFormID,
    typeformFormularID,
    href,
    published
  } = props.data;
  return (
    <section className='kurseCard'>
      <div className='headlines'>
        <h5 id={headlineID}>{headline}</h5>
      </div>
      <div className='text'>
        <p>{umfang}</p>
        <p>{copy}</p>
      </div>
      <div className='buttons'>
        {published ?
          <div>
            <Curriculum
              buttonTextColor='#fff'
              buttonText='Curriculum'
              hubspot={hubspotFormID} />
            <button onClick={() => router.push(href)}>ZUM KURS</button>
          </div>
          : <JetztBewerben_UXUI_Warteliste />}

      </div>
      <style jsx>{`
          .kurseCard {
            border: 4px solid var(--super-green);
            background: var(--super-lila);
            white-space: pre-line;
            border-radius: 2rem;
            // display: flex;
            // flex-direction: column;
            // min-height: 100%;
            padding: 43px 28px;
            // diese grid Styles werden nur gebraucht, wenn das Carousel in Bootcamp.js da ist
            // das dient dazu, die Karten auf eine einheitliche Höhe zu bekommen.
            // display: grid;
            // grid-template-rows: 0.3fr 1.1fr minmax(20px, 60px);
            // grid-template-areas:
            //   'headlines'
            //   'text'
            //   'buttons';
          }
          .headlines {
            grid-area: headlines;
          }
          .text {
            grid-area: text;
          }
          .buttons {
            grid-area: buttons;
          }

          .kurseCard:hover {
            background: var(--super-blau);
          }
          .kurseCard:hover > button {
            background: var(--super-blau);
          }
          // .buttons {
          //   min-width: 100%;
          //   display: flex;
          //   gap: 1rem;
          // }

          button {
            font-family: 'Fira Sans', sans-serif;
            width: 100%;
            font-size: 0.875em;
            background: transparent;
            outline: none;
            border: 1px solid var(--super-green);
            color: var(--super-white);
            padding: 15px 0;
            letter-spacing: 1px;
            text-transform: uppercase;
            border-radius: 5rem;
          }
          button:hover {
            background: var(--super-green);
            color: var(--super-lila);
            cursor: pointer;
          }

          h5 {
            font-family: 'Neue_Machina_Ultrabold';
            font-size: 2.5rem;
            margin: 0;
            padding: 0;
          }
          p {
            font-family: 'Neue_Machina_Regular_400';
            line-height: 25px;
          }

          @media (max-width: 1440px) {
            h5 {
              font-size: 2rem;
            }
            .kurseCard {
              grid-template-rows: 0.2fr 1.2fr minmax(20px, 60px);
            }
          }
          @media (max-width: 768px) {
            .kurseCard {
              // grid-template-rows: 0.2fr 1.2fr minmax(20px, 60px);
            }
            h5 {
              font-size: 1.6rem;
            }
            p {
              font-size: 14.7px;
            }
          }
          @media (max-width: 425px) {
            .kurseCard {
              padding-bottom: 80px;
            }
            .buttons {
              flex-direction: column;
            }
            button {
              padding-top: 15px;
              padding-bottom: 15px;
              font-size: 1.2em;
            }
          }
          @media (max-width: 375px) {
            h5 {
              font-size: 1.5rem;
            }
          }
          @media (max-width: 320px) {
          }
        `}
      </style>
    </section>
  );
};

export default KurseCard;

import Curriculum from './Curriculum_Popup';
import { useRouter } from 'next/router';
// import HubspotForm from 'react-hubspot-form';
import Typeform_neu2022 from './Typeform_neu2022';

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
  console.log(headline, hubspotFormID);
  return (
    <section className='kurseCard'>
      <div className='headlines'>
        <h5 id={headlineID}>{headline} <span><br />_</span></h5>
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
              hubspot={hubspotFormID}
              width="100%" />
            <button onClick={() => router.push(href)}>ZUM KURS</button>
          </div>
          : <Typeform_neu2022 typeformID={typeformFormularID}/>}

      </div>
      <style jsx>{`
          .kurseCard {
            border: 4px solid var(--super-green);
            background: var(--super-lila);
            white-space: pre-line;
            border-radius: 2rem;
            padding: 43px 28px;
          }
          .headlines {
            grid-area: headlines;
          }
          .headlines h5 span{
            opacity: 0;
          }
          .text {
            margin-bottom: 35px;
          }
          .text p:nth-of-type(1) {
            margin-bottom: 2%;
          }
          .kurseCard:hover {
            background: var(--super-blau);
          }
          .kurseCard:hover > button {
            background: var(--super-blau);
          }

          button {
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
            .kurseCard {
              padding-bottom: 50px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default KurseCard;

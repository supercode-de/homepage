import TermineMicrocamps from './TermineMicrocamps';
import MC_Warteliste_Popup from "../MC_Warteliste_Popup"
const BootcampFillUp = (props) => {
  return (
    <article className="bootcamp-fill-up-mainwrapper" id="nextBootcamp">
      <div className="header-info">
        <p>Termine</p>
        <h3>Unsere MicroCamps sind schnell ausgebucht!</h3>
        <p>
          Unsere Kurse sind limitiert auf bis zu acht Personen, damit ihr in der Gruppe eine tolle Lernerfahrung habt und nicht nur einer unter vielen seid. Daher sind die MicroCamps schnell ausgebucht – um mitzumachen, solltest du den Internet Explorer ruhen lassen. ;)
        </p>
      </div>
      {props.data.termine ?
        <div className="card-wrapper">
          {props.data.termine.map((item, index) => (
            <TermineMicrocamps
              data={props}
              key={index}
              kursTitel={item.kursTitel}
              trainerName={item.trainerName}
              trainerTitel={item.trainerTitel}
              trainerImage={item.trainerImage}
              anmeldeLink={item.anmeldeLink}
              datum={item.datum}
              wartelisteLinkFormID={item.wartelisteLinkFormID}

            />
          ))}
        </div> :
        <div className="termin-error">
          <h4>Schade! Sieht so aus, als gäbe es für dieses MicroCamp noch keine Termine 🥲</h4>
          <p>Meld dich doch bei unserem Newsletter an, dann kriegst du als Erste*r mit, wenn es los geht!</p>
          <MC_Warteliste_Popup wartelisteLinkFormID={props.data.wartelisteLinkFormID} theme={props.data.theme}/>
        </div>
      }


      <style jsx>{`
        .bootcamp-fill-up-mainwrapper {
          width: min(95%, 1920px);
          padding: 10% 5%;
          margin-inline: auto;
        }

        .header-info {
          margin-bottom: 4.37rem 9.37rem;
        }

        .header-info h3 {
          color: var(--clr-super-lila);
          max-width: 38%;
          margin-bottom: 15px;
        }

        .header-info p {
          max-width: 60%;
        }

        .card-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 25px;
          margin-top: 50px;
          justify-content: center;
        }
        .termin-error {
          background: var(--super-lila);
          border-radius: 50px;
          padding: 3.125rem;
          width: 50%;
          margin: 50px auto 0 auto;
          color: var(--super-white);
        }
        .termin-error h4 {
          margin-bottom: 20px;
        }
        .termin-error .button {
          width: 100%;
        }

        @media (max-width: 900px) {
          .card-wrapper {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .header-info p,
          .header-info h3 {
            max-width: 100%;
          }
        }
      `}</style>
    </article>
  );
};

export default BootcampFillUp;

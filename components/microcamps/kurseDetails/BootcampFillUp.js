import Link from 'next/link';
import TermineMicrocamps from './TermineMicrocamps';
const BootcampFillUp = (props) => {
  console.log("bootcamp",props.data.termine);
  return (
    <article className="bootcamp-fill-up-mainwrapper" id="nextBootcamp">
      <div className="header-info">
        <p>Termine</p>
        <h3>Unsere MicroCamps sind schnell ausgebucht!</h3>
        <p>
          Unsere Kurse sind limitiert auf bis zu acht Personen, damit ihr in der Gruppe eine tolle Lernerfahrung habt und nicht nur einer unter vielen seid. Daher sind die MicroCamps schnell ausgebucht – um mitzumachen solltest du den Internet Explorer ruhen lassen. ;)
        </p>
      </div>

      <div className="card-wrapper">
        {props.data.termine.map((item, index) => (
          <TermineMicrocamps 
            key={index}
            kursTitel={item.kursTitel}
            trainerName={item.trainerName}
            trainerTitel={item.trainerTitel}
            trainerImage={item.trainerImage}
            anmeldeLink={item.anmeldeLink}
            datum={item.datum}
            tage={item.tage}
            uhrzeit={item.uhrzeit}
          />
          ))}

      </div>

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
          grid-template-columns: repeat(auto-fill, 38rem);
          grid-gap: 25px;
          margin-top: 50px;
          justify-content: center;
        }

      `}</style>
    </article>
  );
};

export default BootcampFillUp;

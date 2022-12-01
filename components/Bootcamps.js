import KurseCard from './KurseCard';
const hrefs = ['/kurse/fullstack', '/kurse/frontend', '/kurse/uxui'];
const Bootcamps = (props) => {

  return (
    <section className='bootcamps'>
      <article className='bootcampInfos'>
        <div className='headlines'>
          <h2>Unsere</h2>
          <h2>Bootcamps</h2>
        </div>
        <div className='copy'>
          <p>In einem halben Jahr zum Web Developer - geht das überhaupt? Und ob! Durch unsere zertifizierte Intensiv-Weiterbildung wirst du in 5-7 Monaten zum Web Developer Front-end oder Full-Stack und steigerst deine Jobchancen im IT-Bereich. Egal, ob dein Studium nicht mehr zu dir passt, es in deinem Beruf keine Zukunft gibt oder du einfach etwas ganz Neues lernen willst - Wir unterstützen dich!</p>
          <p>Von der Beratung bis zum erfolgreichen Kursabschluss stehst du mit deiner Motivation, deiner Geschichte und deinen Fortschritten bei uns im Mittelpunkt. Mit zwei Trainer:innen pro Kurs, einem durchdachten Lehrplan, modernster Technik und guten Job-Kontakten machen wir dich fit für deine Zukunft als Web Developer.</p>
          <p>No Money? No Problem! Unsere Kurse können durch die Chancen eG oder einen Bildungsgutschein zu 100% finanziert werden.</p>
        </div>
      </article>

      <section className='cards'>
        {props.kurseData.map((item, index) => (
          <KurseCard key={index} data={item} href={hrefs[index]} />
        ))}
      </section>

      <style jsx>{`
          .bootcamps {
            color: var(--super-white);
            background: var(--super-lila);
          }

          .bootcampInfos > * {
            width: 100%;
          }
          .bootcampInfos {
            padding: 5rem 6% 0rem;
            display: flex;
            justify-content: space-between;
          }
          .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 5rem 0;
            gap: 50px;
            width: 90%;
            margin: 0 auto;
          }
          .copy p:not(.copy p:nth-of-type(3)) {
            margin-bottom: 2rem;
          }
          .copy p:nth-of-type(3) {
            font-family: 'Neue_Machina_Ultrabold';
          }

          @media (max-width: 1024px) {
            .cards {
              grid-template-columns: repeat(2, 1fr);
              row-gap: 5rem;
            }
            .bootcampInfos {
              flex-direction: column;
            }
            .copy {
              width: 80%;
              align-self: center;
            }
            .headlines{
              margin-bottom: 20px;
            }
          }
          @media (max-width: 768px) {
            .cards {
              width: 90%;
              margin: 5rem auto;
            }
            .copy {
              width: 100%;
              align-self: none;
            }
          }
          @media (max-width: 580px) {
            .cards {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 540px) {
            .cards {
              margin: 0 auto;
              width: 90%;
            }
          }

        `}
      </style>
    </section>
  );
};

export default Bootcamps;

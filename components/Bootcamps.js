import kurseData from '../components/data/kursedata.json';
import KurseCard from './KurseCard';
const hrefs = ['/kurse/fullstack', '/kurse/frontend', '/kurse/uxui'];
const Bootcamps = (props) => {

  return (
    <section className='bootcamps'>
      <article className='bootcampInfos'>
        <div className='headlines'>
          <h2>{kurseData[0].headlines.first}</h2>
          <h2>{kurseData[0].headlines.second}</h2>
          <h2>{kurseData[0].headlines.third}</h2>
        </div>
        <div className='copy'>
          <p>{kurseData[0].texte.first}</p>
          <p>{kurseData[0].texte.second}</p>
          <p>{kurseData[0].texte.third}</p>
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
          h2 {
            margin: 0;
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

          @media (max-width: 1440px) {
            h2 {
              font-size: 4rem;
            }
            .bootcampInfos div p {
              font-size: 20px;
            }
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
          }
          @media (max-width: 768px) {
            .cards {
              width: 100%;
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
          @media (max-width: 425px) {
            h2 {
              font-size: 3.2rem;
            }
          }
          @media (max-width: 540px) {
            .cards {
              margin: 0 auto;
              width: 90%;
            }
          }
          @media (max-width: 375px) {
            h2 {
              font-size: 2.8rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Bootcamps;

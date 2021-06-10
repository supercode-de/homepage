const FE_Praxis = () => {
  return (
    <section className='fsPraxis whiteGreenDots'>
      <div className='praxisInfos'>
        <h2 className='letterstroke'>Über 60% Praxis</h2>
        <h2>Fokus auf Javascript</h2>
        <p>
          Mit über 60% Praxisanteil bilden wir dich optimal für die Berufspraxis
          als Webentwickler*in aus. Da fast jede Website kleinere oder größere
          JavaScripte verwendet, liegt neben HTML & CSS ein starker Fokus auf
          dem Erlernen von JavaScript und der Library React. Ihr lernt die
          wichtigsten Sprachen und Technologien, um vollwertige Websiten zu
          erstellen.
        </p>
        <p>
          Neben den Basics in Grafikdesign und Projektmanagement, stärken wir
          eure Präsentationsskills, Teamfähigkeit und die Fähigkeit des
          selbstständigen Lernens. Und das alles neben deinem Job in Teilzeit!
        </p>
      </div>
      <div>
        <div className='praxis-Img'>
          <img
            src={
              window.screen.width == 425 ||
              window.screen.width == 375 ||
              window.screen.width == 320
                ? '/img/fe-inhalte.svg'
                : '/img/fe-inhalte.svg'
            }
            alt='Inhalte des Kurses als Grafik'
          />
        </div>
      </div>

      <style jsx>
        {`
          .fsPraxis {
            padding: 40px 0 40px 5%;
          }
          .fsPraxis p {
            width: 65%;
            font-size: 1.543rem;
            font-weight: 300;
          }
          .praxis-Img {
            width: 98%;
          }
          .praxis-Img img {
            width: 100%;
            pointer-events: none;
            user-select: none;
          }

          h2 {
            font-size: 5.25rem;
            font-family: 'Neue_Machina_Light';
            color: #03000f;
            margin: 0;
            line-height: 4.5rem;
          }
          p {
            color: #121e28;
            width: 55%;
            font-size: 1.563rem;
            font-weight: 300;
          }
          .praxisInfos,
          .plus-skills-infos {
            margin: 5rem;
          }
          .letterstroke {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: #03000f;
            font-weight: 300;
          }
        `}
      </style>
    </section>
  );
};

export default FE_Praxis;

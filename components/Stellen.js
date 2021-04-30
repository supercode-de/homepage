import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 479 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 479, min: 0 },
    items: 1,
  },
};

const WorkIT = (props) => {
  return (
    <div id="stellen" className="lilaGitter">
      {/* <span className="aside">Unsere Stellen</span> */}
      <article className="stelle-boxes-headline">
        <h1>
          Super(Code)
          <br />x Super<span className="super">(You)</span>
        </h1>
      </article>
      <article className="stellen-content">
        <div className="stelle-boxes">
          <div className="stelle-box stelle-box1 hide">
            <h4>Praktikant*in Motion Design</h4>
            <h3>Informationen folgen</h3>
            {/* <div className="aufgaben">
              <h3>Deine Aufgaben</h3>
              <p>Du unterstützt unserer Marketing-Abteilung bei der Erstellung von Werbeclips und Social-Media-Posts.</p>
              <p>Du erstellst eigenständig Motion-Design-Videos mit dem Tool deiner Wahl.</p>
              <p>Du begeisterst uns mit deiner Kreativität und bringst deine Ideen mit ein.</p>
            </div>
            <div className="profil">
              <h3>Dein Profil</h3>
              <p>(Basis-)kenntnisse der gängigen Motion-Design-Tools wie After Effects, illustrator oder Photoshop.</p>
              <p>Gerne Studierende von Studiengängen im kreativen Bereich.</p>
              <p>Motivierte Quereinsteiger*innen sind ebenfalls herzlich Willkommen.</p>
              <p>Ein gutes Auge für audiovisuelle Gestaltung und eine ausgeprägte Kreativität.</p>
              <p>Da du Teil des Teams bist, sind uns Team- und Kommunikationsfähigkeit sehr wichtig.</p>
            </div>
            <div className="cta">
              <p>Wenn du wertvolle Berufserfahrung sammeln und Teil eines agilen Start-Up-Teams sein möchtest, dann bewirb dich jetzt! Wir unterstützen dich mit unserem Netzwerk und natürlich bekommst du eine SuperZeugnis nach deinem erfolgreichen Praktikum.</p>
            </div> */}
          </div>

          <div className="stelle-box stelle-box2 hide">
            <h4>Main-Trainer*in Web-Entwicklung Teilzeit (19 Stunden)</h4>
            <h3>Informationen folgen</h3>
            {/* <div className="aufgaben">
              <h3>Deine Aufgaben</h3>
              <p>Als Main Trainer*in leitest du unsere siebenmonatigen Bootcamps in Teilzeit und wirst jeweils durch eine*n Assistant Trainer*in unterstützt.</p>
              <p>Gemeinsam verwandelt ihr pro Kurs bis zu 17 motivierte Coder*innen zu Super-Coder*innen.</p>
              <p>Unser Curriculum umfasst HTML, CSS, JavaScript, GIT und alle wichtigen Skills, um als Webentwickler*in auf dem Arbeitsmarkt Fuß zu fassen. Dein Job ist es die Inhalte verständlich und mit viel Freude und Geduld zu vermitteln.</p>
              <p>Du wirst durch unseren erfahrenen Head of Trainer gecoacht und angeleitet. Gemeinsam mit ihm wirst du den Lehrplan aktiv mitgestalten und weiterentwickeln.</p>
              <p>Etwas Orga, wie z.B. die Pflege von Anwesenheitslisten und die Durchführung von Evaluationen gehört ebenfalls in deinen Bereich.</p>
            </div>
            <div className="profil">
              <h3>Dein Profil</h3>
              <p>Am allerwichtigsten: Empathie und Freude daran mit Menschen zu arbeiten, deren Bedürfnisse zu verstehen und sie als Trainer*in auf Augenhöhe zu begleiten.</p>
              <p>Gute kommunikative Fähigkeiten und Leidenschaft fürs Coden.</p>
              <p>Bereitschaft mit modernen, alternativen und praxisnahen Bildungskonzepten zu arbeiten.</p>
              <p>2-3 Jahre Erfahrung mit HTML, CSS und JavaScript.</p>
              <p>Kenntnisse in MongoDB, Express und React wären super.</p>
              <p>Abgeschlossenes Studium oder Ausbildung (auch fachfremd / zwingend erforderlich als Trainer*in)</p>
              <p>Idealerweise bringst du bereits erste Erfahrungen als Trainer*in, Coach*in, oder Dozent*in im Bereich IT mit.</p>
            </div>
            <div className="cta">
              <p>Wenn du Coding liebst und Spaß daran hast Menschen zu begeistern, dann bewirb dich jetzt!</p>
            </div> */}
          </div>
          <div className="stelle-box stelle-box3 hide">
            <h4>Praktikant*in Content- & Online-Marketing</h4>
            <h3>Informationen folgen</h3>
            {/* <div className="aufgaben">
              <h3>Deine Aufgaben</h3>
              <p>Du unterstützt unsere Marketing-Abteilung bei der Erstellung von Social-Media-Posts.</p>
              <p>Du erstellst eigenständig Content und Grafiken für unsere Posts.</p>
              <p>Du begeisterst uns mit deiner Kreativität und bringst deine Ideen mit ein.</p>
            </div>
            <div className="profil">
              <h3>Dein Profil</h3>
              <p>Gute Kenntnisse von den Funktionen von Facebook, Twitter, Instagram und Co.</p>
              <p>Gerne Studierende von Studiengängen im Medien-Bereich.</p>
              <p>Motivierte Quereinsteiger*innen sind ebenfalls herzlich Willkommen.</p>
              <p>Erste Erfahrungen mit Zielgruppenanalyse und Identifikation der richtigen Kanäle.</p>
              <p>Da du Teil des Teams bist, ist uns Team- und Kommunikationsfähigkeit sehr wichtig.</p>
            </div>
            <div className="cta">
              <p>Wenn du wertvolle Berufserfahrung sammeln und Teil eines agilen Start-Up-Teams sein möchtest, dann bewirb dich jetzt! Wir unterstützen dich mit unserem Netzwerk und natürlich bekommst du eine SuperZeugnis nach deinem erfolgreichen Praktikum.</p>
            </div> */}
          </div>
        </div>

        <div id="myCarousel">
          <Carousel
            responsive={responsive}
            ssr
            showDots={false}
            slidesToSlide={1}
            infinite
            containerClass="container-with-dots"
            deviceType={""}
            itemClass="carousel-item-padding-20-px"
          >
            <div className="stelle-box-container">
              <div className="stelle-box stelle-box1">
                <h4>Praktikant*in Motion Design</h4>
                <h3>Informationen folgen</h3>
                {/* <div className="aufgaben">
              <h3>Deine Aufgaben</h3>
              <p>Du unterstützt unserer Marketing-Abteilung bei der Erstellung von Werbeclips und Social-Media-Posts.</p>
              <p>Du erstellst eigenständig Motion-Design-Videos mit dem Tool deiner Wahl.</p>
              <p>Du begeisterst uns mit deiner Kreativität und bringst deine Ideen mit ein.</p>
            </div>
            <div className="profil">
              <h3>Dein Profil</h3>
              <p>(Basis-)kenntnisse der gängigen Motion-Design-Tools wie After Effects, illustrator oder Photoshop.</p>
              <p>Gerne Studierende von Studiengängen im kreativen Bereich.</p>
              <p>Motivierte Quereinsteiger*innen sind ebenfalls herzlich Willkommen.</p>
              <p>Ein gutes Auge für audiovisuelle Gestaltung und eine ausgeprägte Kreativität.</p>
              <p>Da du Teil des Teams bist, sind uns Team- und Kommunikationsfähigkeit sehr wichtig.</p>
            </div>
            <div className="cta">
              <p>Wenn du wertvolle Berufserfahrung sammeln und Teil eines agilen Start-Up-Teams sein möchtest, dann bewirb dich jetzt! Wir unterstützen dich mit unserem Netzwerk und natürlich bekommst du eine SuperZeugnis nach deinem erfolgreichen Praktikum.</p>
            </div> */}
              </div>
            </div>
            <div className="stelle-box-container">
              <div className="stelle-box stelle-box2">
                <h4>Main-Trainer*in Web-Entwicklung Teilzeit (19 Stunden)</h4>
                <h3>Informationen folgen</h3>
                {/* <div className="aufgaben">
                  <h3>Deine Aufgaben</h3>
                  <p>Als Main Trainer*in leitest du unsere siebenmonatigen Bootcamps in Teilzeit und wirst jeweils durch eine*n Assistant Trainer*in unterstützt.</p>
                  <p>Gemeinsam verwandelt ihr pro Kurs bis zu 17 motivierte Coder*innen zu Super-Coder*innen.</p>
                  <p>Unser Curriculum umfasst HTML, CSS, JavaScript, GIT und alle wichtigen Skills, um als Webentwickler*in auf dem Arbeitsmarkt Fuß zu fassen. Dein Job ist es die Inhalte verständlich und mit viel Freude und Geduld zu vermitteln.</p>
                  <p>Du wirst durch unseren erfahrenen Head of Trainer gecoacht und angeleitet. Gemeinsam mit ihm wirst du den Lehrplan aktiv mitgestalten und weiterentwickeln.</p>
                  <p>Etwas Orga, wie z.B. die Pflege von Anwesenheitslisten und die Durchführung von Evaluationen gehört ebenfalls in deinen Bereich.</p>
                </div>
                <div className="profil">
                  <h3>Dein Profil</h3>
                  <p>Am allerwichtigsten: Empathie und Freude daran mit Menschen zu arbeiten, deren Bedürfnisse zu verstehen und sie als Trainer*in auf Augenhöhe zu begleiten.</p>
                  <p>Gute kommunikative Fähigkeiten und Leidenschaft fürs Coden.</p>
                  <p>Bereitschaft mit modernen, alternativen und praxisnahen Bildungskonzepten zu arbeiten.</p>
                  <p>2-3 Jahre Erfahrung mit HTML, CSS und JavaScript.</p>
                  <p>Kenntnisse in MongoDB, Express und React wären super.</p>
                  <p>Abgeschlossenes Studium oder Ausbildung (auch fachfremd / zwingend erforderlich als Trainer*in)</p>
                  <p>Idealerweise bringst du bereits erste Erfahrungen als Trainer*in, Coach*in, oder Dozent*in im Bereich IT mit.</p>
                </div>
                <div className="cta">
                  <p>Wenn du Coding liebst und Spaß daran hast Menschen zu begeistern, dann bewirb dich jetzt!</p>
                </div> */}
              </div>
            </div>
            <div className="stelle-box-container">
              <div className="stelle-box stelle-box3">
                <h4>Praktikant*in Content- & Online-Marketing</h4>
                <h3>Informationen folgen</h3>
                {/* <div className="aufgaben">
                  <h3>Deine Aufgaben</h3>
                  <p>Du unterstützt unsere Marketing-Abteilung bei der Erstellung von Social-Media-Posts.</p>
                  <p>Du erstellst eigenständig Content und Grafiken für unsere Posts.</p>
                  <p>Du begeisterst uns mit deiner Kreativität und bringst deine Ideen mit ein.</p>
                </div>
                <div className="profil">
                  <h3>Dein Profil</h3>
                  <p>Gute Kenntnisse von den Funktionen von Facebook, Twitter, Instagram und Co.</p>
                  <p>Gerne Studierende von Studiengängen im Medien-Bereich.</p>
                  <p>Motivierte Quereinsteiger*innen sind ebenfalls herzlich Willkommen.</p>
                  <p>Erste Erfahrungen mit Zielgruppenanalyse und Identifikation der richtigen Kanäle.</p>
                  <p>Da du Teil des Teams bist, ist uns Team- und Kommunikationsfähigkeit sehr wichtig.</p>
                </div>
                <div className="cta">
                  <p>Wenn du wertvolle Berufserfahrung sammeln und Teil eines agilen Start-Up-Teams sein möchtest, dann bewirb dich jetzt! Wir unterstützen dich mit unserem Netzwerk und natürlich bekommst du eine SuperZeugnis nach deinem erfolgreichen Praktikum.</p>
                </div> */}
              </div>
            </div>
          </Carousel>
        </div>
      </article>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        h1, h3, h4, p {
          color: #fff;
        }
        #stellen {
          padding: 7em 0 5em;
          position: relative;
          z-index: 1;
        }
        h1 {
          margin: 0 8.5% 1em;
        }

        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }

        .stellen-content {
          padding: 0 10%;
        }

        .stelle-boxes {
          box-sizing: border-box;
          display: flex;
          align-items: flex-start;
          position: relative;
        }
        .stelle-box-container {
          padding: 0 15%;
        }
        .stelle-box {
          background: var(--super-lila);
          border: 2px solid var(--super-green);
          padding: 1em 4% 1em 2%;
          width: 100%;
          z-index: 0;
        }

        .stelle-box1 {
          margin-top: 100px;
        }
        .stelle-box2 {
          margin-top: 50px;

          margin-left: -2px;
        }
        .stelle-box3 {
          margin-left: -2px;
        }
        .stelle-boxes > .stelle-box {
          transition: transform 0.4s;
        }

        .stelle-boxes > .stelle-box:hover {
          transform: scale(1.1);
          z-index: 1;
        }

        #myCarousel {
          display: none;
          position: relative;
        }

        h4 {
          font-size: 1.6em;
          margin-bottom: 1.5rem;
        }
        .stelle-boxes > .stelle-box:hover h4 {
          color: var(--super-green);
        }
        h5 {
          font-size: 1.2em;
        }
        p {
          font-size: 15px;
          line-height: 20px;
          margin-bottom: 1rem;
        }      

        @media (max-width: 768px) {
          .hide {
            display: none;
          }
          #myCarousel {
            display: block;
          }
          .stelle-box {
            margin: 0;
          }
          .stellen-content {
            padding: 0 5%;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkIT;

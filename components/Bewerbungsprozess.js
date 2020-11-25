const Bewerbungsprozess = (props) => {
  return (
    <div id="bewerbungsprozess">
      <span className="aside"> 4 x SUPER </span>

      <div className="twocolumn">
        <div className="center">
          <h2>
            Unser
            <span>Aufnahmeprozess</span>
          </h2>
          <div className="flex">
            <div>
              <span className="super-green">01</span>
            </div>
            <div>Nimm Kontakt zu uns auf</div>
            <img src="./img/kontakt.jpg" alt="" />
          </div>
          <div className="flex">
            <div>
              <span className="super-green">02</span>
            </div>
            <div>Teste dich im kostenlosen Workshop</div>
            <img src="./img/workshop.jpg" alt="" />
          </div>

          <div className="flex">
            <div>
              <span className="super-green">03</span>
            </div>
            <div>Kläre mit uns die Finanzierung</div>
            <img src="./img/finanzierung.jpg" alt="" />
          </div>
          <div className="flex">
            <div>
              <span className="super-green">04</span>
            </div>
            <div>Starte deinen Kurs Web Development</div>
            <img src="./img/losGehts.jpg" alt="" />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .flex {
            display: flex;
            font-family: "Neue_Machina_Regular_400";
            font-size: 3.5em;
            color: #fff;
            line-height: 1.2em;
            position: relative;
            z-index: 99;
          }
          .center h2 {
            font-family: "Neue_Machina_Regular_400";
            font-size: 4.4em;
            line-height: 1.2em;
            color: #fff;
            text-transform: uppercase;
          }
          .center h2 span {
            display: block;
            color: transparent;
            font-weight: 400;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #ffffff;
          }
          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            color: #fff;
            font-weight: 300;
            left: 3%;
            top: 60%;
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #ffffff;
          }
          #bewerbungsprozess {
            padding: 5em 8%;

            position: relative;
            background-color: #5d3ede;
            background-image: linear-gradient(
                to right,
                rgba(255, 255, 255, 0.25) 0,
                rgba(255, 255, 255, 0.25) 1px,
                transparent 1px,
                transparent 100%
              ),
              linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.25) 0,
                rgba(255, 255, 255, 0.25) 1px,
                transparent 1px,
                transparent 100%
              );
            background-position: 0 0, 0 0;
            background-size: ${props.width}px ${props.width}px;
          }
          .twocolumn {
            display: grid;
            grid-template-columns: 100%;
            padding-bottom: 40px;
          }

          .flex img {
            max-width: 600px;
            right: 50px;
            transform: translateY(-40%);
            position: absolute;
            opacity: 0;
          }
          .flex:hover img {
            opacity: 1;
            z-index: -1;
          }
          .center {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-weight: 400;
          }
          .super-stroke {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #fff;
            font-weight: 300;
          }

          .super-green {
            color: transparent;
            letter-spacing: 2px;

            -webkit-text-stroke-width: 0.7px;
            -webkit-text-stroke-color: #30e1b9;
            font-weight: 200;
            font-size: 0.7em;
            padding-right: 20px;
          }
          @media (max-width: 1040px) {
            .flex {
              font-size: 2.5em;
              line-height: 1.2em;
            }
            .center h2 {
              font-size: 3.2em;
            }
          }
          @media (max-width: 768px) {
            .center h2 {
              font-size: 3.5em;
            }
            p {
              font-size: 2em;
              margin-bottom: 50px;
            }
            .super-stroke {
              color: transparent;
              letter-spacing: 2px;
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: #fff;
              font-weight: 300;
            }
          }

          @media (max-width: 568px) {
            img {
              display: none;
            }
            .twocolumn {
              grid-template-columns: 100%;
            }
          }
          @media (max-width: 468px) {
            .center h2 {
              font-size: 3em;
            }
          }
          @media (max-width: 370px) {
            .center h2 {
              font-size: 2.5em;
              overflow-wrap: break-word;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Bewerbungsprozess;

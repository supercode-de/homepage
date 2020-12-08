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

const UpToDate = (props) => {
  return (
    <div id="up-to-date">
      <h1>UP TO DATE</h1>
      <div className="grid">
        <article className="kurs-boxes-headline">
          <h2>
            Werde jetzt Teil des{" "}
            <span className="super">Super(Code)-Kosmos</span> und sei immer auf
            dem <span className="circle">neusten&nbsp;Stand!</span> Mit unserem
            Newsletter bekommst du regelmäßig die{" "}
            <span className="super">spannendsten News</span> sowie{" "}
            <span className="super">Eventankündigungen</span> direkt in{" "}
            <span className="bling">dein&nbsp;Postfach!</span>
          </h2>
        </article>

        <article>Email</article>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }

        #up-to-date {
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
          background-size: calc(100vw / 12) calc(100vw / 12);

          color: #fff;
          padding: 7em 8.5% 5em;
          position: relative;
          z-index: 1;
        }

        .grid {
          width: 100%;
          diaplay: grid;
          grid-template-columns: 1fr 1fr;
        }

        h2 {
          font-family: "Neue_Machina_Regular_400";
          font-size: 3.5em;
          color: #fff;
          line-height: 1.2em;
          font-weight: 300;
        }

        h2 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }

        h2 span.bling,
        h2 span.circle {
          position: relative;
        }

        h2 span.circle::after {
          position: absolute;
          background: url("/img/Vector64.svg") center/contain no-repeat;
          transform: rotateX(67deg);

          height: 300%;
          width: 105%;
          right: 0;
          bottom: -100%;
          content: "";
          display: block;
        }

        @media (max-width: 768px) {
        }
      `}</style>
    </div>
  );
};

export default UpToDate;

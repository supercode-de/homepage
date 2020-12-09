import HubspotForm from "react-hubspot-form";

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
      <div className="top-label">
        <h1>UP</h1>
        <h1>TO</h1>
        <h1>DATE</h1>
      </div>
      <div className="grid">
        <article className="">
          <h2>
            Werde jetzt Teil des{" "}
            <span className="super">Super(Code)-Kosmos</span> und sei immer auf
            dem <span className="circle">neusten&nbsp;Stand!</span> Mit unserem
            Newsletter bekommst du regelmäßig die{" "}
            <span className="super">spannendsten News</span> sowie{" "}
            <span className="super">Eventankündigungen</span> direkt&nbsp;in
            <br /> <span className="bling">dein&nbsp;Postfach!</span>
          </h2>
        </article>

        <div className="email-newsletter">
          <HubspotForm
            portalId="5807040"
            formId="ef0bca6d-bc5a-4624-89cb-5fd225d47727"
            onSubmit={() => console.log("Submit!")}
            onReady={(form) => console.log("Form ready!")}
            loading={<div>Loading...</div>}
            className="email-newsletter-form"
          />
        </div>
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
          padding: 4em 8.5% 5em;
          position: relative;
          z-index: 1;
        }

        .grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        article {
          width: 100%;
        }
        .top-label {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        h1 {
          font-family: "Neue_Machina_Regular_400";
          color: #3dd7ac;
          font-size: 3.5em;
          font-weight: 300;
          margin-bottom: 50px;
        }

        h2 {
          font-family: "Neue_Machina_Regular_400";
          font-size: 2.2em;
          color: #fff;
          line-height: 1.2em;
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

        span.bling {
          width: 100%;
        }

        span.bling::before {
          position: absolute;
          background: url("/img/bling.png") center/contain no-repeat;
          height: 100%;
          width: 20px;
          left: -20px;
          bottom: 0;
          content: "";
          display: block;
        }
        span.bling::after {
          position: absolute;
          background: url("/img/bling2.png") center/contain no-repeat;
          height: 100%;
          width: 20px;
          right: -20px;
          bottom: 0;
          content: "";
          display: block;
        }

        .email-newsletter {
          width: 100%;
          display: flex;

          align-items: flex-end;
        }
        .email-newsletter * {
          width: 100%;
        }
        @media (max-width: 1040px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
        }
      `}</style>
    </div>
  );
};

export default UpToDate;

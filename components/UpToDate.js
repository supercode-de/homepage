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
    <div id="up-to-date" className="lilaGitter">
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
        .top-label {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        h1 {
          color: var(--super-green);
          margin-bottom: 50px;
        }

        h2 {
          font-size: 2.2em;
          color: #fff;
        }

        h2 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
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

import Button from "./small/Button";
import Beratung from "./Beratung";
import Link from "next/link";

const MeldeDich = () => {
  return (
    <div id="melde-dich">
      <h1>
        <span className="melde">Melde</span> dich noch heute, oder mach mit bei
        unserem kostenlosen <span className="workshop">Workshop.</span>
      </h1>

      <div className="buttons">
        <Beratung />
        <Link href="/workshops">
          <a href="">WORKSHOP</a>
        </Link>
      </div>
      <style jsx>{`
        #melde-dich {
          background: #070021;
          color: #fff;
          padding: 3em 4em 2em;
          font-family: "Neue_Machina_Regular_400";
        }
        h1 {
          font-size: 3.5em;
          font-weight: 400;
          letter-spacing: 2px;
          line-height: 1.2em;
          max-width: 850px;
        }

        .melde,
        .workshop {
          position: relative;
        }

        span.melde::before {
          position: absolute;
          background: url("/img/bling.png") center/contain no-repeat;
          height: 2rem;
          width: 20px;
          bottom: 0.2em;
          left: -20px;
          content: "";
          display: block;
        }
        span.melde::after {
          position: absolute;
          background: url("/img/bling2.png") center/contain no-repeat;
          height: 2rem;
          width: 20px;
          bottom: 0.2em;
          right: -20px;
          content: "";
          display: block;
        }

        span.workshop {
          color: transparent;
          letter-spacing: 3px;
          font-weight: 400;
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: #fff;
        }

        span.workshop::after {
          position: absolute;
          background: url("/img/Vector64.svg") center/contain no-repeat;
          transform: rotateX(50deg);

          height: 300%;
          width: 105%;
          right: 0;
          bottom: -100%;
          content: "";
          display: block;
        }

        .buttons {
          display: flex;
          width: 100%;
          justify-content: flex-end;
        }

        a {
          margin: 2em 1em 0;
          font-family: "Fira Sans", sans-serif;
          font-style: normal;

          font-size: 0.7em;
          font-weight: 600;
          line-height: 1.5em;
          text-align: center;
          // letter-spacing: 2px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          padding: 10px 50px;

          background: transparent;
          border: 1px solid #3dd7ac;
          text-decoration: none;
          color: #fff;
          justify-self: center;
          display: inline-block;
          min-width: 23em;
        }
        a:hover {
          color: #5d3ede;
          background: #3dd7ac;
        }
        @media (max-width: 863px) {
        }

        @media (max-width: 468px) {
          a {
            font-weight: 400;
            font-size: 1.2em;
            min-width: 15em;
          }
          .buttons {
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 370px) {
        }
      `}</style>
    </div>
  );
};

export default MeldeDich;

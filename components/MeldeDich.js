import Button from "./small/Button";
import Beratung from "./Beratung";
import Link from "next/link";

const MeldeDich = () => {
  return (
    <div id="melde-dich">
      <h1>
        <span className="melde">Melde</span> dich noch heute, <br />
        oder mach mit bei unserem <br />
        kostenlosen <span className="workshop">Workshop</span>.
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
          padding: 80px 6% 40px;
          font-family: "Neue_Machina_Regular_400";
        }
        h1 {
          font-size: 3.5em;
          font-weight: 400;
          letter-spacing: 2px;
          line-height: 4rem;
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
          -webkit-text-stroke-width: 1px;
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
          text-align: center;
          display: flex;
          justify-content: flex-end;
        }
        a {
          display: inline-block;
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          padding: 5px 35px;
          border: 1px solid #3dd7ac;
          font-size: 0.7em;
          font-weight: 600;
          line-height: 1.5em;
          margin: 10px;
          letter-spacing: 2px;
          transition: top 0.5s linear, box-shadow 0.5s linear, left 0.5s linear;
          box-shadow: 0 0 0 0 transparent;
          position: relative;
          top: 0;
          left: 0;
          text-align: center;
          min-width: 100px;
        }
        a:hover {
          // margin: 10px 5px 15px 10px;
          // margin: 10px 10px 15px 15px;
          box-shadow: -5px 5px 0 0 #fff;
          top: -5px;
          left: 5px;
        }
        @media (max-width: 468px) {
          a {
            padding-top: 5px;
            font-weight: 400;
            font-size: 1.2em;
          }
        }
      `}</style>
    </div>
  );
};

export default MeldeDich;

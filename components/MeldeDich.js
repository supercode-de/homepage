import Beratung from "./Beratung";
import Link from "next/link";

const MeldeDich = () => {
  return (
    <div id="melde-dich">
      <h1>
        <span className="melde">Melde</span> dich noch heute oder mach mit bei
        unserem kostenlosen <span className="workshop">Workshop.</span>
      </h1>

      <div className="buttons">
        <Beratung buttonText="Beratung" buttonTextColor="#fff" />

        <Link href="/workshops">
          <a href="">WORKSHOP</a>
        </Link>
      </div>
      <style jsx>{`
        #melde-dich {
          background: var(--super-blau);
          color: var(--super-white);
          padding: 9em 4em 6em;
        }
        h1 {
          width: 80%;
          margin-bottom: 3rem;
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
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: var(--super-white);
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
          width: 100%;
          display: flex;
          justify-content: flex-end;
          gap: 2rem;
        }

        a {
          font-size: 0.875em;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 15px 0px;
          text-align: center;
          background: transparent;
          border: 1px solid var(--super-green);
          text-decoration: none;
          color: var(--super-white);
          justify-self: center;
          display: inline-block;
          min-width: 23em;
          border-radius: 5rem;
        }
        a:hover {
          color: var(--super-lila);
          background: var(--super-green);
        }
        @media (max-width: 768px) {
          h1 {
            width: 100%;
          }
        }
        @media (max-width: 468px) {
          a {
            font-weight: 400;
            font-size: 1.2em;
          }
          .buttons {
            flex-direction: column;
            align-items: center;
          }
        }

      `}</style>
    </div>
  );
};

export default MeldeDich;

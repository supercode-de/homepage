import Button from "./small/Button";
import Beratung from "./Beratung";
import Link from "next/link";

const FooterCallToAction = (props) => {
  return (
    <div id="call-to-action">
      <h1>
        WORAUF WARTEST DU NOCH?! DIE NÄCHSTEN KURSE STARTEN BALD.
        {/* {props.bald ? "bald" : "im " + props.month}! */}
      </h1>
      <div className="buttons">
        <Link href="/kurse">
          <a href="">KURSE</a>
        </Link>
        <Beratung buttonText="Beratung" buttonTextColor="#fff" />
      </div>
      <style jsx>{`
        #call-to-action {
          background: var(--super-lila);
          color: var(--super-green);
          margin: 0 auto;
          padding: 4rem 6% 2rem;

          font-family: "Neue_Machina_Regular_400";
        }
        h1 {
          text-transform: uppercase;
          font-size: 3.5em;
          line-height: 1.2em;
          letter-spacing: 3px;
          margin: 0;
          display: block;
          color: transparent;
          font-weight: 300;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #ffffff;
        }
        .buttons {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        a {
          align-items: center;
          margin: 2em 1em 0;
          font-family: "Fira Sans", sans-serif;

          min-width: 23em;
          font-size: 0.875em;          
          text-align: center;          
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 15px 0px;          
          background: transparent;
          border: 1px solid var(--super-green);
          text-decoration: none;
          color: #fff;
          display: inline-block;
        }
        a:hover {
          color: var(--super-lila);
          background: var(--super-green);
        }

        @media (max-width: 1024px) {
          h1 {
            font-size: 3em;
          }
        }
        @media (max-width: 468px) {
          a {
            font-weight: 400;
            font-size: 1.2em;
            width: 16em;
            min-width: 0;
          }
          .buttons {
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 768px) {
          #call-to-action {
            display: block;
          }
        }
        @media (max-width: 370px) {
        }
      `}</style>
    </div>
  );
};

export default FooterCallToAction;

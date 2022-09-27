import Beratung from "./Beratung";
import Link from "next/link";

const Index_FooterCTA = () => { 
  return (
    <div id="call-to-action">
      <h1>Worauf wartest du noch?</h1>
      <h1>Die nächsten Kurse starten bald.</h1>
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
          padding: 4rem 6%;
        }
        h1 {
          margin: 0;
          color: transparent;
          font-weight: 300;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--super-white);
        }
        .buttons {
          display: flex;
          justify-content: flex-end;
          gap: 2rem;
          width: 100%;
          margin-top: 62px;
        }

        a {
          align-items: center;
          min-width: 23em;
          font-size: 15px;          
          text-align: center;          
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 15px 0px;          
          background: transparent;
          border: 1px solid var(--super-green);
          text-decoration: none;
          color: var(--super-white);
          display: inline-block;
          border-radius: 5rem;
        }
        a:hover {
          color: var(--super-lila);
          background: var(--super-green);
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
        @media (max-width: 768px) {
          #call-to-action {
            display: block;
          }
        }

      `}</style>
    </div>
  );
};

export default Index_FooterCTA;

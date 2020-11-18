import Button from "./small/Button";
import Beratung from "./Beratung";
import Link from "next/link";

const FooterCallToAction = (props) => {
  return (
    <div id="call-to-action">
      <h1>
        Worauf wartest du noch?! <br />
        <span>Die nächsten Kurse starten im {props.month}!</span>
      </h1>
      <div className="buttons">
        <Link href="/">
          <a href="">MEHR</a>
        </Link>
        <Link href="/">
          <a href="">KONTAKT</a>
        </Link>
      </div>
      <style jsx>{`
        #call-to-action {
          background: #5d3ede;
          color: #3dd7ac;
          margin: 0 auto;
          padding: 8vh;
          display: flex;
          justify-content: space-around;
          font-family: "Neue_Machina_Regular_400";
        }
        h1 {
          text-transform: uppercase;
          font-size: 3em;
          letter-spacing: 2px;
          margin: 0;
          display: block;
          color: transparent;
          font-weight: 300;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #ffffff;
        }
        // span {
        //   display: block;
        //   color: transparent;
        //   letter-spacing: 3px;
        //   -webkit-text-stroke-width: 1.5px;
        //   -webkit-text-stroke-color: #3dd7ac;
        // }

        .buttons {
          text-align: center;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
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
        @media (max-width: 768px) {
          #call-to-action {
            display: block;
          }
          .buttons {
            margin-top: 1em;
            height: 5em;
          }
        }
      `}</style>
    </div>
  );
};

export default FooterCallToAction;

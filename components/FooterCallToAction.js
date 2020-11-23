import Button from "./small/Button";
import Beratung from "./Beratung";
import Link from "next/link";

const FooterCallToAction = (props) => {
  return (
    <div id="call-to-action">
      <h1>
        Worauf wartest du noch?! <br />
        <span>Die nächsten Kurse starten im&nbsp;{props.month}!</span>
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
          padding: 5rem 6% 2rem;

          font-family: "Neue_Machina_Regular_400";
        }
        h1 {
          text-transform: uppercase;
          font-size: 3.5em;
          line-height: 3.8rem;
          letter-spacing: 3px;
          margin: 0;
          display: block;
          color: transparent;
          font-weight: 300;
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
        }

        a {
          margin: 2em 1em;
          font-family: "Fira Sans", sans-serif;
          font-style: normal;

          font-size: 0.7em;
          font-weight: 600;
          line-height: 1.5em;
          text-align: center;
          // letter-spacing: 2px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          padding: 10px 3rem;

          background: transparent;
          border: 1px solid #3dd7ac;
          text-decoration: none;
          color: #fff;
          display: inline-block;
          // min-width: 100px;
          // display: flex;
          // justify-content: center;
          // align-items: center;
        }
        a:hover {
          color: #5d3ede;
          background: #3dd7ac;
        }

        // a {
        //   display: inline-block;
        //   color: #fff;
        //   text-decoration: none;
        //   text-transform: uppercase;
        //   padding: 5px 2rem;
        //   border: 1px solid #3dd7ac;
        //   font-size: 0.7em;
        //   font-weight: 600;
        //   line-height: 1.5em;
        //   margin: 0.5rem;
        //   letter-spacing: 2px;
        //   transition: top 0.5s linear, box-shadow 0.5s linear, left 0.5s linear;
        //   box-shadow: 0 0 0 0 transparent;
        //   position: relative;
        //   top: 0;
        //   left: 0;
        //   text-align: center;
        //   min-width: 100px;
        // }
        // a:hover {
        //   // margin: 10px 5px 15px 10px;
        //   // margin: 10px 10px 15px 15px;
        //   box-shadow: -5px 5px 0 0 #fff;
        //   top: -5px;
        //   left: 5px;
        // }
        @media (max-width: 468px) {
          a {
            font-weight: 400;
            font-size: 1.2em;
          }
          .buttons {
            display: block;
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

import Link from "next/link";
import Telefon from "./small/Telefon";

const Header404 = (props) => {
  const pixelSize = 2; // Width of Lines in Background
  return (
    <div id="header">
      <div className="super-code">super(code)</div>
      <span className="aside"> 📞 +49 211 7817 233-0 </span>

      <div className="content">
        <h1>
          <span className="super">404</span>
          <span className="lines">BABY</span>
        </h1>

        <p>
          hier geht's wieder{" "}
          <Link href="/">
            <a>zurück.</a>
          </Link>
        </p>
        {/* <div className="img">
          <img src="/img/_DSC2571_LowRes 3_neu.png" alt="" />
        </div> */}
      </div>

      <style jsx>{`
        #header {
          font-family: "Neue_Machina_Regular_400";
          position: relative;
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
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          color: #fff;
          font-weight: 300;
          left: 3%;
          top: 60%;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #ffffff;
        }
        .super-code {
          position: absolute;
          top: 30px;
          left: 7rem;
          color: #fff;
          font-size: 1.3rem;
          font-family: "Fira Sans", sans-serif;
          font-weight: bold;
          z-index: 2;
        }

        .content {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 39px - 98.18px);

          // height: calc(100vw / 12 * 8);
          // padding: calc(100vw / 12 * 1.5) calc(100vw / 12);
          // overflow-y: visible;

          text-align: center;
        }

        h1 {
          margin: 0;
          font-size: 8em;
          line-height: 1.2em;
          letter-spacing: 2px;
          color: #3dd7ac;
          font-weight: 400;

          margin-bottom: 1em;
        }
        h1 span.super {
          display: block;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #3dd7ac;
        }

        h1 span.lines {
          position: relative;
        }

        h1 span.lines::before,
        h1 span.lines::after {
          position: absolute;
          background: url("/img/vector41.svg") center/cover no-repeat;
          height: 5px;
          right: 0;
          content: "";
          display: block;
        }
        h1 span.lines::after {
          right: 10px;
          bottom: 0;
          width: 85%;
        }
        h1 span.lines::before {
          right: 0;
          bottom: -10px;
          width: 55%;
          transform: rotate(-1deg);
        }

        p {
          margin: 0;
          font-size: 3em;
          line-height: 1.2em;
          color: #fff;
          font-weight: 400;
        }
        p a {
          text-decoration: none;
          display: inline-block;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
        }
        p a:hover {
          color: #3dd7ac;
          -webkit-text-stroke-width: 0;
        }

        .img {
          position: relative;
          width: calc(100vw / 12 * 6.5);
          overflow-y: visible;
        }

        .img img {
          position: absolute;
          width: 100%;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .content {
            min-height: calc(100vh - 39px - 61.2px);
          }
        }

        @media (max-width: 568px) {
          .content {
            min-height: calc(100vh - 39px - 135.4px);
          }
        }

        @media (max-width: 468px) {
          h1 {
            font-size: 5em;
          }
          .content {
            padding: calc(100vw / 12 * 3.5) calc(100vw / 12 * 2);
            height: calc(100vw / 12 * 10);
          }
        }
      `}</style>
    </div>
  );
};

export default Header404;

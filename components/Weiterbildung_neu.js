const HeaderCallToAction_neu = () => {
  return (
    <div id="header-call">
      <h2>
        IT Weiterbildung&nbsp;- <br />
        <span className="super">
          zertifiziert, intensiv & <span className="after-span">praxisnah</span>
          <nobr />. Wähle das Format, das dir am{" "}
          <span className="circle">besten</span> passt.
        </span>
      </h2>

      <style jsx>{`
        #header-call {
          background: rgb(7, 0, 33);
          color: #fff;
          font-family: "Neue_Machina_Regular_400";
          padding: 3vh 2% 3vh 6%;
        }
        h2 {
          font-size: 3.5em;
          line-height: 1.2em;
          max-width: 1100px;
        }
        h2 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }

        .circle,
        .after-span {
          position: relative;
        }

        h2 span.after-span::after {
          position: absolute;
          background: url("/img/vector41.svg") center/cover no-repeat;
          height: 2px;
          width: 105%;
          right: 0;
          bottom: 4px;
          content: "";
          display: block;
        }

        h2 span.after-span::before {
          position: absolute;
          background: url("/img/vector41.svg") center/cover no-repeat;
          height: 2px;
          width: 80%;
          right: 0;
          bottom: 0px;
          content: "";
          display: block;
          transform: rotate(0.5deg);
        }

        h2 span.circle::after {
          position: absolute;
          background: url("/img/Vector64.svg") center/contain no-repeat;
          height: 300%;
          width: 105%;
          right: 0;
          bottom: -100%;
          content: "";
          display: block;
        }

        h2 span.bling::before {
          position: absolute;
          background: url("/img/bling.png") center/cover no-repeat;
          height: 100%;
          width: 18%;
          bottom: 10px;
          left: -40px;
          content: "";
          display: block;
        }
        h2 span.bling2::after {
          position: absolute;
          background: url("/img/bling2.png") center/cover no-repeat;
          height: 100%;
          width: 6%;
          right: -47px;
          bottom: 3px;
          content: "";
          display: block;
        }
        #header-call div {
          grid-column: 3 / 4;
        }
        @media (max-width: 1040px) {
          // h2 {
          //   font-size: 3em;
          // }
          // h2 span.circle::after {
          //   height: 27%;
          //   width: 30%;
          //   left: -5%;
          //   bottom: -1%;
          // }
        }
        @media (max-width: 768px) {
          //   h2 span.circle::after {
          //   height: 21%;
          //   width: 23%;
          //   left: -2%;
          //   bottom: 2%;
          // }
        }
        @media (max-width: 468px) {
          // h2 {
          //   font-size: 2.1em;
          //   line-height: 37px;
          // }
          // h2 span.circle::after {
          // height: 26%;
          // width: 32%;
          // left: -6%;
          // bottom: 2%;
          // }
          // h2 span.after-span::after {
          // bottom: 1px;
          // }
          // h2 span.after-span::before {
          //   bottom: -3px;
          // }
        }
        @media (max-width: 320px) {
          h2 {
            font-size: 3em;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderCallToAction_neu;

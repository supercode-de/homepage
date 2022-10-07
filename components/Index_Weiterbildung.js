const Index_Weiterbildung = () => {
  return (
    <div id="header-call" className="rotateEffect">
      <h2>
        IT Weiterbildung&nbsp;- <br />
        <span className="super">
          zertifiziert, intensiv & <span className="after-span">praxisnah</span>. <br/> Wähle das Format, das dir am <br/>{" "}
          <span className="circle">besten</span> passt.
        </span>
      </h2>

      <style jsx>{`
        #header-call {
          background: var(--super-blau);
          color: var(--super-white);
          padding: 6rem 7% 6rem;
        }

        h2 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--super-white);
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

      `}</style>
    </div>
  );
};

export default Index_Weiterbildung;

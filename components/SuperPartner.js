import Button from "./small/Button";

const SuperPartner = (props) => {
  return (
    <div id="container">
      <h1>#SuperPartner</h1>
      <div className="partner-container">
        <a href="#">
          <img src="/img/blanko.png" alt="" />
        </a>
        <a href="">
          <img src="/img/cammio.png" alt="" />
        </a>
        <a href="">
          <img src="/img/digihub.png" alt="" />
        </a>
        <a href="">
          <img src="/img/moWeb.png" alt="" />
        </a>
        <a href="">
          <img src="/img/startupDorf.png" alt="" />
        </a>
        <a href="">
          <img src="/img/super7000.png" alt="" />
        </a>
      </div>
      <style jsx>{`
        #container {
          color: #5d3ede;
          margin: 0 auto;
          padding: 8vh;
          display: flex;
          flex-direction: column;
        }
        h1 {
          font-size: 2rem;
          letter-spacing: 2px;
          margin: 0 0 6vh;
        }
        img {
          width: 100%;
        }
        .partner-container {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 5%;
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

export default SuperPartner;

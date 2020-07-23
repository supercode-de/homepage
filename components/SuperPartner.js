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
      <section id="qualitat">
        <h1>#Qualität vor Gewinn</h1>
        <div class="border">
          <p>“SuperCode bietet ein arbeitsmarktlich aussichtsreiches und praxisnahes Bildungsangebot im IT-Bereich mit methodisch modernen und hohem Einsatz von Lehrpersonal. Hervorzuheben ist die hervorragende Branchenvernetzung sowie die innovative Praxiskompetenz der Geschäftsführung und des Teams.”</p>
          <h3>– Certqua Bonn</h3>
        </div>
      </section>
      <style jsx>{`
        #container {
          color: #5d3ede;
          margin: 0 auto;
          padding: 8vh 10%;
          display: flex;
          flex-direction: column;
          background-image:
                linear-gradient(
                to right,
                rgba(255, 0, 0, 0.25) 0,
                rgba(255, 0, 0, 0.25) 1px,
                transparent 1px,
                transparent 100%
                ),
                linear-gradient(
                to bottom,
                rgba(255, 0, 0, 0.25) 0,
                rgba(255, 0, 0, 0.25) 1px,
                transparent 1px,
                transparent 100%
                )
            ;
            background-position: 0 0, 0 0;
            background-size: ${props.width}px ${props.width}px;
          
        }
        h1 {
          font-size: 2rem;
          letter-spacing: 2px;
          margin: 0 0 8vh;
        }
        img {
          width: 100%;
        }
        .partner-container {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 5%;
        }
        
      #qualitat {
        margin-top:100px
      }
      #qualitat div{
          border:4px solid #03000f;
          padding:20px;
          text-align:center
      }
      p {
          font-weight: 400;
          color:#03000f;
          font-size:20px
      }
      h3{
          color:#3DD7AC
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

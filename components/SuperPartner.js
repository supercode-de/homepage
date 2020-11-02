import Link from "next/link";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SuperPartner = () => {
  return (
    <div id="container" className="--background-grid__white-red--lines">
      <h1>#SuperPartner</h1>
      {/* <div className="partner-container"> */}
      <div className="carousel">
        <Carousel
          responsive={responsive}
          ssr
          showDots={false}
          slidesToSlide={1}
          infinite
          containerClass="container-with-dots"
          itemClass="image-item-partner"
          deviceType={""}
        >
          <Link href="https://blanko.de/">
            <a target="_blank" rel="noreferrer">
              <img src="/img/blanko.png" alt="Blanko" />
            </a>
          </Link>
          <Link href="https://cammio.com/?lang=de">
            <a target="_blank" rel="noreferrer">
              <img src="/img/cammio.png" alt="Cammio" />
            </a>
          </Link>
          <Link href="https://www.digihub.de/">
            <a target="_blank" rel="noreferrer">
              <img src="/img/digihub.png" alt="Digihub" />
            </a>
          </Link>
          <Link href="https://www.zdi-portal.de/">
            <a target="_blank" rel="noreferrer">
              <img src="/img/zdi.png" alt="zdi" />
            </a>
          </Link>
          <Link href="https://www.startupdorf.de/">
            <a target="_blank" rel="noreferrer">
              <img src="/img/startupDorf.png" alt="StartupDorf" />
            </a>
          </Link>
          <Link href="https://super7000.de/">
            <a>
              <img src="/img/super7000.png" alt="super7000" />
            </a>
          </Link>

          <Link href="https://www.na-bibb.de/erasmus-berufsbildung/">
            <a>
              <img src="/img/Erasmus_Partnerlabel_BB_web.jpg" alt="super7000" />
            </a>
          </Link>
        </Carousel>
        {/* </div> */}
      </div>
      <section id="qualitat">
        <h1>#Qualität vor Gewinn</h1>
        <div className="border">
          <p>
            “SuperCode bietet ein arbeitsmarktlich aussichtsreiches und
            praxisnahes Bildungsangebot im IT-Bereich mit methodisch modernen
            und hohem Einsatz von Lehrpersonal. Hervorzuheben ist die
            hervorragende Branchenvernetzung sowie die innovative
            Praxiskompetenz der Geschäftsführung und des Teams.”
          </p>
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
        }
        h1 {
          font-size: 2rem;
          letter-spacing: 2px;
          margin: 0 0 8vh;
        }
        img {
          width: 175px !important;
          display: block;
          margin: 0 auto;
          transition: transform .5s;
        }
        
        
        img:hover {
          transform: scale(1.05)
          // box-shadow: 2px 2px 0 #000
        }
        .partner-container {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          align-items: center;
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
          @media (max-width: 468px) {
            .partner-container{
              
              grid-template-columns: repeat(3,1fr);
              grid-gap: 10%;
              margin-top: -5%;

              
          }
          img {
            margin-top:20px;
            width: 120%;
        }
        }
      `}</style>
    </div>
  );
};

export default SuperPartner;

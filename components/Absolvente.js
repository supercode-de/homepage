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

const Absolvente = () => {
  return (
    <div id="Absolventen">
      <h2>
        unsere <br /> <span>Absolvent*innen</span>
      </h2>
      <div className="Absolventen-list">
        <div className="container">
          <Carousel
            responsive={responsive}
            ssr
            showDots={false}
            slidesToSlide={1}
            infinite
            containerClass="container-with-dots"
            deviceType={""}
            itemClass="carousel-item-padding-20-px"
          >
            <figure>
              <img src="/img/_DSC3289_LowRes.png" alt="" />
              <figcaption>
                <p>
                  “Ich hatte noch nie so viel Spaß in einem Kurs. Ich habe mich
                  sehr schnell wohl gefühlt, und alles war super organisiert.”
                </p>
                <h3>– Rihab Al-Yasiri</h3>
                <h4>arbeitet jetzt bei Provinzial als Web-Developerin</h4>
              </figcaption>
            </figure>
            <figure>
              <img src="/img/Jascha-Hell.png" alt="" />
              <figcaption>
                <p>
                  “Das Bootcamp war super! Viel gesehen, viel gelernt, viel
                  gelacht. Kann ich nur jedem ans Herz legen, der einen Einblick
                  in die Materie Webentwicklung sucht.”
                </p>
                <h3>– Jascha Hell</h3>
                <h4>arbeitet jetzt bei Esentri als Projekt Manager IT</h4>
              </figcaption>
            </figure>
            <figure>
              <img src="/img/_DSC3661_LowRes.png" alt="" />
              <figcaption>
                <p>
                  “Das Bootcamp hat mir super gefallen. Der größte Pluspukt war,
                  dass ich hier auf eine Gruppe Gleichgesinnter und Super
                  Trainer gestoßen bin. ”
                </p>
                <h3>– Abdulrahman Karbouj</h3>
                <h4>arbeitet jetzt bei Edatasystemsals Web-Developer</h4>
              </figcaption>
            </figure>
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        #Absolventen {
          padding: 10vh 9vw;
          background: #5d3ede;
        }
        .container {
          width: 80%;
          margin: 0 auto;
        }
        h2 {
          margin: 0;
          padding: 0 0 10vh;
          color: #3dd7ac;
          font-size: 5em;
          border-bottom: 1px solid #5d3ede;
        }
        h2 span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
        }
        .Absolventen-list {
          padding-top: 15vh;
        }

        p {
          color: #3dd7ac;
          min-height: 100px;
        }
        h3 {
          font-weight: 400;
          margin-bottom: 0;
        }
        p {
          font-weight: 400;
        }
        h4 {
          font-weight: 300;
          margin-top: 0;
          width: 70%;
        }
        h3,
        h4 {
          color: #fff;
        }
        img {
          width: 250px;
        }
        @media (max-width: 768px) {
          .carousel {
            display: block;
          }
          img {
            width: 200px;
          }

          .carousel img {
            height: 20vh;
            width: auto;
          }
          h2 {
            font-size: 3em;
          }
        }
        @media (max-width: 468px) {
          .Absolventen-list {
            padding-top: 1vh;
          }
          img {
            width: 250px;
            margin-left: -40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Absolvente;

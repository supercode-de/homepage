// import { useWindowSize } from './functions/windowSize'
import blog from "./data/blog";
import Carousel from "react-multi-carousel";
import Link from "next/link";

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

const Blog_neu = (props) => {
  // const width = useWindowSize().width / 12
  const pixelSize = 3;
  return (
    <div id="blog">
      <div className="line">
        <h1>
          Meine Strasse, mein <span>Blog</span>
        </h1>

        <div className="blog-list">
          <Carousel
            responsive={responsive}
            ssr
            renderButtonGroupOutside={true}
            showDots={false}
            slidesToSlide={1}
            infinite
            containerClass="container-with-dots"
            itemClass="image-item"
            deviceType={""}
            swipeable
          >
            {blog.map((blogitem, i) => (
              <div
                className="blog-item"
                key={i}
                style={{
                  background: `url(${blogitem.pic}) center/cover no-repeat`,
                }}
              >
                <div className="title-main-container">
                  <div className="title-main">
                    <h3>{blogitem.title.main.slice(0, 100)}</h3>
                    {/* <p>{blogitem.text.slice(0, 200)}</p> */}
                  </div>
                  <div className="buttons">
                    <Link href={"/blogs/" + blogitem.id}>
                      <a target="_blank">zum Artikel </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        #blog {
          color: #3dd7ac;
          font-family: "Neue_Machina_Regular_400";
          background: linear-gradient(
              90deg,
              #fff ${props.width - pixelSize}px,
              transparent 1%
            ),
            linear-gradient(#fff ${props.width - pixelSize}px, transparent 1%),
            #3dd7ac;
          background-size: ${props.width}px ${props.width}px;
          position: relative;
        }
        .line {
          background: url("./img/bg-line.png") top center/cover no-repeat;
          width: 100%;
          padding: ${props.width * 0.7}px;
        }

        h1 {
          font-size: 4em;
          letter-spacing: 2px;
          color: #3dd7ac;
          text-transform: uppercase;
          max-width: ${props.width * 5}px;
          margin: 0;
          line-height: 4rem;
        }
        h1 span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
          font-weight: 300;
        }

        .blog-list {
          padding-top: 15vh;
        }
        // Blog-item-style
        .blog-item {
          height: 500px;
          // width: 80%;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin: 0 10px;
        }

        .title-main-container {
          background: #00000080;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: opacity 1.5s;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 10%;
        }

        .blog-item:hover .title-main-container {
          opacity: 100;
          transition: opacity 1.5s;
        }

        h3,
        p {
          color: #3dd7ac;
        }
        h3 {
          font-weight: 300;
        }
        p {
          font-weight: 200;
        }
        // a {
        //   color: #3dd7ac;
        //   text-decoration: none;
        // }
        // a:hover {
        //   text-decoration: underline;
        //   color: #3dd7ac;
        // }

        .buttons {
          text-align: center;
          display: flex;
          justify-content: flex-end;
        }
        a {
          background: #070021;

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

        @media (max-width: 1040px) {
          .translate {
            transform: translateX(50px);
          }
        }
        @media (max-width: 768px) {
          .translate {
            transform: translateX(0);
          }
        }
        @media (max-width: 468px) {
          a {
            padding-top: 5px;
            font-weight: 400;
            font-size: 0.7em;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog_neu;

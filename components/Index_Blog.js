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
let reverseBlog = blog.reverse();

const Index_Blog = () => {
  // const width = useWindowSize().width / 12
  const pixelSize = 1.5;

  return (
    <div id="blog">
      {console.log("test1")}
      <div>
        <h2>Meine</h2>
        <h2>Straße,</h2>
        <h2>mein <span className="letterstroke">Blog</span></h2>
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
            {reverseBlog.map((blogitem, i) => (

              <Link href={"/blog/" + blogitem.title.main.replace(/ /g, "-").replace(/\?|\#|”|“|"|,|:|\./g, "")}>
                <a target="_blank">
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
                        <p>
                          {blogitem.text.slice(
                            blogitem.text.indexOf("##", 10) + 3,
                            blogitem.text.indexOf("##", 10) + 203
                          )}
                          ...
                        </p>
                        <p className="zum-artikel">zum Artikel</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        #blog {
          color: var(--super-green);
          position: relative;
          padding: 150px 0;
        }
        h2 {
          color: var(--super-green);
          margin: 0;
          padding: 0 calc(100vw / 12);
        }
        .letterstroke {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: var(--super-green);
          font-weight: 300;
        }
        .blog-list {
          padding-top: 10vh;
        }
        // Blog-item-style
        .blog-item {
          height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin: 0 10px;
          border-radius: 50px;
        }

        .title-main-container {
          background: #00000080;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: opacity 1.5s;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
        }
        .title-main {
          padding: 0 5%;
        }
        .blog-item:hover .title-main-container {
          opacity: 100;
          transition: opacity 1.5s;
        }

        a {
          text-decoration: none;
        }
        h3,
        p {
          color: #fff;
        }
        h3 {
          font-size: 1.5em;
          font-weight: 300;
        }
        .title-main:hover h3,
        .zum-artikel:hover {
          color: var(--super-green);
        }

        p {
          padding: 10px 0;
          font-weight: 200;
        }
        // a {
        //   color: var(--super-green);
        //   text-decoration: none;
        // }
        // a:hover {
        //   text-decoration: underline;
        //   color: var(--super-green);
        // }

        // .buttons {
        //   text-align: center;
        //   display: flex;
        //   justify-content: flex-end;
        // }
        // a {
        //   background: var(--super-blau);

        //   display: inline-block;
        //   color: #fff;
        //   text-decoration: none;
        //   text-transform: uppercase;
        //   padding: 5px 35px;
        //   border: 1px solid var(--super-green);
        //   font-size: 0.7em;
        //   font-weight: 600;
        //   line-height: 1.5em;
        //   margin: 10px;
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

        @media (max-width: 1440px) {
          h1 {
            max-width: 9em;
          }
        }

        @media (max-width: 1040px) {
          // .translate {
          //   transform: translateX(50px);
          // }
          h1 {
            max-width: 8.5em;
          }
        }
        @media (max-width: 768px) {
          // .translate {
          //   transform: translateX(0);
          // }
          h1 {
            max-width: 8.9em;
          }
        }
        @media (max-width: 468px) {
          // a {
          //   padding-top: 5px;
          //   font-weight: 400;
          //   font-size: 0.7em;
          // }
        }
      `}</style>
    </div>
  );
};

export default Index_Blog;

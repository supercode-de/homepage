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
          padding: 15% 0;
        }
        h2 {
          color: var(--super-green);
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
          overflow: hidden;
        }

        .title-main-container {
          background: var(--super-black);
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
          color: var(--super-white);
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

        @media (max-width: 1440px) {
          h1 {
            max-width: 9em;
          }
        }

        @media (max-width: 1040px) {
          h1 {
            max-width: 8.5em;
          }
        }
        @media (max-width: 768px) {
          h1 {
            max-width: 8.9em;
          }
          h2 {
            font-size: 2rem;
          }
        }

      `}</style>
    </div>
  );
};

export default Index_Blog;

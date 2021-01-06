import blog from "./data/blog";
import Carousel from "react-multi-carousel";
import Link from "next/link";
// import ButtonGroup from './React-Multi-Carousel-Custom-Arrows'

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

const Blog = () => {
  return (
    <div id="blog">
      <h2>
        erfahre mehr in <br /> unserem <span>Blog</span>
      </h2>
      <div className="blog-list">
        <Carousel
          responsive={responsive}
          ssr
          showDots={false}
          slidesToSlide={1}
          infinite
          containerClass="container-with-dots"
          itemClass="image-item"
          deviceType={""}
        >
          {blog.map((blogitem, i) => (
            <div
              className="blog-item"
              key={i}
              style={{
                background: `url(${blogitem.pic}) center/cover no-repeat`,
              }}
            >
              <div className="translate">
                <h3>{blogitem.title.main.slice(0, 100)}</h3>
                {/* <p>{blogitem.text.slice(0, 200)}</p> */}
                <Link href={"/blogs/" + blogitem.id}>
                  <a target="_blank">zum Artikel </a>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <style jsx>{`
        #blog {
          padding: 10vh 8%;
          background: #03000f;
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
        .translate {
          transform: translateX(150px);
        }
        .blog-list {
          padding-top: 15vh;
        }
        // Blog-item-style
        .blog-item {
          height: 300px;
          max-width: 200px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
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
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
          color: #3dd7ac;
        }
      `}</style>
    </div>
  );
};

export default Blog;

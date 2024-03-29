import blog from './data/blog';
import Link from 'next/link';
let reverseBlog = blog.reverse();
const Blog = () => {
  return (
    <section className='blog-header'>
      <article className='blog-hl'>
        <div className='blog-header-container'>
          <h2>Meine</h2>
          <h2>Straße,</h2>
          <h2>
            mein <span className='letterstroke'>Blog</span>
          </h2>
          <p>
            Hier erfährst du einiges über das Geschehen hinter den Kulissen bei
            SuperCode, spannende Insights zu unseren Kursen , Mitarbeitenden,
            Teilnehmenden sowie die neuesten Trends der IT Branche!
          </p>
        </div>
        <div className='galleryImgs'>
          <div className='blog-hi-gallery'>
            <div>
              <img src='/img/image33.jpg' alt='' />
            </div>
            <div>
              <img src='/img/image35.jpg' alt='' />
            </div>
          </div>

          <div className='blog-hi-gallery-2ndRow'>
            <img src='/img/image34.jpg' alt='' />
          </div>
        </div>
      </article>
      <section className='blog-gallery'>
        {reverseBlog.map((item, i) => {
          return (
            <figure key={i}>
              <div
                className='img-background'
                style={{
                  background: `url(${item.pic}) center/cover no-repeat`,
                }}
              ></div>
              <figcaption>
                <h3>{item.title.main}</h3>
                <p>{item.title.sub}</p>
              </figcaption>
              <Link
                href={
                  '/blog/' +
                  item.title.main
                    .replace(/ /g, '-')
                    .replace(/\?|\#|”|“|"|,|:|\./g, '')
                }
              >
                <a target='_blank'>Weiterlesen</a>
              </Link>
            </figure>
          );
        })}
      </section>
      <style jsx>{`
        .blog-header {
          padding: 50px 0;
          background: var(--super-black);
        }
        img {
          margin: 30px 0;
        }
        h2:not(h2.super-code) {
          color: var(--super-white);
          margin: 0;
        }
        .blog-hl {
          margin: 5% 6rem;
          display: flex;
          justify-content: space-between;
        }
        .blog-header-container {
          width: 50%;
          margin-right: 5%;
          padding-top: 140px;
          color: var(--super-white);
        }
        .blog-header-container p {
          width: 95%;
          padding-top: 22px;
        }

        .blog-hi-gallery {
          display: flex;
          align-items: baseline;
          margin-bottom: -45px;
        }
        .blog-hi-gallery div:nth-of-type(1) {
          margin-right: 15px;
        }
        .blog-hi-gallery img,
        .blog-hi-gallery-2ndRow img {
          width: 100%;
        }
        .blog-hi-gallery-2ndRow {
          width: 65%;
          margin: auto;
        }
        .letterstroke {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: var(--super-white);
          font-weight: 300;
        }
        .blog-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 90%;
          margin: 0 auto;
          padding: 5% 0;
          row-gap: 4rem;
          column-gap: 2rem;
          color: var(--super-white);
        }
        h3,
        p,
        figure {
          margin: 0;
          padding: 0;
        }
        .img-background {
          height: 20rem;
          border-radius: 50px;
        }
        figcaption h3 {
          margin: 2rem 0;
          font-size: 1.5rem;
        }

        figcaption p {
          margin-bottom: 50px;
        }
        a {
          display: block;
          font-size: 14px;
          text-align: center;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 15px 0px;
          background: transparent;
          border: 2px solid var(--super-green);
          color: var(--super-white);
          text-decoration: none;
          border-radius: 50px;
        }

        a:hover {
          background-color: var(--super-green);
          color: var(--super-lila);
        }

        @media (max-width: 768px) {
          .blog-header-container {
            width: 100%;
            padding-top: 100px;
          }
          .blog-gallery {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 90%;
            margin: 0 auto;
            padding: 5% 0;
            row-gap: 4rem;
            column-gap: 2rem;
            color: var(--super-white);
          }
          .blog-hl {
            display: flex;
            flex-direction: column;
            width: 80%;
          }
          figcaption{
            font-size: 1rem;
          } 
        }
        @media (max-width: 585px) {

          .blog-gallery {
            margin: 0 5%;
          }
          .blog-header-container {
            width: 100%;
            margin-right: 5%;
            padding-top: 140px;
            color: var(--super-white);
          }
          .blog-header-container p {
            padding-top: 22px;
            font-size: 1.1rem;
          }
        }
        @media (max-width: 475px) {
          .galleryImgs {
            display: none;
          }

          .blog-gallery {
            margin: 0 5%;
            grid-template-columns: 1fr;
          }
          .blog-hl {
            margin-left: 5%;
            margin-right: 5%;
          }

          .blog-header-container {
            width: 100%;
            margin-right: 5%;
            padding-top: 70px;
            color: var(--super-white);
          }
          .blog-header-container p {
            padding-top: 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;

import blog from './data/blog';
import Link from 'next/link';
let reverseBlog = blog.reverse();
const SuperBlog = () => {
  return (
    <section className='blog-header blackGitter'>
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
        <div>
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
                  background: `url(${item.pic}) 0% 20%/cover no-repeat`,
                }}
              ></div>
              <figcaption>
                <h3>{item.title.main}</h3>
                <p>{item.title.sub}</p>
              </figcaption>
              <Link
                href={
                  '/blogs/' +
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
        }
        h2 {
          color: #fff;
          margin: 0;
          line-height: 67px;
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
          color: #fff;
        }
        .blog-header-container p {
          width: 120%;
          padding-top: 22px;
          font-size: 1.1rem;
        }

        .blog-hi-gallery {
          display: flex;
          align-items: baseline;
          margin-bottom: 15px;
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
          -webkit-text-stroke-color: #fff;
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
          color: #fff;
        }
        h3,
        p,
        figure {
          margin: 0;
          padding: 0;
        }
        .img-background {
          height: 20rem;
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
          font-family: 'Fira Sans', sans-serif;
          font-size: 14px;
          text-align: center;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 15px 0px;
          background: transparent;
          border: 2px solid var(--super-green);
          color: #fff;
          text-decoration: none;
          // margin-top: 20px;
          // transform: translateY(-30px);
        }

        a:hover {
          background-color: var(--super-green);
        }
      `}</style>
    </section>
  );
};

export default SuperBlog;

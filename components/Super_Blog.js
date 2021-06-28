import blog from './data/blog';
import Link from 'next/link';
let reverseBlog = blog.reverse();
const SuperBlog = () => {
  return (
    <section className='blog-header blackGitter'>
      <article className='blog-hl'>
        <h2>Meine</h2>
        <h2>Straße,</h2>
        <h2>mein</h2>
        <h2 className='letterstroke'>Blog</h2>
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
        }
        .blog-hl {
          margin: 5% 12rem;
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
        }
      `}</style>
    </section>
  );
};

export default SuperBlog;

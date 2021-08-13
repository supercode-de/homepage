import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const BlogDetails = (props) => {
  const pixelSize = 2;
  // console.log("props", props)
  return (
    <div id='blogDetails ' className='blackGitter'>
      <section>
        {/* <article className='left'>
          <h1>{props.title.main}</h1>
          <h2>{props.title.sub}</h2>
        </article> */}
        <article className='right'>
          <p>
            <ReactMarkdown>{props.text}</ReactMarkdown>
          </p>
        </article>
      </section>
      <footer id='footter'>
        <article className='left'>
          <div className='hide'></div>
          {/* <div className='text-container'></div> */}
          <Link
            href={
              '/blogs/' +
              props.titlePrevious.main
                .replace(/ /g, '-')
                .replace(/\?|\#|”|“|"|,|:|\./g, '')
            }
          >
            <div className='arrow-left'>
              <img src='/img/Arrow18.svg' alt='' />
            </div>
          </Link>
          <ReactMarkdown>{props.titlePrevious.main}</ReactMarkdown>
        </article>
        <article className='right'>
          <ReactMarkdown>{props.titleNext.main}</ReactMarkdown>
          {/* <div className='text-container'> */}
          <Link
            href={
              '/blogs/' +
              props.titleNext.main
                .replace(/ /g, '-')
                .replace(/\?|\#|”|“|"|,|:|\./g, '')
            }
          >
            <div className='arrow-right'>
              <img src='/img/Arrow19.svg' alt='' />
            </div>
          </Link>
          {/* </div> */}
        </article>
      </footer>
      <style jsx>{`
        #blogDetails {
          color: #fff;
        }

        section {
          //  display: flex;
        }

        .left,
        .right {
        }
        // section .right {
        //   overflow-y: auto;
        //   height: 90vh;
        // }

        section .left {
          height: 90vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(
              90deg,
              #03000f ${props.width - pixelSize}px,
              transparent 1%
            ),
            linear-gradient(
              #03000f ${props.width - pixelSize}px,
              transparent 1%
            ),
            #fff;
          background-size: ${props.width}px ${props.width}px;
        }
        .hide {
          display: none;
        }
        section h3 {
          font-weight: bold;
          font-size: 16px;
          padding-top: 30px;
          padding-left: 80px;
          margin-top: 0;
        }

        section .left h1 {
          font-size: 3em;
          font-weight: 400;
          padding: 0 8%;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
        }
        section .left h2 {
          font-size: 2em;
          font-weight: 400;
          padding: 0 8%;
          color: #fff;
        }

        section p {
          font-size: 1em;
          padding-top: 50px;
          padding: 20px 6%;
          line-height: 2;
          color: rgba(0, 0, 0, 0.5);
        }

        section p span {
          display: block;
        }

        section .right h2 {
          padding-left: 50px;
          padding-top: 30px;
          margin-top: 0;
        }

        section .right h2 span {
          font-size: 0.7em;
          color: rgba(0, 0, 0, 0.5);
        }

        footer {
          display: flex;
          justify-content: space-between;
        }

        footer .left,
        footer .right {
          display: flex;
          justify-content: space-between;
        }

        .arrow-left {
          position: relative;
          top: 40px;
          width: 100px;
          left: 5%;
        }
        .arrow-right {
          position: relative;
          top: -20px;
          width: 70px;

          right: 5%;
        }

        .arrow-left img,
        .arrow-right img {
          width: 100%;
        }
        .arrow-left:hover {
          cursor: pointer;
        }
        .arrow-right:hover {
          cursor: pointer;
        }

        // .arrow-left a {
        //   color: #000;
        //   text-decoration: none;
        // }
        .arrow-right a {
          color: #fff;
          text-decoration: none;
        }
        .social ul {
          list-style: none;
        }

        .social li {
          display: inline;
          padding-right: 20px;
        }

        .social li a {
          text-decoration: none;
          color: #000;
        }

        .text-container {
          padding-right: 20px;
          padding-left: 20px;
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .text-container h2 {
          margin-bottom: 0;
          font-size: 1.2em;
        }

        .text-container p {
          margin: 0;
          font-size: 0.8em;
          color: rgba(0, 0, 0, 0.6);
        }
        .right img {
          width: 80% !important;
        }

        @media (max-width: 880px) {
          article {
            font-size: 14px;
          }
          section .right {
            overflow-y: hidden;
            height: auto;
          }
          section {
            display: block;
          }
          section .left,
          section .right {
            width: 100%;
          }
          section .left p {
            padding-bottom: 150px;
          }
          .arrow-left,
          .arrow-right {
            width: 20%;
          }
          .arrow-right {
          }
        }
        @media (max-width: 580px) {
          section .left h1 {
            padding: 0 4%;
          }
          footer {
            height: 10vh;
          }
          .text-container {
            display: none;
          }
          .hide {
            display: block;
          }
        }
        @media (max-width: 450px) {
          .arrow-right {
            top: -5px;
          }
          section {
            margin-top: -60px;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;

import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogDetails = (props) => {
  const pixelSize = 2;
  // console.log("props von blogdetails", props);
  return (
    <div id="blogDetails" className={`${props.klasse}`}>
      <section>

        <article className="right">
          <p>
            <ReactMarkdown>{props.text}</ReactMarkdown>
          </p>
        </article>
      </section>
      <footer id="footter">
        <Link
          href={
            "/blogs/" +
            props.titlePrevious.main
              .replace(/ /g, "-")
              .replace(/\?|\#|”|“|"|,|:|\./g, "")
          }
        >
          <article className="left">
            {/* <div className='hide'></div> */}
            {/* <div className='text-container'></div> */}
            <div className="arrow-left">
              <img src="/img/Arrow18.svg" alt="" />
            </div>

            <ReactMarkdown>{props.titlePrevious.main}</ReactMarkdown>
          </article>
        </Link>
        <Link
          href={
            "/blogs/" +
            props.titleNext.main
              .replace(/ /g, "-")
              .replace(/\?|\#|”|“|"|,|:|\./g, "")
          }
        >
          <article className="right">
            <ReactMarkdown>{props.titleNext.main}</ReactMarkdown>

            {/* <div className='text-container'> */}
            <div className="arrow-right">
              <img src="/img/Arrow19.svg" alt="" />
            </div>
            {/* </div> */}
          </article>
        </Link>
      </footer>
      <style jsx>{`
        #blogDetails {
          color: var(--super-white);
          background: var(--super-blau);
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
          -webkit-text-stroke-color: var(--super-white);
        }
        section .left h2 {
          font-size: 2em;
          font-weight: 400;
          padding: 0 8%;
          color: var(--super-white);
        }

        section p {
          font-size: 1em;
          padding-top: 50px;
          padding: 20px 6%;
          line-height: 2;
          color: var(--super-blau);
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
          color: var(--super-blau);
        }

        footer {
          display: flex;
          position: relative;
          justify-content: space-between;
        }

        footer .left,
        footer .right {
          display: flex;
          justify-content: space-between;
          cursor: pointer;
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
          color: var(--super-blau);
        }
        .right img {
          width: 80% !important;
        }
        section .right h1 {
          color: var(--super-white);
        }
        section .right h2 {
          color: var(--super-white);
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
          .arrow-left {
            width: 20%;
          }
          .arrow-right {
            bottom: 70px;
            width: 9%;
          }
        }
        @media (max-width: 768px) {
          footer {
            display: block;
            padding: 5%;
          }
        }
        @media (max-width: 710px) {
          .arrow-right {
            bottom: 56px;
          }
        }
        @media (max-width: 580px) {
          section .left h1 {
            padding: 0 4%;
          }

          .text-container {
            display: none;
          }
          .hide {
            display: block;
          }
          .arrow-right {
            width: 11%;
          }
          .arrow-left {
            top: 30px;
          }
        }
        @media (max-width: 450px) {
          .arrow-right {
            top: -5px;
          }
          .arrow-left {
            top: 46px;
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

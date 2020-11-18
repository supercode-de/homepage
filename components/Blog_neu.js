// import { useWindowSize } from './functions/windowSize'
import Link from "next/link";
const Blog_neu = (props) => {
  // const width = useWindowSize().width / 12
  const pixelSize = 3;
  return (
    <div id="blog">
      <div className="line">
        <h1>
          Meine Strasse, mein <span>Blog</span>
        </h1>
        <div className="pictures">
          <div className="picture"></div>
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
        }

        h1 {
          font-size: 4em;
          letter-spacing: 2px;
          color: #3dd7ac;
          text-transform: uppercase;
          max-width: ${props.width * 5}px;
          margin: 0;
          line-height: 4rem;
          padding: ${props.width * 0.8}px;
          padding-right: 0;
        }
        h1 span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default Blog_neu;

import Popup from "reactjs-popup";
const Typeform = (props) => {
  return (
    <>
      <Popup
        trigger={<button className="button">JETZT BEWERBEN</button>}
        position=" center"
      >
        <div id="typeform">
          <iframe
            id="typeform-full"
            width="100%"
            height="100%"
            frameborder="0"
            allow="camera; microphone; autoplay; encrypted-media;"
            src="https://form.typeform.com/to/L6u0np35"
          ></iframe>
          <script
            type="text/javascript"
            src="https://embed.typeform.com/embed.js"
          ></script>
        </div>
      </Popup>
      <style jsx>{`
        #typeform {
          position: fixed;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80vh;
          color: #3dd7ac;
        }
        a {
          position: absolute;
          top: 50px;
          right: 50px;
          display: inline-block;
          width: 450px;
          height: 50px;
          overflow-x: hidden;
          transition: transform 0.5s linear;
          z-index: 500;
        }
        a::before,
        a::after {
          content: "";
          position: absolute;
          height: 4px;
          width: 100%;
          top: 50%;
          left: 0;
          margin-top: -1px;
          background: #fff;
        }
        a::before {
          transform: rotate(-45deg);
        }
        a::after {
          transform: rotate(45deg);
        }
        a:hover {
          transform: rotate(180deg);
        }
        .button {
          margin: 2em 1em 0;
          font-family: "Fira Sans", sans-serif;
          font-style: normal;

          font-size: 0.7em;
          font-weight: 600;
          line-height: 1.5em;
          text-align: center;
          // letter-spacing: 2px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          padding: 10px 0;

          background: transparent;
          border: 1px solid #3dd7ac;
          text-decoration: none;
          color: #fff;
          justify-self: center;
          display: inline-block;
          min-width: 23em;
          text-align: center;
        }
        .button:hover {
          color: #5d3ede;
          background: #3dd7ac;
          cursor: pointer;
        }
        iframe {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0px;
          border: 0;
        }
        // @media (max-width: 468px) {
        //   .button {
        //     width: 420px;
        //   }
        // }
        // @media (max-width: 568px) {
        //   .button {
        //     width: 230px;
        //   }
        // }

        @media (max-width: 468px) {
          .button {
            font-size: 1.2em;
            width: 16em;
            min-width: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Typeform;

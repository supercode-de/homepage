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
          color: var(--super-green);
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
          font-family: "Fira Sans", sans-serif;
          font-size: 14px;
          letter-spacing: 3.5px;
          background: transparent;
          border: 1px solid var(--super-green);
          color: #fff;
          display: inline-block;
          width: 100%;
          padding: 15px 0;
          
        }
        .button:hover {
          color: var(--super-lila);
          background: var(--super-green);
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
        @media (max-width: 1440px) {
          .button {
            font-size: 12px;
          }
        }
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

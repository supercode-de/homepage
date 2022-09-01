import Popup from "reactjs-popup";
const Typeform_neu2022 = (props) => {
  return (
    <>
      <Popup trigger={<button>JETZT BEWERBEN</button>} position="center">
        <div id="typeform">
          <iframe
            src={`https://form.typeform.com/to/${props.typeformID}`}
            frameborder="0"
            id="typeform-full"
            width="100%"
            height="100%"
            allow="camera; microphone; autoplay; encrypted-media;"></iframe>
          {/* <button data-tf-slider="L6u0np35" data-tf-width="550" data-tf-iframe-props="title=Coding" data-tf-medium="snippet" className="typeform-form">JETZT BEWERBEN 2</button> */}
          <script src="https://embed.typeform.com/embed.js"></script>
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
          background-color: var(--super-lila);
          z-index: 9;
        }

        button {
          margin: 2em 1em;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 15px 0px;
          background: transparent;
          border: 2px solid var(--super-green);
          color: ${props.color ? props.color : "var(--super-white)"};
          justify-self: center;
          display: inline-block;
          width: 38.75em;
          outline: none;
        }
        button:hover {
          color: var(--super-lila);
          background: var(--super-green);
        }

        @media (max-width: 768px) {
          button {
            width: 420px;
          }
        }
        @media (max-width: 568px) {
          button {
            width: 230px;
          }
        }
      `}</style>
    </>
  );
};

export default Typeform_neu2022;

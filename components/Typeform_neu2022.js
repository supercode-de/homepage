import Popup from "reactjs-popup";
const Typeform_neu2022 = (props) => {
  console.log("typeform", props.width);
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
          padding: 1rem 5rem;
          background: transparent;
          border: 2px solid var(--super-green);
          justify-self: center;
          display: inline-block;
          outline: none;
          color: ${props.color ? props.color : "var(--super-white)"};
          
        }
        button:hover {
          color: var(--super-lila);
          background: var(--super-green);
        }

      `}</style>
    </>
  );
};

export default Typeform_neu2022;

import Popup from 'reactjs-popup';
const Typeform_neu_flexible = (props) => {
  return (
    <>
      <Popup trigger={<button>JETZT BEWERBEN</button>} position=' center'>
        <div id='typeform'>
          <iframe
            id='typeform-full'
            width='100%'
            height='100%'
            frameborder='0'
            allow='camera; microphone; autoplay; encrypted-media;'
            src='https://form.typeform.com/to/L6u0np35'
          ></iframe>
          <script
            type='text/javascript'
            src='https://embed.typeform.com/embed.js'
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
          content: '';
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

        button {
          // position: ${!props.position ? "relative" : "static"}; 
          // margin: 2em 1em;
          font-family: 'FiraSans-Regular', sans-serif;
          font-size: 14px;
          // line-height: 16px;
          text-align: center;
          letter-spacing: 1px;
          text-transform: uppercase;
          // padding: 5px 0px;
          background: transparent;
          border: 2px solid var(--super-green);
          color: #fff;
          // justify-self: center;
          // display: inline-block;
          width: ${props.width ? props.width : '38.75em'};
          height: ${props.height ? props.height : '38.75em'};
          // top: ${props.top ? props.top : '50px'};

          outline: none;
        }
        button:hover {
          color: var(--super-lila);
          background: var(--super-green);
        }
        iframe {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0px;
          border: 0;
        }
        @media (max-width: 768px) {
          button {
          }
        }
        @media (max-width: 568px) {
          button {
            width: 255px;
            height: 55px;
            font-size: 1rem;
            left: 10%;
            top: 0px;
          }
        }

        @media (max-width: 424px) {
          button {
            width: 16em;
            // right: 5%;
            top: 5px;
            height: 55px;
            left: 10%;
          }
          // @media (max-width: 380px) {
          //   button {
          //     right: 15%;
          //     top: 5px;
          //   }
        }
      `}</style>
    </>
  );
};

export default Typeform_neu_flexible;

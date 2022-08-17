import Arrow from "./small/Arrow";
import TelefonAside from "../small/TelefonAside";

const DsgvoHeader = (props) => {
  const pixelSize = 1; // Width of Lines in Background
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div id="dsgvo">
      <h1>Datenschutz</h1>

      <TelefonAside />
      <Arrow />

      <style jsx>{`
        #dsgvo {
          background: var(--super-black);
          background-size: calc(100vw / 12) calc(100vw / 12);
          min-height: 90vh;
        }
        h1 {
          margin: 0;
          padding-top: 36vh;
          padding-bottom: 10vh;
          font-size: 5em;
          letter-spacing: 2px;
          color: var(--super-green);
          text-align: center;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 3em;
            width: 90%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default DsgvoHeader;

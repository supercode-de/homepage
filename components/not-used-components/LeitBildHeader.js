import Arrow from '../components/small/Arrow';
import TelefonAside from '../small/TelefonAside';
const LeitBildHeader = (props) => {
  const pixelSize = 1; // Width of Lines in Background
  return (
    <div id='impressum'>
      <h1>Leitbild</h1>

      <TelefonAside/>
      <Arrow />
      <style jsx>{`
        #impressum {
          background: var(--super-black);
          height: 90vh;
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

export default LeitBildHeader;

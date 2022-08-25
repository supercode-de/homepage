import TelefonAside from './small/TelefonAside';

const WS_Header = (props) => {
  return (
    <div id='header'>
      <h2 className='super-code'>super(code)</h2>
      <div className='content'>
        <TelefonAside />
        <div className='content-img'>
          <img
            src={props.img}
            alt='Programmieren Weiterbildungsangebote Düsseldorf, SuperCode Programmieren Lernen Bootcamp'
          />
        </div>
        <div className='content-text'>
          <h1>
            Dein Einstieg
            <br />
            in die IT-Welt:
            <br />
            <span className='super'>
              Unsere
              <br />
              <span className='circle'>{props.kurs}</span>
            </span>
          </h1>
        </div>
      </div>
      <style jsx>{`
          #header {
            padding: 100px 0;
            position: relative;
            background: var(--super-lila);
          }

          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding: 50px 0 80px;
          }

          .content-img {
            width: 55%;
          }
          .content-img img {
            width: 100%;
          }
          .content-text {
            position: absolute;
            bottom: 0;
            right: 0;
          }
          h1 {
            font-size: 4em;
            color: var(--super-white);
            line-height: 1.2em;
            margin: 3vh 3vw;
          }
          h1 span.super {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: var(--super-white);
            font-weight: 300;
          }

          span.circle {
            position: relative;
          }

          span.circle::after {
            position: absolute;
            background: url('/img/Vector64.svg') center/contain no-repeat;
            transform: rotateX(45deg);

            height: 200%;
            width: 105%;
            right: -2%;
            bottom: -55%;
            content: '';
            display: block;
          }

          p {
            color: var(--super-white);
            font-size: 1em;
            line-height: 30px;
          }

          @media (max-width: 1040px) {
            h1 {
              font-size: 2.5em;
            }
          }
          @media (max-width: 768px) {
            #header {
              padding: 80px 6% 30px;
            }
            h1 {
              font-size: 4em;
              align-self: center;
              justify-self: center;
            }
            p {
              font-size: 2em;
              margin-bottom: 50px;
            }

            .arrow {
              display: none;
            }
          }
          @media (max-width: 644px) {
            .content-img {
              width: 75%;
            }
          }
          @media (max-width: 468px) {
            h1 {
              font-size: 2.8em;
            }
            .content-img {
              width: 95%;
            }
          }
          @media (max-width: 375px) {
            .content-img {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default WS_Header;

import TelefonAside from './small/TelefonAside';
TelefonAside
const HeaderKurse_neu = () => {
  return (
    <div id='header' className='lilaGitter'>
      <h2 className='super-code'>super(code)</h2>
      <div className='content'>
        <div className='content-img'>
          <img
            src='/img/_DSC4066_LowRes.png'
            alt='Programmieren Weiterbildungsangebote Düsseldorf, SuperCode Programmieren Lernen Bootcamp'
          />
        </div>
        <div className='content-text'>
          <h1>
            Dein Einstieg
            <br />
            in die IT-Welt:
            <br />
            <span className='super'>Unsere&nbsp;Bootcamps!</span>
          </h1>
        </div>
        <TelefonAside />
      </div>
      <style jsx>{`
          #header {
            padding: 100px 0;
            position: relative;
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
            color: var(--super-white);
            margin: 3vh 3vw;
          }
          h1 span.super {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: var(--super-white);
            font-weight: 300;
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
          }
          @media (max-width: 468px) {
            h1 {
              font-size: 2.8em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeaderKurse_neu;

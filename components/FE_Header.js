const FE_Header = (props) => {
  return (
    <header>
      <div className='super-code'>super(code)</div>
      <span className='aside'> 📞 +49 211 7817 233-0 </span>
      <section className='header-flex'>
        <div className='header-img start-container'>
          <div className='start'>
            START <br />
            {props.datum}
          </div>
          <img src='/img/_DSC7143_LowRes.png' alt='' />
        </div>
        <div className='headline'>
          <h1>Front–End</h1>
          <h1 className='letterstroke'>
            BOOT <br /> –CAMP
          </h1>
        </div>
      </section>
      <style jsx>
        {`
          img + div {
            display: none;
          }
          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            color: #fff;
            font-weight: 300;
            left: 3%;
            top: 60%;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #ffffff;
          }
          header {
            padding: 40px 0 40px 5%;
            font-family: 'Neue_Machina_Regular_400';
            position: relative;
            background-color: #5d3ede;
            background-image: linear-gradient(
                to right,
                rgba(255, 255, 255, 0.25) 0,
                rgba(255, 255, 255, 0.25) 1px,
                transparent 1px,
                transparent 100%
              ),
              linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.25) 0,
                rgba(255, 255, 255, 0.25) 1px,
                transparent 1px,
                transparent 100%
              );
            background-position: 0 0, 0 0;
            background-size: calc(100vw / 12) calc(100vw / 12);
          }
          .super-code {
            position: absolute;
            top: 30px;

            left: 7rem;
            color: #fff;
            font-size: 1.3rem;
            font-family: 'Fira Sans', sans-serif;
            font-weight: bold;
          }
          h1 {
            font-family: 'Neue_Machina_Regular_400';
            font-size: 9.5rem;
            color: #fff;
            line-height: 0.9em;
            margin: 0;
          }
          .letterstroke {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: #fff;
            font-weight: 300;
          }
          .header-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 5rem 0;
            gap: 5rem;
          }
          .header-flex div img,
          .header-flex > * {
            width: 100%;
          }
          .start-container {
            position: relative;
          }
          .start {
            position: absolute;
            height: 180px;
            width: 180px;
            background: var(--super-yellow);
            border-radius: 50%;
            transform: rotate(-10deg) translate(50%, 50%);
            bottom: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            font-family: 'Neue_Machina_Ultrabold';
            font-size: 2rem;
            z-index: 9;
          }

          @media (max-width: 1040px) {
            h1 {
              font-size: 2.5em;
            }
          }
          @media (max-width: 768px) {
            #header {
              padding: 100px 6% 10px;
            }
            h1 {
              font-size: 4em;
            }
          }
          @media (max-width: 644px) {
            #header {
              padding: 85px 30px;
            }
          }
          @media (max-width: 468px) {
            h1 {
              font-size: 2.8em;
            }
          }
        `}
      </style>
    </header>
  );
};

export default FE_Header;

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
            Boot <br /> –camp
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
            position:relative;
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
            right: 10%;
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
                font-size: 4em;
                padding-left: 70px;
              }
            .header-flex {
             gap:0;
            }
            .start{
              width:150px;
              height:150px;
            }

            .header-flex {min-width:90%;}
          @media (max-width: 875px) {
            .header-flex {
              flex-direction:column;
              padding: 0 100px;
             
            }
            h1 {
              font-size: 4em;
              padding-left: 70px;
              position:relative;
              bottom:50px;
            }
            .start{
              width:140px;
              height:140px;
             
            }

          }
          @media (max-width: 768px) {
            // #header {
            //   padding: 100px 6% 10px;
            // }
            .header-flex {padding:0 55px}
            h1 {
              font-size: 4em;
            }
            .start{
              width:110px;
              height:110px;
              font-size: 1.4rem;
              bottom: -17%;
            
            }
            
          }
          @media (max-width: 644px) {
            #header {
              padding: 85px 30px;
            }
            h1 {
              font-size: 5em;
            }
            .start{
              width:100px;
              height:100px;
              font-size: 1.4rem;
              bottom: -17%;
            
            }
          }
          @media (max-width: 468px) {
            h1 {
              font-size: 4em;
            }
            .start{
              height: 100px;
              width: 100px;
              font-size: 1rem;
            }
            header{
              padding-bottom:0;
            }
            .header-flex{
              margin-bottom:0;
            }
          }
          @media (max-width: 380px) {
            .start{
              height: 80px;
              width: 80px;
              font-size: 1rem;
            }
          }
        `}
      </style>
    </header>
  );
};

export default FE_Header;

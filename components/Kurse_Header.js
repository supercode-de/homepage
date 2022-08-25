import Stoerer_LiveOnline from "./small/Stoerer_LiveOnline";
import TelefonAside from "./small/TelefonAside";

const Kurse_Header = (props) => {
    console.log(props);
    return (
        <header>
            <h2 className='super-code'>super(code)</h2>
            <TelefonAside />
            <section className='header-flex'>
                <div className='header-img start-container'>
                    <div className='imgWrapper'>
                        <img src={props.kursForm === "UX/UI–DESIGN" ? "/img/uxui_header.png" : "/img/kurse_header_webdev.jpg"} alt='Menschen beim arbeiten am Computer' />
                    </div>
                </div>
                <div className='headline'>
                    <h1>{props.kursForm}</h1>
                    <h1 className='letterstroke'>
                        BOOT <br /> –CAMP
                    </h1>
                </div>
            </section>
                <Stoerer_LiveOnline stoererTopPos={props.stoererTopPos}/>
            <style jsx>{`
            img + div {
                display: none;
            }

            header {
                padding: 75px 0 40px 5%;
                position: relative;
                background-color: var(--super-lila);
            }

            h1 {
                font-size: 150px;
                color: var(--super-white);
                line-height: 0.9em;
                margin: 0;
                font-family: "Neue_Machina_Ultrabold";
            }
            .letterstroke {
                color: transparent;
                letter-spacing: 2px;
                -webkit-text-stroke-width: 3px;
                -webkit-text-stroke-color: var(--super-white);
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
                right: 1%;
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

            .header-flex {padding:0 110px;}
            h1 {
                font-size: 4rem;
            }
            .start{
                width:110px;
                height:110px;
                font-size: 1.4rem;
                bottom: -7%;
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
            .start{
                height: 80px;
                width: 80px;
                font-size: 1rem;
                right:10%;
                bottom: -10%;
            }
            .headline{
                margin-right:28%;
                margin-bottom:-170px;
                //  width:100%;
            }
            .header-flex{
                padding:0 25px;

            }
            .imgWrapper{
                width:100%;
            }
            h1 {
                font-family: 'Neue_Machina_Ultrabold';
                font-size: 5.6em;
                line-height:50px;
                top:-100px;
                
            }
            .letterstroke{
                width:100%;
                margin-bottom:30px;
            }
            }
            @media (max-width: 375px) {

            .start{
                height: 80px;
                width: 80px;
                font-size: 1rem;
                right:10%;
                bottom: -10%;
            }
            .headline{
                margin-right:28%;
                margin-bottom:-60px;
                //  width:100%;
            }
            .header-flex{
                padding:0 18px;
                margin-bottom:0;

            }
            .imgWrapper{
                width:100%;
            }
            h1 {
                font-family: 'Neue_Machina_Ultrabold';
                font-size: 5.6em;
                line-height:50px;
                top:-100px;
                
            }
            .letterstroke{
                width:100%;
                margin-bottom:30px;
            }
            }
            @media (max-width: 355px) {
            .header-flex{
                padding:0 10px;
                
            }
            .start{
                height: 75px;
                width: 75px;
                font-size: 1rem;
                right:15%;
                bottom: -10%;
            }
            }
        `}
            </style>
        </header>
    );
};

export default Kurse_Header;
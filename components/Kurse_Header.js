import Stoerer_LiveOnline from "./small/Stoerer_LiveOnline";
import TelefonAside from "./small/TelefonAside";

const Kurse_Header = (props) => {
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
            <Stoerer_LiveOnline stoererTopPos={props.stoererTopPos} />
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
                font-size: clamp(3.125rem, 1.875rem + 6.25vw, 9.375rem);
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

            @media (max-width: 1040px) {
                .header-flex {
                    gap: 20px;
                }

                .header-flex {
                    min-width:90%;
                }
            }

            @media (max-width: 875px) {
                .header-flex {
                    flex-direction:column;
                    padding: 0 100px;
                }
                h1 {
                    padding-left: 70px;
                    position:relative;
                    bottom:50px;
                }
                .header-flex {
                    padding:0 110px;
                }
            }

            @media (max-width: 644px) {
                #header {
                    padding: 85px 30px;
                }
            }

            @media (max-width: 468px) {
                .headline{
                    margin-right:28%;
                    margin-bottom:-170px;
                }
                .header-flex{
                    padding:0 25px;
                }
                .imgWrapper{
                    width:100%;
                }
                .letterstroke{
                    width:100%;
                    margin-bottom:30px;
                    -webkit-text-stroke-width: 2px;
                }
            }

            @media (max-width: 375px) {
                .headline{
                    margin-right:28%;
                    margin-bottom:-60px;
                }
                .header-flex{
                    padding:0 18px;
                    margin-bottom:0;
                }
                .imgWrapper{
                    width:100%;
                }
            }

            @media (max-width: 355px) {
                .header-flex{
                    padding:0 10px;
                    
                }
            }
        `}
            </style>
        </header>
    );
};

export default Kurse_Header;

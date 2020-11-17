
import Typeform from "./TypeForm";

const HeaderCallToAction_neu = () => {
    return (
        <div id="header-call">
            <h2>Lerne Programmieren und werde <br /> <span className="bling">Junior</span> Full-Stack <span className="bling2">Web-Developer*in!</span><br />– <span className="super">jetzt auch <span className="circle">online!</span></span></h2>
            <div>
            <Typeform />
            </div>
            <style jsx>{`
            #header-call {
                background:rgb(7, 0, 33);
                color: #fff;
                font-family:"Neue_Machina_Regular_400";
                padding: 7.2vh 0;
                position: relative;
                display: grid;
                grid-template-columns: repeat(3,1fr);
                justify-items:center;
            }
            h2 {
                font-size:4.4em; 
                line-height:75px; 
                padding: 0 1%;
                grid-column-start: span 3;
                justify-self:center;
                
            }
            h2 span.super{
                color: transparent;
                letter-spacing: 2px;
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: #fff;
                font-weight:300;
            }

            .super,.cirle, .bling, .bling2{
                position:relative;
            }

            h2 span.circle::after{
                    position:absolute;
                    background:url('/img/Vector64.svg') center/cover no-repeat;
                    height: 162%;
                    width: 45%;
                    right: -16px;
                    bottom: -32px;
                    content:'';
                    display:block;
                }

            h2 span.bling::before{
                position:absolute;
                background:url('/img/bling.png') center/cover no-repeat;
                height: 100%;
                width: 18%;
                bottom: 10px;
                left: -40px;
                content:'';
                display:block;
            }
            h2 span.bling2::after{
                position:absolute;
                background:url('/img/bling2.png') center/cover no-repeat;
                height: 100%;
                width: 6%;
                right: -47px;
                bottom: 3px;
                content:'';
                display:block;
            }
            #header-call div{
                grid-column: 3 / 4;
            }

        `}</style>
        </div>
    );
}

export default HeaderCallToAction_neu;
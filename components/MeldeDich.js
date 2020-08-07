import Button from "./small/Button"
import Beratung from "./Beratung";
import Link from "next/link";

const MeldeDich = () => {
    return (
        <div id="melde-dich">
            <h1>Melde dich noch heute <br />oder mach’ mit bei unserem kostenlosen Workshop</h1>

            <div className="buttons">
                <Beratung />
                <Link href="/workshops"><a href="">WORKSHOPS</a></Link>

            </div>
            <style jsx>{`
            #melde-dich {
                background: #5D3EDE;
                border: 12px solid #03000F;
                width: 80%;
                margin: 10vh auto;
            }
            h1 {
                font-size: 2em;
                color: #3DD7AC;
                text-align: center;
            }
            .buttons {
                text-align: center;
                margin-bottom: 2.68em;
                display:flex;
                justify-content:center;
            }
            a {
                display:inline-block;
                color: #fff;
                text-decoration: none;
                text-transform: uppercase;
                padding: 3px 10px;
                border: 3px solid #fff;
                font-size: .9em;
                font-weight: 200;
                margin: 10px;
                transition: top .5s linear, box-shadow .5s linear, left .5s linear;
                box-shadow: 0 0 0 0 transparent;
                position: relative;
                top: 0;
                left: 0;
                text-align: center;
                min-width:100px;
            }
            a:hover {
                // margin: 10px 5px 15px 10px;
                // margin: 10px 10px 15px 15px;
                box-shadow: -5px 5px 0 0 #fff;
                top: -5px;
                left: 5px;
            }
            `}</style>
        </div>
    );
}

export default MeldeDich;
import Link from 'next/link'

const FooterCallToAction = (props) => {
    return (
        <div id="call-to-action">
            <h1>
                Worauf wartest du noch?!
                <span>Die nächsten Kurse starten im {props.month}!</span>
            </h1>
            <div className="buttons">
                <Link href=""><a>Play Video</a></Link>
                <Link href=""><a>Play Video</a></Link>
            </div>
            <style jsx>{`
            #call-to-action {
                background: #5D3EDE;
                color: #3DD7AC;
                margin: 0 auto;
                padding: 8vh 5%;
                display: flex;
                justify-content: space-between;
                
            }
            h1 {
                font-size: 3em;
                letter-spacing: 2px;
                margin: 0;
            }
            span {
                display: block;
                color: transparent;
                letter-spacing: 3px;
                -webkit-text-stroke-width: 1.5px;
                -webkit-text-stroke-color: #3DD7AC;
            }
            .buttons {
                display: flex;
                align-items: flex-end;
                
            }
            a {
                color: #fff;
                text-decoration: none;
                text-transform: uppercase;
                padding: 5px;
                border: 3px solid #fff;
                font-size: .9em;
                font-weight: 200;
                margin: 10px;
            }
            a:hover {
                color: #5D3EDE;
                background: #fff;
            }
            @media (max-width: 768px) {
                #call-to-action {
                    display: block;
                }
                a {
                    margin: 10px 20px 0 0;
                    
                }
            }
            
            `}</style>
        </div>
    );
}

export default FooterCallToAction;
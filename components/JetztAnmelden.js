import React from 'react';
//import './jetzt-anmelden.css'
import HubspotForm from 'react-hubspot-form'

const JetztAnmdelden = (props) => {
    return (
        <div id="jetzt-anmelden" className={props.isHidden ? "isHidden" : "isNotHidden"}>
            <button className="jetzt-anmelden-close" onClick={props.toggleJetztAnmelden}>&#10539;</button>

            <div className="jetzt-anmelden-container">
                <div className="jetzt-anmelden-left">
                    <h1>How can we get in touch?</h1>
                    <p>We’re available Monday-Friday from 8am-8pm EST. Requests outside of these hours will be handled the next business day.</p>
                </div>
                <div className="jetzt-anmelden-right">
                    <HubspotForm
                        portalId='5807040'
                        formId='4fb004bc-0372-4848-b17d-923a1b059392'
                        onSubmit={() => console.log('Submit!')}
                        onReady={(form) => console.log('Form ready!')}
                        loading={<div>Loading...</div>}
                    />
                </div>
            </div>
            {/* <style jsx>{`
                    #jetzt-anmelden{
                        position: fixed;
                        background: #ffffff;
                        padding: 20px;
                        background:#0b0f2c ;
                        top: 0;
                        bottom: 0;
                        overflow-y: scroll;
                        transition: all .5s;
                        width: 100%;
                        z-index: 99999;
                    }
                    .isHidden{
                        right:-100%;
                    }
                    .isNotHidden{
                        right:0;
                    }
                    .hbspt-form{
                        width: 500px;
                    }

                    .jetzt-anmelden-container{
                        padding: 5% 10%;
                        display: grid;
                        grid-template-columns: 1fr 2fr;
                        gap:50px;
                    }
                    .jetzt-anmelden-close{    
                        top: 30px;
                        right: 50px;
                        cursor: pointer;
                        position: absolute;
                        box-shadow: none;
                        border: none;
                        border-radius: 0;
                        padding: 0;
                        margin: 0;
                        color:#f0f0f0;
                        background:none;
                        font-weight: 300;
                        font-size: 2.5em;
                    }
                    .jetzt-anmelden-close:hover{
                        color: #3dd7ac;
                    }
                    .jetzt-anmelden-left h1{
                        font-size:4.3em;
                        line-height: 1.08;
                        font-style: normal;
                        font-weight: 300;
                        margin-bottom: 50px;
                        color: #fff;
                        letter-spacing: 4px;
                    }
                    .jetzt-anmelden-left p{
                        font-size:1.1em;
                        line-height: 1.08;
                        font-weight: 300;
                        letter-spacing: 2px;
                        margin-bottom: 14px;
                        color: #78808a;
                        line-height: 24px;
                    }

                    @media screen and (max-width: 768px) {
                        .jetzt-anmelden-left h1{
                            padding-top: 100px;
                            font-size:3.3em;
                        }
                        .jetzt-anmelden-container{
                            padding: 5% 10%;
                            display: block;
                        }
                        .hbspt-form{
                            width: 500px;
                        }
                    }

                    @media screen and (max-width: 568px) {
                        .jetzt-anmelden-left h1{
                            font-size:2.3em;
                        }
                        .jetzt-anmelden-container{
                            padding: 5% 10%;
                            display: block;
                        }
                        .hbspt-form{
                            width: 400px;
                        }
                    }
                    @media screen and (max-width: 400px) {
                        .jetzt-anmelden-container{
                            padding: 5% 5%;
                            display: block;
                        }
                        .hbspt-form{
                            width: 350px;
                        }
                    }
                    @media screen and (max-width: 350px) {
                        .jetzt-anmelden-container{
                            padding: 5% 5%;
                            display: block;
                        }
                        .hbspt-form{
                            width: 300px;
                        }
                    }
                    `}
            </style> */}

        </div>);
}

export default JetztAnmdelden;


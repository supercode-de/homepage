import React from 'react';
//import './jetzt-anmelden.css'
import HubspotForm from 'react-hubspot-form'

const JetztAnmdelden = (props) => {
    return (
        <div id="jetzt-anmelden" className={props.isHidden ? "isHidden" : "isNotHidden"}>
            <button className="jetzt-anmelden-close" onClick={props.toggleJetztAnmelden}>&#10539;</button>

            <div className="jetzt-anmelden-container">
                <div className="jetzt-anmelden-left">
                    <h1>Hi, wie</h1>
                    <h1>können wir</h1>
                    <h1>dir <span>helfen?</span></h1>
                    <p>An diesen Zeiten erreichst du uns am besten an folgenden Tagen und Zeiten</p>
                    <p>Montag - Freitag</p>
                    <p>09:00 - 17:00 Uhr</p>
                    <p>Unser Campus befindet sich im super7000 Coworking Space - der Mutter aller Coworking Spaces. Die genaue Adresse lautet</p>
                    <p>Ratherstr. 25</p>
                    <p>40476 Düsseldorf</p>
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
            <style jsx>{`
                    #jetzt-anmelden{
                        position: fixed;
                        padding: 20px;
                        background: #03000F;
                        top: 0;
                        bottom: 0;
                        color:#3DD7AC;
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
                        padding: 150px 10%;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
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
                        font-style: normal;
                        font-weight: 800;
                        margin:0;
                        line-height:1em;
                        letter-spacing:-1.5px
                    }
                    .jetzt-anmelden-left p{
                        font-size:1.1em;
                        line-height: 1.08;
                        font-weight: 400;
                        letter-spacing: 2px;
                        margin-bottom: 14px;
                        line-height: 24px;
                    }
                    span {
                        color: transparent;
                        letter-spacing: 3px;
                        -webkit-text-stroke-width: 1.5px;
                        -webkit-text-stroke-color: #3DD7AC;
                    }
                    @media screen and (max-width: 768px) {
                        .jetzt-anmelden-left h1{
                            
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
                            padding: 10% 10%;
                            display: block;
                        }
                        .hbspt-form{
                            width: 400px;
                        }
                    }
                    @media screen and (max-width: 400px) {
                        .jetzt-anmelden-container{
                            padding:10% 5%;
                            display: block;
                        }
                        .hbspt-form{
                            width: 350px;
                        }
                    }
                    @media screen and (max-width: 350px) {
                        .jetzt-anmelden-container{
                            padding: 12% 5%;
                            display: block;
                        }
                        .hbspt-form{
                            width: 300px;
                        }
                    }
                    `}
            </style>

        </div>);
}

export default JetztAnmdelden;


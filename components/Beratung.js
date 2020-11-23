import React, { useState } from "react";
//import './jetzt-anmelden.css'

import HubspotForm from "react-hubspot-form";

const Beratung = (props) => {
  const [isHidden, toggleJetztAnmelden] = useState(true);
  return (
    <div id="beratung">
      <button className="button" onClick={() => toggleJetztAnmelden(!isHidden)}>
        Beratung
      </button>

      <div
        id="jetzt-anmelden"
        className={isHidden ? "isHidden" : "isNotHidden"}
      >
        <button
          className="jetzt-anmelden-close"
          onClick={() => toggleJetztAnmelden(!isHidden)}
        >
          &#10539;
        </button>

        <div className="jetzt-anmelden-container">
          <h1>
            Hi, wie können wir dir <span>helfen?</span>
          </h1>
          <div className="jetzt-anmelden-right">
            <HubspotForm
              portalId="5807040"
              formId="4fb004bc-0372-4848-b17d-923a1b059392"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
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
                        grid-template-columns:  1fr;
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
                    h1{
                        font-size:4.3em;
                        font-style: normal;
                        font-weight: 800;
                        margin:0;
                        line-height:1em;
                        letter-spacing:-1.5px
                    }
                    span {
                        color: transparent;
                        letter-spacing: 3px;
                        -webkit-text-stroke-width: 1.5px;
                        -webkit-text-stroke-color: #3DD7AC;
                    }
     
                    button {
                      margin: 2em 1em;
                      font-family: "Fira Sans", sans-serif;
                      font-style: normal;
            
                      font-size: 0.7em;
                      font-weight: 600;
                      line-height: 1.5em;
                      text-align: center;
                      // letter-spacing: 2px;
                      letter-spacing: 3.5px;
                      text-transform: uppercase;
                      padding: 10px 50px;
            
                      background: transparent;
                      border: 1px solid #3dd7ac;
                      text-decoration: none;
                      color: #fff;
                      justify-self: center;
                      display: inline-block;
                      min-width: 100px;
                    }
                    button:hover {
                      color: #5d3ede;
                      background: #3dd7ac;
                    }
     
                    // .button {
                    //     background:none;
                    //     display: inline-block;
                    //     color: #fff;
                    //     text-decoration: none;
                    //     text-transform: uppercase;
                    //     padding: 5px 35px;
                    //     border: 1px solid #3dd7ac;
                    //     font-size: 0.7em;
                    //     font-weight: 600;
                    //     line-height: 1.5em;
                    //     margin: 10px;
                    //     letter-spacing: 2px;
                    //     transition: top 0.5s linear, box-shadow 0.5s linear, left 0.5s linear;
                    //     box-shadow: 0 0 0 0 transparent;
                    //     position: relative;
                    //     top: 0;
                    //     left: 0;
                    //     text-align: center;
                    //     min-width: 100px;
                    // }
                    // .button:hover {
                    //     // margin: 10px 5px 15px 10px;
                    //     // margin: 10px 10px 15px 15px;
                    //     box-shadow: -5px 5px 0 0 #fff;
                    //     top: -5px;
                    //     left: 5px;
                    // }
                    @media screen and (max-width: 768px) {
                        
                        .jetzt-anmelden-container{
                            padding: 5% 10%;
                            display: block;
                        }
                        .hbspt-form{
                            width: 500px;
                        }
                    }

                    @media screen and (max-width: 568px) {
                        
                        .jetzt-anmelden-container{
                            padding: 10% 10%;
                            display: block;
                        }
                        .hbspt-form{
                            width: 400px;
                        }
                    }
                    @media (max-width: 468px) {
                        .button {
                          font-size: 1.2em;
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
    </div>
  );
};

export default Beratung;

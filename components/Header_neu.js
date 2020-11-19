import React, { useState, useEffect } from "react";
import Arrow from "./small/Arrow";
import Typeform from "./TypeForm_neu";


const JetztBewerben = (props) => {
    return (

        <div id="unser-campus">

            <span className="aside" > 📞 +49 211 7817 233-0 </span>

            <div className="twocolumn" >
                <div className="onecolumn" >
                    <img src="/img/_DSC2765_LowRes.png"
                        alt="" />
                    <h1><span className="super"> Programmieren
                    </span><br /> lernen war noch <span className="circle">nie</span> <br /> <span className="super2"> <span className="after-span">digitaler.</span></span>
                    </h1>
                </div>
                <img src="/img/_DSC2652_LowRes 12.png"
                    alt="" />

            </div>

            <img src="/img/_DSC8255_LowRes.png"
                alt="" />
             <div>
                <Typeform />
            </div>
            <div className="arrow">
                <a href="#"><p>Erfahre Mehr</p></a>
                <Arrow />

            </div>
            <style jsx > {`
           img+div{
               display:none;
           }
            .aside {
                position: absolute;
                transform: rotate(-90deg);
                transform-origin: left;
                color:#fff;
                font-weight:300;
                left: 3%;
                top: 60%;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 3px;
                text-transform: uppercase;
                color: #FFFFFF;
              }
        #unser-campus {
          padding:100px 0 100px 10%;  
          font-family:"Neue_Machina_Regular_400";
          position: relative;
          background-color: #5D3EDE;
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
          background-size: ${props.width}px ${props.width}px;
        }
        .arrow {
            position:absolute;
            bottom:0; 
            left:50%; 
            transform: translate(-50%, 0%); 
        }
        .arrow p{
            margin: 0 auto;
            text-align:center;
        }

        .arrow a {
            text-decoration:none;
        }

        .arrow a:hover {
            text-decoration:underline;
            color: #fff;
        }

         .twocolumn{
            display:grid;
            grid-template-columns:60% 40%;
            padding-bottom:40px;
            margin-bottom:100px
        }

        .twocolumn>img{
            width:100%;
            // align-self:center
        }
         .onecolumn{
            display:grid;
            grid-template-columns:1fr;    
        }
        .onecolumn img:first-of-type {
            margin-left:8vw;
            margin-top:-3vh;
            width:42%;
        }
        .twocolumn img:nth-child(2){
            width:90%;
            margin-top: 5.5vh;
        }
        .twocolumn+img{
            position:absolute;
            z-index:999;
            margin-top: -19vh;
            margin-left: -3.5vw;
        }


         h1{
            font-family:"Neue_Machina_Regular_400";
            font-size:4em;
            color:#fff;
            line-height:60px;
            margin-top:4.5vh;
        }
         h1 span.super, h1 span.super2{
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #fff;
            font-weight:300;
        }

         .super2, .after-span, .cirle{
            position:relative;
        }
         h1 span.super2::after{
            position:absolute;
            background:url('/img/vector41.svg') center/cover no-repeat;
            height:2px;
            width:70%;
            right:0;
            bottom:4px;
            content:'';
            display:block;
        }
         h1 span.super2::before{
            position:absolute;
            background:url('/img/vector41.svg') center/cover no-repeat;
            height:2px;
            width:50%;
            right:0;
            bottom:0px;
            content:'';
            display:block;
            transform:rotate(0.5deg)
        }

        h1 span.circle {
            background:url('/img/Vector43.svg') center/contain no-repeat;
            padding: 10px;
        }
         
        p{
            color:#fff;
            font-style: normal;
            font-weight: normal;
            font-size: 1em;
            line-height: 30px;
        }
        button{
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding:10px 30px;
            background:transparent;
            border:1px solid #fff;
            color:#fff;
            justify-self:center
        }
        button:hover{
            color:#5d3ede;
            background:#fff;
        }
      
        @media (max-width: 1040px) {
            h1{
                font-size:2em;
                line-height:40px
            }
            .twocolumn{
                margin-bottom:40px   
            }
            .twocolumn>img{
                width:60%;
                align-self:center;
                justify-self:center
            }
            .twocolumn+img{
                width:25%;
                margin-top: -5vh;
            }
        }
        @media (max-width: 768px) {     
            #unser-campus{
                padding:100px 6%
            }  
            h1{
                font-size:3em;
                align-self: center;
                justify-self: center;
            }
            p{
                font-size:2em;
                margin-bottom:50px
            }
            .twocolumn+img{
                display:none;
            }
            .onecolumn img:first-of-type {
                display:none;
            }
            .arrow {
                display:none;
            }
            img+div{
                display:block;
                text-align:center;
                margin-top:-6vh;
                margin-bottom:-6vh;
            }
        }
        @media (max-width: 468px) { 
            #unser-campus{
                padding:85px 30px
            }       
            h1{
                font-size:3em;
                line-height: 29px;
            }
            p{
                font-size:1.3em
            }
            .twocolumn{
                grid-template-columns:1fr;
                margin-bottom:10px;
            }
            .twocolumn>img{
                width:100%;
                align-self:center;
                justify-self:center
            }
            .twocolumn+img{
                display:none;
            }
            .onecolumn img:first-of-type {
                display:none;
            }
            img+div{
                display:block;
                text-align:center;
            }
            .arrow{
                display:none;
            }
        }
    ` } </style>
        </div >
    );
};

export default JetztBewerben;
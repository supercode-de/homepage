import React from 'react';
import Link from 'next/link'
const Banner = () => {
    return (
        <section id="banner">
            <h3>Unsere Anmeldephase läuft.<a href="/">erfahre mehr</a> </h3>
            <style jsx>{`
            #banner{
                background:#3DD7AC;
                text-align:center;
                padding:10px 0;
            }
            #banner h3{
                margin:0;
                font-family: 'Fira Mono', monospace;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #5D3EDE;
                font-weight:500;
            }
            #banner h3 a{
                color: #5D3EDE;
            }
            `}
            </style>
        </section>);
}

export default Banner;
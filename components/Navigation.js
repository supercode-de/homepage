import Link from 'next/link'
import React, { useState } from 'react';



const Navigation = () => {
    const [show, setShow] = useState(true)
    return (
        <nav id="navigation" style={{
            width: show ? "100%" : "5%"
        }}>
            <img src="/menu-button.svg" alt="Menu-Button" onClick={() => setShow(!show)} />
            <div className={`main-navigation ${show ? "show" : "hide"}`}>
                <Link href="/"><a className="logo">super(code)</a></Link>
                <div>
                    <ul>
                        <li>
                            <Link href="/kurse"><a>Kurse</a></Link>
                        </li>
                        <li>
                            <Link href="/workshops"><a>Workshops</a></Link>
                        </li>
                        <li>
                            <Link href="/finfanzierung"><a>finfanzierung</a></Link>
                        </li>
                        <li>
                            <Link href="/team"><a>team</a></Link>
                        </li>
                        <li>
                            <Link href="/outcomes"><a>outcomes</a></Link>
                        </li>
                        <li>
                            <Link href="/faq"><a>faq</a></Link>
                        </li>
                    </ul>
                </div>

            </div>

            <style jsx>{`
         ul {
            list-style-type: none;
            display: flex;
            text-transform: uppercase;
        }
        li {
            padding-left: 1em;
        }
        #navigation {
            right: 0;
            position: fixed;
            top: 5vh;
            display: flex;
            z-index:500000000;
            width: 100%;
            height: 5vmax;
            transition: width 1s;
        }
        a {
            color: #fff;
            text-decoration: none;
            font-size: 1.5em;
        }
        a:hover {
            text-decoration: underline;
            color: #eee;
        }
        .main-navigation {
            background: rgb(0 0 0 / 50%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 92%;
            transition: background 1s, right 1s;
            position: relative;
            padding: 0 2em;
        }
        .main-navigation.show {
            right: 0;
        }
        .main-navigation.hide {
            right: -100vw;
        }
        img {
            position: absolute;
            right: 2.5vw;
            height: 5vmax
        }
        @media (max-width: 1200px) {
            .main-navigation {
                height: fit-content;
                top: 7vh;
                width: 70%;
                flex-direction: column;
                justify-content: flex-start;
            }
            .main-navigation.show {
                right: -30%;
            }
            ul {
                display: block;
                padding: 0;
                margin: 0;
                text-align: center;
            }
            a {
                display: block;
            }
            li {
                margin: 5vh 0;
                padding: 0;
            }
            .logo {
                margin-top: 5vh;
            }
        }
        `}</style>
        </nav >
    );
}

export default Navigation;
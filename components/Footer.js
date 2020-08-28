import Link from 'next/link'

const Footer = () => {
    return (
        <footer id="footer">
            {/* <div className="footer-grid">
                <div className="link-container">
                    <Link href="/"><a className="line-bottom">Sitemap</a></Link>
                    <Link href="/"><a>Customer Jurney &amp; Experience (CX)</a></Link>
                    <Link href="/"><a>Personas</a></Link>
                    <Link href="/"><a>Segmentierung</a></Link>
                </div>
                <div className="link-container">
                    <Link href="/"><a className="line-bottom">Kurse</a></Link>
                    <Link href="/"><a>Markenwert</a></Link>
                    <Link href="/"><a>Markenbekanntheit</a></Link>
                    <Link href="/"><a>Kundenzufriedenheit</a></Link>
                    <Link href="/"><a>Preis</a></Link>
                </div>
                <div className="link-container">
                    <Link href="/"><a className="line-bottom">Legal</a></Link>
                    <Link href="/"><a>Markenanalyse</a></Link>
                    <Link href="/"><a>Trend Radar</a></Link>
                    <Link href="/"><a>Konzepttest</a></Link>
                    <Link href="/"><a>Wettbewerb</a></Link>
                </div>
                <div className="link-container">
                    <Link href="/"><a className="line-bottom">Blog</a></Link>
                    <Link href="/"><a>Logo Test</a></Link>
                    <Link href="/"><a>Verpackungstest</a></Link>
                    <Link href="/"><a>Designtest</a></Link>
                    <Link href="/"><a>Eye Tracking</a></Link>
                </div>
                <div className="link-container">
                    <Link href="/"><a className="line-bottom">Panels</a></Link>
                    <Link href="/"><a>Konsumenten (B2C)</a></Link>
                    <Link href="/"><a>Business (B2B)</a></Link>
                    <Link href="/"><a>Rekrutierung</a></Link>
                    <Link href="/"><a>Pflege</a></Link>
                </div>
            </div> */}
            <div className="links">
                <Link href="/impressum"><a>Impressum</a></Link>
                <Link href="/dsgvo"><a>DSGVO</a></Link>
            </div>
            <div className="copyright">
                <p className="white">super(code)</p>
                <p>&copy; 2002-2020</p>
            </div>
            <style jsx>{`
            #footer {
                background: #03000F;
                color: #3DD7AC;
                font-weight: 200;
                padding-top: .8em;
            }
            .links {
                display: flex;
                justify-content: space-around;
            }
            .link-container {
                display: flex;
                flex-direction: column;
                align-items: start;
            }
            a {
                text-decoration: none;
                display: block;
                padding: .5em 0;
                color: #3DD7AC;
            }
            a:visited {
                color: #3DD7AC;
            }

            a:hover {
                text-decoration: underline;
                color: #3dd7ac;
            }
            a:active {
                color: #5d3ede;
            }
            .line-bottom {
                padding-bottom: 5px;
                border-bottom: 1px solid #3DD7AC;
                margin-bottom: 10px;
            }
            .footer-grid {
                width: 80%;
                margin: 0 auto;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
            }
            .copyright {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 95%;
                margin: 0 auto;
            }
            .white {
                color: #fff;
                font-weight: bold;
                font-size: 1.2em
            }
            @media (max-width: 768px) {
                .footer-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            @media (max-width: 480px) {
                .footer-grid {
                    display: block;
                }
            }

            `}
            </style>
        </footer>
    );
}

export default Footer;
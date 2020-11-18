import Link from "next/link";

const FooterSitemap = () => {
  return (
    <div id="sitemap">
      <div className="sitemap-grid">
        <div className="link-container">
          <Link href="/">
            <a className="line-bottom">Sitemap</a>
          </Link>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Kurse</a>
          </Link>
          <Link href="/">
            <a>Workshops</a>
          </Link>
          <Link href="/">
            <a>Finanzierung</a>
          </Link>
        </div>
        <div className="link-container">
          <Link href="/">
            <a className="line-bottom">Kurse</a>
          </Link>
          <Link href="/">
            <a>Markenwert</a>
          </Link>
          <Link href="/">
            <a>Markenbekanntheit</a>
          </Link>
          <Link href="/">
            <a>Kundenzufriedenheit</a>
          </Link>
          <Link href="/">
            <a>Preis</a>
          </Link>
        </div>
        <div className="link-container">
          <Link href="/">
            <a className="line-bottom">Legal</a>
          </Link>
          <Link href="/">
            <a>Markenanalyse</a>
          </Link>
          <Link href="/">
            <a>Trend Radar</a>
          </Link>
          <Link href="/">
            <a>Konzepttest</a>
          </Link>
          <Link href="/">
            <a>Wettbewerb</a>
          </Link>
        </div>
        <div className="link-container">
          <Link href="/">
            <a className="line-bottom">Blog</a>
          </Link>
          <Link href="/">
            <a>Logo Test</a>
          </Link>
          <Link href="/">
            <a>Verpackungstest</a>
          </Link>
          <Link href="/">
            <a>Designtest</a>
          </Link>
          <Link href="/">
            <a>Eye Tracking</a>
          </Link>
        </div>
        <div className="link-container">
          <Link href="/">
            <a className="line-bottom">Panels</a>
          </Link>
          <Link href="/">
            <a>Konsumenten (B2C)</a>
          </Link>
          <Link href="/">
            <a>Business (B2B)</a>
          </Link>
          <Link href="/">
            <a>Rekrutierung</a>
          </Link>
          <Link href="/">
            <a>Pflege</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          #sitemap {
            background: #fff;
            color: #3dd7ac;
            font-size: 1.1em;
            padding: 3em;
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
            padding: 1em 0;
            color: #3dd7ac;
          }
          a:visited {
            color: #3dd7ac;
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
            border-bottom: 1px solid #3dd7ac;
            margin-bottom: 10px;
          }
          .sitemap-grid {
            width: 80%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
          }
          @media (max-width: 768px) {
            .sitemap-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 480px) {
            .sitemap-grid {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FooterSitemap;

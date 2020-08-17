// import React from 'react';  brauchen wir nicht oder?
import Link from "next/link";
const Banner = () => {
  return (
    <section id="banner">
      <h3>
        Unsere Anmeldephase läuft. <Link href="/#zukunft">erfahre mehr</Link>
      </h3>
      <style jsx>
        {`
          #banner {
            background: #3dd7ac;
            text-align: center;
            padding: 10px 0;
          }
          #banner h3 {
            margin: 0;
            font-family: "Fira Mono", monospace;
            font-style: normal;
            font-weight: bold;
            line-height: 19px;
            text-transform: uppercase;
            color: #5d3ede;
            font-weight: 500;
            font-size: 0.8em;
            letter-spacing: 1.3px;
          }
          #banner h3 a {
            color: #5d3ede;
          }
          @media (max-width: 468px) {
            #banner h3 {
              font-size: 1.1em;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Banner;

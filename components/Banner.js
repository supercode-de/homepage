// import React from 'react';  brauchen wir nicht oder?
import Link from "next/link";
const Banner = () => {
  return (
    <section id="banner">
      <h3>
        Unsere Anmeldephase läuft. <Link href="/#zukunft">erfahre mehr</Link>
      </h3>
      <style jsx>{`
          #banner {
            background: var(--super-green);
            text-align: center;
            padding: 15px 0;
          }
          #banner h3 {
            text-transform: uppercase;
            color: var(--super-lila);
            font-size: 1em;
            letter-spacing: 1.3px;
          }
          #banner h3 a {
            color: var(--super-lila);
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

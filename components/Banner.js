import Link from "next/link";
const Banner = () => {
  return (
    <section id="banner">
      <h3>
        Lust auf kostenlose Workshops?     
        <Link href="https://www.eventbrite.de/o/supercode-20262218583" passHref><a target="_blank">Dann hier entlang</a></Link>
      </h3>
      <style jsx>{`
          #banner {
            background: var(--super-green);
            text-align: center;
            padding: 1.5vh 5vw;
          }
          #banner h3 {
            text-transform: uppercase;
            color: var(--super-lila);
            font-size: clamp(0.75rem, 0.7rem + 0.25vw, 1rem);
            letter-spacing: 1.3px;
          }
          #banner h3 a {
            color: var(--super-lila);
            margin-left: 5px;
          }
          #erfahre-mehr {
            color: var(--super-lila);
          }

        `}
      </style>
    </section>
  );
};

export default Banner;

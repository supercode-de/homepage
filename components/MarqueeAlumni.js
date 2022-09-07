import Marquee from "react-fast-marquee";
import arbeitgeberLogos from "../components/data/marqueeArbeitgeberData"

const MarqueeAlumni = () => {
    return (
        <section className="marquee__section">
            <h3>Unsere Alumni arbeiten bei</h3>
            <Marquee speed={50}>
                {arbeitgeberLogos.map((logo, index) => (
                    <img src={logo.image} alt={logo.name} className="marqueeLogos" key={index} />
                ))}
            </Marquee>
            <style jsx>{`
                .marquee__section {
                    margin-top: 5rem;
                    margin-bottom: 5rem;
                }
                h3 {
                    text-align: center;
                    font-size: 30px;
                    margin-bottom: 50px;
                }
                img {
                    height: 70px;
                    margin-right: 80px;
                }
            `}</style>
        </section>

    );
}

export default MarqueeAlumni;
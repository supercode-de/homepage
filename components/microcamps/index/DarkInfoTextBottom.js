const DarkInfoTextBottom = () => {
    return (
        <section className="darkInfoTextBottom">
            <div className="wrap">
                <h2>
                    IT-Weiterbildung –
                    <span className="headlines_stroke">
                        <span className="lines">zertifiziert, modern </span>
                    </span>
                    <span className="circle">
                        <span className="headlines_stroke">& praxisnah.</span>
                    </span>
                </h2>
                <h2>Stelle dir deinen Kurs einfach selbst zusammen!</h2>
            </div>

            <style jsx>{`
                .darkInfoTextBottom {
                    background-color: var(--clr-super-blue);
                    color: var(--clr-super-white);
                }
                .darkInfoTextBottom .wrap {
                    padding: 5% 0 5% 5%;
                }
                .darkInfoTextBottom h2 {
                    line-height: 131%;
                }
                .darkInfoTextBottom h2 .circle {
                    background: url("/img/microcamps/weiterbilden_circle.svg") center center / contain no-repeat;
                    padding: var(--fs-300);
                }
                .darkInfoTextBottom h2 .lines {
                    background: url("/img/microcamps/lines_big.svg") bottom right / 90% no-repeat;
                    padding: var(--fs-100);
                }

                @media only screen and (max-width: 992px) {
                    .darkInfoTextBottom .wrap {
                        padding: 10%;
                    }
                }
                @media (max-width: 425px) {
                    .darkInfoTextBottom h2 .circle,
                    .darkInfoTextBottom h2 .lines {
                        background: none;
                        padding: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default DarkInfoTextBottom;

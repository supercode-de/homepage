const LastBlueSection = () => {
    return (
        <section className="lastBlueSection">
            <div className="wrap">
                <div className="lastBlueSection__text">
                    <h2>BALD</h2>
                    <h2>
                        GEHT’S LOS!
                        <span className="headlines_stroke">
                            {" "}
                            SUPERCODE
                            <span className="lines"> SUPERYOU </span>
                        </span>
                    </h2>
                </div>
                <a className="btn" href="#allCourses">
                    Kursübersicht
                </a>
            </div>

            <style jsx>{`
                .lastBlueSection {
                    background-color: var(--clr-super-lila);
                    color: var(--clr-super-white);
                    overflow: hidden;
                }
                .lastBlueSection .wrap {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-end;
                }
                .lastBlueSection__text {
                    width: 60%;
                    margin: 0 5% 0 0;
                }
                .lastBlueSection__text h2 {
                    font-size: var(--fs-999);
                    line-height: 106.5%;
                }
                .lastBlueSection__text h2 .lines {
                    background: url("/img/microcamps/lines_big.svg") right bottom / 70% no-repeat;
                    padding: 0 var(--fs-800) 0 0;
                }
                .lastBlueSection a {
                    font-size: var(--fs-600);
                    height: fit-content;
                    background-color: var(--clr-super-black);
                    color: var(--clr-super-green);
                }
                .lastBlueSection .wrap .btn {
                    height: 6.25rem;
                    font-size: var(--fs-400);
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                }

                @media only screen and (max-width: 992px) {
                    .lastBlueSection .wrap {
                        justify-content: fley-end;
                    }

                    .lastBlueSection__text {
                        width: 100%;
                    }

                    .lastBlueSection a {
                        margin: 5% 0 0 0 ;
                    }
                }
            `}</style>
        </section>
    );
};

export default LastBlueSection;

const DarkInfoTextTop = () => {
    return (
        <section className="darkInfoTextTop">
            <div className="wrap">
                <h2>
                    Die beste, flexibelste und schnellste{" "}
                    Art sich neben dem Job weiterzubilden – 
                    <span className="headlines_stroke"><span className="circle">unsere {window.innerWidth < 400 ? <br /> : null}  MicroCamps</span></span>
                </h2>
            </div>
            <style jsx>{`
                .darkInfoTextTop {
                    background-color: var(--clr-super-blue);
                    color: var(--clr-super-white);
                }
                .darkInfoTextTop .wrap {
                    padding: 5% 5% 5% 5%;
                }
                .darkInfoTextTop h2 .circle {
                    background: url(/img/microcamps/weiterbilden_circle.svg) 100% / contain no-repeat;
                    padding: var(--fs-200);
                }
                .darkInfoTextTop h2:first-of-type::before {
                    content: url(/img/microcamps/lines_left.svg);
                    margin: 0 var(--fs-300) 0 0;
                }
                .darkInfoTextTop h2:first-of-type::after {
                    content: url(/img/microcamps/lines_right.svg);
                    margin: 0 0 0 var(--fs-300);
                }

                @media only screen and (max-width: 992px) {
                    .darkInfoTextTop .wrap {
                        padding: 10%;
                    }
                    .darkInfoTextTop h2 .circle {
                        padding: var(--fs-100) 0;
                    }
                    .darkInfoTextTop h2:first-of-type::before,
                    .darkInfoTextTop h2:first-of-type::after {
                        content: "";
                        margin: 0;
                    }
                }
                @media (max-width: 425px) {
                    .darkInfoTextTop h2 .circle {
                        background: none;
                        padding: 0;
                    }
                }
            `}

            </style>
        </section>
    );
};

export default DarkInfoTextTop;

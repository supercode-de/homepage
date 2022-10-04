const HeaderSection = () => {
    return (
        <section className="headerSection">
            <div className="wrap">
                <article>
                    <h2>
                        <span className="headlines_stroke">Lerne die</span>
                    </h2>
                    <h2>
                        <span className="circle">Skills</span>der Zukunft
                    </h2>
                    <h2>
                        mit unseren
                    </h2>
                    <h2>
                        <span className="headlines_stroke">live MicroCamps</span>
                    </h2>
                    <p>
                        Unsere live & online UX/UI & Coding MicroCamps sind so aufgebaut, dass du dich ganz flexibel neben deinem Job weiterbilden kannst – zertifiziert, hochwertig und mit live Trainer*innen!
                    </p>
                    <a className="btn" href="#allCourses">
                        zu den Kursen
                    </a>
                </article>
                <img src="img/microcamps/people_top_right.png" alt="Supercode People" />
            </div>
            <style jsx>{`
                .headerSection {
                    background-color: var(--clr-super-lila);
                    color: var(--clr-super-white);
                }
                #supercodeLogo2022 {
                    position: absolute;
                    width: 10%;
                    top: 0;
                }
                .headerSection .wrap {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8% 0 0 5%;
                }
                .headerSection .wrap article h2 .circle {
                    background: url(/img/microcamps/live_circle.svg) center center / contain no-repeat;
                    padding: var(--fs-100);
                }
                .headerSection .wrap article p {
                    margin: 3% 30% 5% 0;
                }
                .headerSection .wrap article a {
                    font-size: var(--fs-500);
                    background-color: var(--clr-super-green);
                    color: var(--clr-super-lila);
                }
                .headerSection .wrap img {
                    width: 40%;
                    transform: translateY(10%);
                }

                @media only screen and (max-width: 992px) {
                    .headerSection .wrap {
                        flex-wrap: wrap;
                    }
                    .headerSection .wrap article {
                        order: 1;
                        margin: 0 0 0 10%;
                        z-index: 2;
                        transform: translateY(-30%);    
                    }
                    .headerSection .wrap img {
                        width: 90%;
                        margin: 0 0 0 10%;
                        transform: translateY(0%);  
                    }
                }

                @media only screen and (max-width: 768px) {
                    .headerSection .wrap article p {
                        display: none;
                    }
                    .headerSection .wrap img {
                        transform: translateY(10%);
                    }
                    .btn {
                        margin-top: 30px;
                    }
                }
                
            `}

            </style>
        </section>
    );
};

export default HeaderSection;

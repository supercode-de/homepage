// import { Link } from "react-router-dom";
import Link from 'next/link';

const OurStorySection = () => {
    return (
        <section className="ourStorySection">
            <div className="wrap" id="ourStory">
                <div className="ourStorySection__introText">
                    <p>Unsere Geschichte</p>
                    <h3>
                        <span className="headlines_stroke">
                            Learn-by-doing mit
                        </span>
                    </h3>
                    <h3>unseren MicroCamps</h3>
                    <p>
                        Als erster deutschsprachiger Anbieter bieten wir dir ein revolutionäres Bildungskonzept, in dem ganz allein DU bestimmst, welche Inhalte du lernen willst.
                    </p>
                    <p>
                        Und das Ganze in spannenden online live Kurse, mit echten Menschen und guten Trainer*innen.
                    </p>
                </div>
                <div className="ourStorySection__mainWrap">
                    <div className="leftImageWrap">
                        <img
                            src="img/microcamps/sergio01.png"
                            alt="Sergio, Gründer von MicroCamps"
                        />
                    </div>
                    <div className="ourStorySection__mainWrap__mainContent">
                        <div className="text">
                            <div className="headline">
                                <h4>Sergio Cardeal</h4>
                                <p>Gründer von MicroCamps</p>
                            </div>
                            <p>
                                "Seien wir mal ehrlich: Sich neben dem Beruf weiterzubilden, ist häufig mit viel Aufwand und hohen Kosten verbunden. Oft sind die Bildungsangebote inhaltlich nicht passend, zu zeitaufwändig oder schlicht und einfach nicht fesselnd genug: Online-Tutorials werden angefangen, aber nicht zu Ende gemacht, Bootcamps sind vielleicht zu teuer und interne Fortbildungen beim Arbeitgeber gehen in eine ganz andere Richtung.
                            </p>
                            <p>
                                Und deshalb wurden die MicroCamps geboren. Hier bekommst du das, was du wirklich lernen möchtest – flexibel, günstig und neben dem Beruf. Nette Menschen in kleinen Lerngruppen und kompetente Trainer*innen begleiten dich wochenweise. Und du stellst dir deinen Kurs einfach individuell zusammen.
                            </p>
                            <p>
                                Probier es aus, wir freuen uns auf dich!"
                            </p>
                        </div>
                        <div className="image">
                            <Link href="/microcamps/unsere-story">
                                <a>unsere Story</a>
                            </Link>
                            <img
                                src="img/microcamps/sergio02.png"
                                alt="Sergio, Gründer von SuperCode"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .ourStorySection {
                    color: var(--clr-super-black);
                }
                .ourStorySection__introText {
                    margin: 0 0 5% 0;
                }
                .ourStorySection__introText h3 {
                    color: var(--clr-super-lila);
                }
                .ourStorySection__introText h3 .headlines_stroke {
                    -webkit-text-stroke: 0.025em var(--clr-super-lila);
                }
                .ourStorySection__introText p {
                    margin: 1% 55% 0 0;
                }
                .ourStorySection__mainWrap {
                    display: flex;
                    flex-wrap: wrap;
                }
                .ourStorySection__mainWrap .leftImageWrap {
                    width: 25%;
                }
                .ourStorySection__mainWrap .leftImageWrap img {
                    width: 100%;
                    border-radius: 50px;
                }
                .ourStorySection__mainWrap__mainContent {
                    width: 65%;
                    margin: 0 0 0 10%;
                }
                .ourStorySection__mainWrap__mainContent .text {
                    margin: 0 0 10% 0;
                }
                .ourStorySection__mainWrap__mainContent .text .headline {
                    color: var(--clr-super-lila);
                }
                .ourStorySection__mainWrap__mainContent .text .headline p {
                    font-size: var(--fs-500);
                }
                .ourStorySection__mainWrap__mainContent .text p {
                    margin: 0 20% 2% 0;
                }
                .ourStorySection__mainWrap__mainContent .image {
                    position: relative;
                }
                .ourStorySection__mainWrap__mainContent .image::before {
                    position: absolute;
                    bottom: -15%;
                    left: 15%;
                    background: url(/img/microcamps/lines_bottom.svg);
                    background-size: 50%;
                    background-repeat: no-repeat;
                    width: 10%;
                    aspect-ratio: 1;
                    content: "";
                }
                .ourStorySection__mainWrap__mainContent .image::after {
                    position: absolute;
                    background: url(/img/microcamps/lines_top.svg);
                    background-size: 60%;
                    background-repeat: no-repeat;
                    width: 10%;
                    aspect-ratio: 1;
                    content: "";
                    top: -10%;
                    right: -8%;
                }
                .ourStorySection__mainWrap__mainContent .image a {
                    text-decoration: none;
                    position: absolute;
                    top: -10%;
                    left: 0;
                    font-size: var(--fs-600);
                    font-weight: 800;
                    padding: 4% 5%;
                    border-radius: 60px;
                    width: fit-content;
                    color: var(--clr-super-green);
                    background-color: var(--clr-super-black);
                    z-index: 1;
                }
                .ourStorySection__mainWrap__mainContent .image a:hover {
                    opacity: 0.8;
                }
                .ourStorySection__mainWrap__mainContent .image img {
                    display: inherit;
                    margin-left: auto;
                    width: 80%;
                    border-radius: 50px;
                }
                @media only screen and (max-width: 992px) {
                    .ourStorySection__introText p {
                        margin: 5% 10% 0 0;
                    }
                    .ourStorySection__mainWrap .leftImageWrap {
                        width: 100%;
                    }

                    .ourStorySection__mainWrap .leftImageWrap img {
                        width: 60%;
                    }

                    .ourStorySection__mainWrap__mainContent {
                        width: 100%;
                        margin: 5% 0 0 0;
                    }
                }
                @media (max-width: 425px) {
                    .ourStorySection__mainWrap__mainContent .text p {
                        margin: 0 0 2% 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default OurStorySection;

import HubspotNewsletterForm from '../HubspotNewsletterForm';

const NewsletterSection = () => {
    return (
        <section className="newsletterSection">
            <div className="wrap" id="newsletter">
                <p>UP TO DATE</p>
                <div className="newsletterSection__textAndInputArea">
                    <div className="newsletterSection__textAndInputArea__text">
                        <h3>Werde jetzt Teil des</h3>
                        <h3>
                            <span className="headlines_stroke">
                                Super(Code)-Kosmos
                            </span>{" "}
                            und sei{" "}
                            <span className="circle">
                                immer auf dem neusten
                            </span>{" "}
                            Stand! Mit unserem Newsletter bekommst du regelmäßig
                            die{" "}
                            <span className="headlines_stroke">
                                spannendesten News
                            </span>{" "}
                            sowie{" "}
                            <span className="headlines_stroke">
                                Eventankündigungen
                            </span>{" "}
                            direkt in dein Postfach!
                        </h3>
                    </div>
                    <div className="newsletterSection__textAndInputArea__input">
                        <HubspotNewsletterForm />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .newsletterSection {
                    background-color: var(--clr-super-lila);
                    color: var(--clr-super-white);
                }
                .newsletterSection p {
                    color: var(--clr-super-green);
                    font-size: var(--fs-900);
                    text-align-last: justify;
                }
                .newsletterSection__textAndInputArea {
                    display: flex;
                    align-items: flex-end;
                    margin: 10% 0 0 0;
                }
                .newsletterSection__textAndInputArea__text {
                    width: 70%;
                    margin: 0 5% 0 0;
                }
                .newsletterSection__textAndInputArea__text h3 {
                    line-height: 121%;
                }
                .newsletterSection__textAndInputArea__text .circle {
                    background: url("/img/microcamps/newsletter_circle.svg") center center / contain no-repeat;
                    padding: var(--fs-300);
                }
                .newsletterSection__textAndInputArea__input {
                    position: relative;
                    width: 30%;
                }
                .newsletterSection__textAndInputArea__input label {
                    position: absolute;
                    right: 3%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    color: var(--clr-super-green);
                }
                .newsletterSection__textAndInputArea__input label a {
                    text-decoration: none;
                }
                .newsletterSection__textAndInputArea__input input {
                    width: 100%;
                    border-radius: 50px;
                    border: 1px solid var(--clr-super-green);
                    background-color: transparent;
                    color: var(--clr-super-green);
                    padding: 3% 10% 3% 4%;
                }
                .newsletterSection__textAndInputArea__input input::placeholder {
                    color: var(--clr-super-green);
                }
                @media only screen and (max-width: 992px) {
                    .newsletterSection__textAndInputArea {
                        flex-wrap: wrap;
                    }
                    .newsletterSection__textAndInputArea__text {
                        width: 100%;
                        margin: 0;
                    }
                    .newsletterSection__textAndInputArea__input {
                        width: 100%;
                        margin: 5% 0 0 0 ;
                    }
                }
                @media only screen and (max-width: 576px) {
                    .newsletterSection .newsletterSection__textAndInputArea__text .circle {
                    background: none;
                    padding: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default NewsletterSection;

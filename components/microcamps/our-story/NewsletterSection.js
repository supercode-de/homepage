import HubspotNewsletterForm from '../HubspotForm/HubspotNewsletterForm';

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
        </section>
    );
};

export default NewsletterSection;

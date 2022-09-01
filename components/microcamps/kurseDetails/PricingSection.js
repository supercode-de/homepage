import { useState } from "react";

const PricingSection = () => {
    const [todayFilter, setTodayFilter] = useState("today");
    const handleChange = (event) => {
        setTodayFilter(event.target.value);
    };
    return (
        <section className="pricingSection" id="pricingSection">
            <div className="wrap">
                <article className="pricingSection__headline">
                    <p>Unsere Preise</p>
                    <h3>Einfache, transparente und flexible</h3>
                    <h3>Zahlungspläne</h3>
                    <p>
                        Im Gegensatz zu anderen Kursen, die ihre Preise entweder verstecken oder einfach viel zu hoch ansetzen, sind die Preise für unsere Microcamps völlig transparent und wir sind stolz darauf, zugänglich und für jedes Budget erschwinglich zu sein. Du entscheidest, ob du pro Woche, pro Monat oder direkt komplett zahlen möchtest. Und das Beste: Buche dir neue Kursmodule einfach dazu, wenn es bei dir passt.
                    </p>
                </article>
                <article className="pricingSection__pricingContent">
                    <div className="pricingSection__pricingContent__filter">
                        <input
                            className="hidden"
                            value="today"
                            checked={todayFilter === "today"}
                            onChange={handleChange}
                            type="radio"
                            name="filterPricing"
                            id="todayInput"
                        />
                        <label
                            className="inputLabel todayLabel"
                            htmlFor="todayInput"
                        >
                            <p>Zahle heute</p>
                        </label>
                        <input
                            className="hidden"
                            value="month"
                            checked={todayFilter === "month"}
                            onChange={handleChange}
                            type="radio"
                            name="filterPricing"
                            id="monthInput"
                        />
                        <label
                            className="inputLabel monthLabel"
                            htmlFor="monthInput"
                        >
                            <p>Zahle monatlich</p>
                        </label>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default PricingSection;

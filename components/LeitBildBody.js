

const LeitBildBody = (props) => {
    return (
        <div id="impressum-text">
            <div className="text-body">
                <div className="block">
                    <h3>Leitbild SuperCode GmbH & Co. KG</h3>
                    <p>
                        Die SuperCode GmbH & Co. KG ist ein Bildungsträger, entstanden aus einer Initiative, die sich zum Ziel gesetzt hat, Menschen mit Veränderungswunsch in den digitalen Arbeitsmarkt zu integrieren und sich auf die Qualifikation von Talenten für die Digitalbranche spezialisiert. Wir liefern jungen Talenten mit unseren Weiterbildungsmaßnahmen die technische Qualifizierung am deutschen Arbeitsmarkt, die sie benötigen. Berufliche Qualifizierung verstehen wir als Schlüssel zu einem erfolgreichen Berufsleben. Bei Migranten zieht die Integration in den Arbeitsmarkt die gesellschaftliche Eingliederung zwangsläufig mit sich. Wir streben dabei kontinuierlich verbesserte Ausbildungsstandards an, die Maßnahmen ermöglichen, welche ständig auf die häufig wechselnden Bedürfnisse des digitalen Jobmarkts reagieren.

                    </p>
                    <p>
                        Die SuperCode GmbH & Co. KG ist also ein Träger im Bildungsbereich und der privaten Arbeitsvermittlung im Bereich der Informationstechnik. Der Bildungsbereich erstreckt sich bisher auf den Bereich der Web-Programmierung und Unterstützung beim Bewerbungsprozess im IT-Bereich.
                    </p>
                    <p>
                        Da Erwerbsarbeit und das lebenslange Lernen einen wesentlichen Teil des gesellschaftlichen Lebens und der Integration ausmachen, möchte die SuperCode GmbH & Co. KG einen aktiven Beitrag dazu leisten.
                    </p>
                    <p>
                        In den Fachbereichen der Informationstechnik wird den Teilnehmern praxisorientiert Fachwissen vermittelt. Sie werden begleitet und unterstützt, sich am Arbeitsleben zu beteiligen, ihre individuellen Perspektiven zu verbessern und Zugang zum Arbeitsmarkt zu finden. Die Vermittlung wird auf Deutsch und Englisch erfolgen, da Berufe im Web-Development ebenso wie viele andere Berufsbilder der IT-Wirtschaft auch in Deutschland weitgehend auf Englisch ausgeübt werden. Da die Programmiersprachen auf englischer Syntax beruhen und viele der verfügbaren Online- und Offline-Lerntools nur auf Englisch vorliegen, versteht die SuperCode GmbH & Co. KG die Zweisprachigkeits des Unterrichts und Trainings als arbeitsmarkt-spezifische Selbstverständlichkeit.
                    </p>
                    <p>
                        Der Arbeit der SuperCode GmbH & Co. KG liegt ein positives humanistisches Menschenbild zugrunde, welches Erwerbsarbeit grundsätzlich als wichtigen individuellen Beitrag zum Gemeinwesen und zugleich als Teil der persönlichen Selbstverwirklichung versteht. Die SuperCode GmbH & Co. KG nutzt das Feedback und den regelmäßigen Austausch der Teilnehmer sowie der beteiligten Behörden, Ämtern und Unternehmen, um eine stetige Verbesserung unsere Dienstleistung zu erreichen. Damit wollen wir den Bedürfnissen des Arbeitsmarktes gerecht werden sowie unser Handeln daran anpassen.
                    </p>
                </div>
                <div className="block">
                    <h3>Werte</h3>
                    <p>Die SuperCode GmbH & Co. KG ist überparteilich, unpolitisch und konfessionell und weltanschaulich neutral.
                    </p>
                    <p>
                        Unsere Arbeit folgt den ethischen Grundsätzen der Gewaltfreiheit, der Emanzipation, der Solidarität und der Selbstbestimmung. Gleichstellung von Mann und Frau, Kollegialität, Teamgeist und Loyalität sind Leitprinzipien für unser Miteinander und unser öffentliches Auftreten. Die SuperCode GmbH & Co. KG fühlt sich den United Nations Sustainability Development Goals verpflichtet und strebt nach größtmöglicher und umfassender Nachhaltigkeit im Geschäftsgebahren.
                    </p>
                </div>
            </div>
            <style jsx>{`
          #impressum-text {
            position: relative;
            background-color: #fff;
            background-image: linear-gradient(
                to right,
                rgba(255, 0, 0, 0.25) 0,
                rgba(255, 0, 0, 0.25) 1px,
                transparent 1px,
                transparent 100%
              ),
              linear-gradient(
                to bottom,
                rgba(255, 0, 0, 0.25) 0,
                rgba(255, 0, 0, 0.25) 1px,
                transparent 1px,
      transparent 100%
              );
            background-position: 0 0, 0 0;
            back g round-size: ${props.width}px ${props.width}px;
            
          }
          .text-body {
            font-size: .8em;
              width: 85%;
              margin: 0 auto;
              padding: 50px 0;
          }
          .block {
            padding: 5px 0
          }
          .block p {
            margin: 0;
          }
          
          }
        `}</style>
        </div>

    );
};

export default LeitBildBody;

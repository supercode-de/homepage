const LeitBildBody = () => {
  return (
    <div id='' className='leitbild-container'>
      <div className='text-body'>
        <h2 className='leitbild'>Leitbild SuperCode GmbH & Co. KG</h2>
        <div className='block'>
          <h3>Unser Ziel</h3>

          <p>
            ist die Ausbildung unserer Teilnehmenden zu verantwortungsvollen, effizient arbeitenden und nachhaltig denkenden Fachkräften für die Digitalwirtschaft (z.B. Web Entwickler Frontend, Webentwickler Full-Stack, Data Analysts) auszubilden. Dabei richten wir uns vor allem an Studienabbrecher*innen, Absolvent*innen der Geistes- und Humanwissenschaften, Quereinsteiger*innen aus technischen, wie auch nicht-technischen Berufen. Ein besonderes Augenmerk liegt auch auf der Integration von Frauen in die Digitalwirtschaft, daher spricht unser Kurs explizit auch Frauen an.
          </p>
          <h3>Insbesondere vermitteln wir:</h3>
          <p>
            Fähigkeiten und Fertigkeiten, um die Anforderungen in den Bereichen Web Entwicklung, Data Science und Technical Sales entsprechend den neuesten Technologien und Vorschriften angepasst an den aktuellen Arbeitsmarkt zu erfüllen Fähigkeiten und Fertigkeiten zur Wahrnehmung und Kontrolle von Erstellungs-, Testing- und Qualitätssicherungsprozessen, Wissen über die Auswirkungen von Fehlern im Kontrollprozess und eine realistische Selbsteinschätzung, Bereitschaft und Fähigkeit zum rücksichtsvollen und partnerschaftlichen Verhalten, und Verantwortung für Leben und Gesundheit, Umwelt und Eigentum
          </p>
          <h2>Unsere Grundsätze:</h2>
          <h3>Personal</h3>
          <p>
            Wir setzen qualifiziertes und praxiserfahrenes Personal in Leitung, Unterricht und Verwaltung ein. Für das Personal wird eine laufende fachliche und pädagogische Fortbildung durchgeführt.
          </p>
          <h3>Räumliche und sachliche Ausstattung</h3>
          <p>
            Die Unterrichtsräume entsprechen nach Art und Ausstattung modernen erwachsenenpädagogischen und fachlichen Kriterien und sind den Zielgruppen angepasst. Die genutzten Lern- und Sozialräume und die sanitären Einrichtungen entsprechen den Anforderungen der Arbeitsstättenverordnung.
          </p>
          <h3>Bildungsangebot</h3>
          <p>
            Potentielle Lehrgangsteilnehmende erhalten von uns eindeutige Aussagen zur geforderten Eingangsqualifikation bzw. den Lernvoraussetzungen. Sie werden von uns persönlich beraten um ein teilnehmerorientiertes und sachgerechtes Lernen zu ermöglichen. Bei Angeboten der beruflichen Weiterbildung werden aktuelle Arbeitsmarkt- und berufliche Qualifikationsanforderungen berücksichtigt sowie Praxisorientierung gewährleistet. Das Lehr- und Lernmaterial entspricht den fachdidaktischen Anforderungen und Standards. Allen Angeboten liegt ein didaktisch-methodisches Konzept zugrunde. Die Veranstaltungen sind auf Methodenvielfalt ausgerichtet. Erwachsenengerechte Lern- und Erfolgskontrollen sichern den Unterrichtserfolg.
          </p>
          <h3>Kundenzufriedenheit</h3>
          <p>
            Kundenzufriedenheit ist ein wesentlicher Leitgedanke unserer Qualitätspolitik. Bei der Entwicklung unserer Bildungsangebote nach dem Dritten Buch Sozialgesetzbuch – AZAV berücksichtigen wir die Lage und die Entwicklung des Arbeitsmarktes und unterstützen die Teilnehmenden bei der Eingliederung in den regulären Arbeitsmarkt.
          </p>
        </div>
      </div>
      <style jsx>{`
          .leitbild-container {
            color: var(--super-white);
            background: var(--super-lila);
          }
          .leitbild{
            margin-top:-40px;
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
        `}</style>
    </div>
  );
};

export default LeitBildBody;

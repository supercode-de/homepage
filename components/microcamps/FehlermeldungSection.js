import HubspotNoKurseForm from "./HubspotNoKurseForm";

const FehlermeldungSection = () => {
  return (
    <div className="fehlermeldung-courses">
      <h3>Huch, leer! 😉 Die Kurse sind nämlich gerade noch in der Schmiede. Nenn uns deine E-Mail und wir sagen dir Bescheid sobald, sie am Start sind.</h3>
      <HubspotNoKurseForm />

      <style jsx>{`
        .fehlermeldung-courses {
          margin: 6% 0;
        }
        .fehlermeldung-courses h3 {
          margin-bottom: 3%;
        }
      `}</style>
    </div>
  );
};

export default FehlermeldungSection;

const UxUiPaySection = () => {
  return (
    <section className="ui-ux-pay">
      <div className="content-wrapper">
        <h2>
          Muss man wirklich das gesamte Menü bezahlen, wenn man doch nur ein bisschen Hunger hat?
        </h2>
        <p>
          Oder besser: muss ein Designer oder Coder über 10.000 € bezahlen, um sich während des Jobs weiter zu bilden? Sollte jemand, der zu Hause gerne programmiert und hobbymäßig coded ein Vermögen in die Hand nehmen, um seiner Passion zu folgen? Die Antwort lautet: Natürlich nicht! Denn dafür gibt es unsere MicroCamps.
        </p>
      </div>
      <div className="img-wrapper">
        <img src="/img/microcamps/class_big.png" alt="Trainer Ahmed steht vor einem Kurs" />
      </div>

      <style jsx>{`
        .ui-ux-pay {
          padding: 12.5rem 10.125rem;
        }
        .ui-ux-pay .img-wrapper {
          display: flex;
          justify-content: flex-end;
        }
        .ui-ux-pay .img-wrapper img {
          max-width: 79.5%;
        }
        @media only screen and (max-width: 576px) {
          .ui-ux-pay {
            padding: 3.125rem 4.5rem;
          }
          .ui-ux-pay .img-wrapper img {
            max-width: 100%;
          }
        }
      
      `}</style>
    </section>
  );
};

export default UxUiPaySection;

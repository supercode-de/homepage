const BigPictureSection = () => {
  return (
    <section className="bigPictureSection">
      <div className="wrap">
        <div className="textWrap">
          <div>
            <h2>Bist du bereit</h2>
            <h2>durchzustarten?</h2>
          </div>

          <a className="btn" href="#allCourses">
            Kursübersicht
          </a>
        </div>
      </div>

      <style jsx>{`
        .bigPictureSection .textWrap {
          padding: 35% 0 5% 10%;
          background: url("../../img/microcamps/tn_big.png") center/cover no-repeat;
          border-radius: 50px;
        }
        .bigPictureSection .textWrap div {
          margin-bottom: 1rem;
        }
        .bigPictureSection .textWrap h2 {
          font-weight: 800;
          max-width: 45rem;
        }
        .bigPictureSection .textWrap a {
          font-size: var(--fs-500);
          background-color: var(--clr-super-black);
          color: var(--clr-super-green);
        }
      
        @media only screen and (max-width: 992px) {
          .bigPictureSection .textWrap h2{
            font-size: var(--fs-500);
          }
        }
      `}</style>
    </section>
  );
};

export default BigPictureSection;

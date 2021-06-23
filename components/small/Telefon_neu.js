// Der Komponente wird mit color="" eine beliebige Farbe (hex, rgba, benannt) übergeben. Als Fallback ist #fff hinterlegt.

const Telefon_neu = (props) => {
  return (
    <>
      <div className='aside'>
        <a href='tel:+4921178172330'>📞 +49 211 7817 233-0</a>
      </div>
      <style jsx>{`
        .aside {
          font-size: 0.9rem;
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: ${props.position ? props.position : 'right'};
          ${props.position ? props.position : 'right'}: 3%;
          top: 40%;
          color: ${props.color || '#fff'};
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        @media (max-width: 644px) {
          .aside {
            top: 80%;
            left: 6%;
          }
        }
      `}</style>
    </>
  );
};
export default Telefon_neu;

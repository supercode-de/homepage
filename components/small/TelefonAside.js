const TelefonAside = () => {
  return (
    <>
      <aside className='aside'>
        <a href='tel:+4921178172330'>📞 +49 211 7817 233-0</a>
      </aside>
      <style jsx>{`
        .aside {
          font-size: 0.9rem;
          position: absolute;
          transform: rotate(-90deg);
          left: -1%;
          top: 50%;
          color: var(--super-white);
          z-index: 9;
          display: none;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .aside {
            left: -7%;
            display: block;
          }
        }
        @media (max-width: 425px) {
          .aside {
            left: -15%;
          }
        }
      `}</style>
    </>
  );
};
export default TelefonAside;

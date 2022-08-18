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
          left: 0%;
          top: 50%;
          color: var(--super-white);
          z-index: 9;
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
export default TelefonAside;

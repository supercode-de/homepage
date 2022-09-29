const Team_Header = () => {
  return (
    <div id="header">
      <div className="header-images-grid">
        <div className="bottom img1">
          <img src="/img/benannt/Master-Trainer Webentwickung.jpg" alt="" />
        </div>
        <div className="bottom img2">
          <img src="/img/benannt/Alumni Webentwickung Full-Stack.jpg" alt="" />
        </div>
        <div className="bottom img3">
          <img src="/img/benannt/Campus Webentwickung Full-Stack.jpg" alt="" />
        </div>
        <div className="bottom img4">
          <img src="/img/benannt/SuperCode Team Meeting.jpg" alt="" />
        </div>
        <div className="top img5">
          <img src="/img/benannt/SuperCode Team Bildung.jpg" alt="" />
        </div>
        <div className="top img6">
          <img src="/img/benannt/Campus SuperCode IT.jpg" alt="" />
        </div>
        <div className="top img7">
          <img src="/img/benannt/Woman Developer.jpg" alt="" />
        </div>
      </div>

      <style jsx>{`
          #header {
            position: relative;
            background: var(--super-lila);
          }

          .header-images-grid {
            position: relative;
            bottom: -70px;
            display: grid;
            grid-template-columns: repeat(24, 1fr);
            gap: 2vw;
            z-index: 2;
            box-sizing: border-box;
          }

          .header-images-grid img {
            width: 100%;
          }

          .bottom,
          .top {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .bottom {
            justify-content: flex-end;
          }

          .top {
            justify-content: flex-start;
          }

          .img1 {
            grid-column: 1/6;
            grid-row: 1/3;
          }
          .img2 {
            grid-column: 6/12;
            grid-row: 1/3;
          }
          .img3 {
            grid-column: 12/18;
            grid-row: 1/3;
          }
          .img4 {
            grid-column: 18/25;
            grid-row: 1/2;
          }
          .img5 {
            grid-column: 3/ 10;
            grid-row: 3/4;
          }
          .img6 {
            grid-column: 10/18;
            grid-row: 3/4;
          }
          .img7 {
            grid-column: 18/24;
            grid-row: 2/4;
          }
          @media (max-width: 768px) {
            .header-images-grid {
              padding-bottom: min(6vh, 100px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Team_Header;

// import { Link } from "react-router-dom";
import Link from 'next/link';

const AllCoursesCard = (props) => {
  const {
    id,
    theme,
    subTheme,
    title,
    modell,
    duration,
    level,
    image,
    toolsInternal,
  } = props.data;
  
  return (
    <div className="allCoursesArea__list__viewList__card">
      <div className="allCoursesArea__list__viewList__card__header">
        <img src={`/img/${image}`} alt={image} />
        <div>
          <h4>{subTheme}</h4>
          <h4>{title}</h4>
        </div>
        <p
          className="typeOfP"
          style={{backgroundColor: theme === "design" ? "var(--clr-super-yellow" : theme === "coding" ? "var(--clr-super-green)" : "var(--clr-super-white)"}}
        >
          {theme}
        </p>
      </div>
      <div className="allCoursesArea__list__viewList__card__main">
        <div className="plusList">
          {toolsInternal.slice(0, 4).map((tool, index) => (
              <img src={`/img/${tool.image}`} alt={tool.name} key={index} />
            ))}
          <p>+ mehr</p>
        </div>
        <p>
          {modell} | {duration}
        </p>
        <p>Level: {level}</p>

        <Link href={`/microcamps/${id}`}>
          <a className="btn">Zum Kurs</a>
        </Link>
      </div>
      <style jsx>{`
        .allCoursesArea__list__viewList__card {
          background-color: var(--clr-super-blue);
          overflow: hidden;
          border-radius: 25px;
          transition: all 0.2s;
        }
        .allCoursesArea__list__viewList__card__header {
          display: grid;
          place-items: center;
          overflow: hidden;
          position: relative;
          width: 100%;
          aspect-ratio: 1;
        }
        .allCoursesArea__list__viewList__card__header img {
          pointer-events: none;
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .allCoursesArea__list__viewList__card__header div {
          padding: 15%;
          z-index: 1;
          width: 100%;
        }
        .allCoursesArea__list__viewList__card__header div h4 {
          width: 100%;
          line-height: 25px;
          text-shadow: 0px 1px 5px var(--clr-super-black);
        }
        .allCoursesArea__list__viewList__card__header .typeOfP {
          color: var(--clr-super-black);
          font-size: var(--fs-200);
          position: absolute;
          top: 5%;
          right: 5%;
          background-color: var(--clr-super-lila);
          padding: 1% 5%;
          border-radius: 20px;
        }
        .allCoursesArea__list__viewList__card__main {
          padding: 1.56rem 1.25rem;
        }
        .allCoursesArea__list__viewList__card__main .plusList {
          display: flex;
          align-items: center;
          gap: 5px;
          margin: 0 0 10% 0;
        }
        .allCoursesArea__list__viewList__card__main .plusList img {
          background-color: var(--clr-super-white);
          border-radius: 50%;
          padding: 2%;
          width: 25px;
          aspect-ratio: 1;
        }
        .allCoursesArea__list__viewList__card__main .plusList p {
          font-size: var(--fs-100);
          background-color: var(--clr-super-white);
          padding: 3%;
          border-radius: 20px;
          color: var(--clr-super-black);
          line-height: 100%;
        }
        .allCoursesArea__list__viewList__card__main p {
          font-size: var(--fs-200);
        }
        .allCoursesArea__list__viewList__card__main a {
          background-color: var(--clr-super-lila);
          width: 100%;
          padding: 3% 6%;
        }
        .allCoursesArea__list__viewList__card__main .btn:nth-of-type(1) {
          margin: 1.56rem 0 0 0;
        }
        .btn {
          align-items: center;
          justify-content: center;
          font-weight: 400;
        }

        @media only screen and (max-width: 768px) {
          .allCoursesArea__list__viewList__card {
            width: 80%;
            flex-shrink: 0;
            scroll-snap-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AllCoursesCard;

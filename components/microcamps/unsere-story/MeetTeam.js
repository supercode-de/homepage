import TeamCard from "./TeamCard";

import teamData from "../../microcamps/data/teamData";

const MeetTeam = () => {
  return (
    <section className="meet-team-wrapper">
      <article className="content-wrapper">
        <h2>Aus Liebe zur digitalen Bildung!</h2>
        <p>
          Unser Team verbindet vor allem eins: die Liebe zur digitalen Bildung – nicht der Fakt, vor Ort im Büro zu sein. Wir sind remote unterwegs und profitieren dadurch von einem weltweiten Freelance-Expert:innen-Netzwerk im Bereich Web-Entwicklung und Design, auf das wir zugreifen können. Und davon profitiert natürlich jedes MicroCamp.
        </p>
      </article>
      <article className="team-wrapper">
        {teamData.map((teamData, i) => (
          <TeamCard
            key={i}
            id={teamData.id}
            img={teamData.img}
            name={teamData.name}
            jobtitel={teamData.jobtitel}

          />
        ))}
      </article>

      <style jsx>{`
        .meet-team-wrapper {
          padding: 12.5rem 10.125rem;
        }
        .meet-team-wrapper .team-wrapper {
          width: 80%;
          margin: 5% auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
          gap: 25px 25px;
        }
        @media only screen and (max-width: 576px) {
          .meet-team-wrapper {
            padding: 3.125rem 4.5rem;
          }
          .meet-team-wrapper .team-wrapper {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      
      `}</style>
    </section>
  );
};

export default MeetTeam;

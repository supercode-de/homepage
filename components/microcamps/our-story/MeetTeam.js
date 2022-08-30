import "./MeetTeam.scss";

import TeamCard from "./ teamCardSection/TeamCard";

//Data
import teamData from "../../data/teamData";

const MeetTeam = () => {
  return (
    <section className="meet-team-wrapper">
      <article className="content-wrapper">
        <h2>Aus Liebe zur digitalen Bildung!</h2>
        <p>
          Unser Team verbindet vor allem eins: die Liebe zur digitalen Bildung und nicht der Fakt vor Ort im Büro zu sein. Wir sind remote unterwegs und profitieren dadurch von einem weltweiten Freelancer-Experten-Netzwerk im Bereich Web-Entwicklung und Design auf das wir zugreifen können. Und davon profitiert natürlich jedes MicroCamp.
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
    </section>
  );
};

export default MeetTeam;

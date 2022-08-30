import "./teamCard.scss";

const TeamCard = (props) => {
  const { img, name, jobtitel } = props;

  return (
    <div className="team-card-wrapper">
      <img src={img} alt="Team images"/>
      <h3>{name}</h3>
      <h4>{jobtitel}</h4>
    </div>
  );
};

export default TeamCard;

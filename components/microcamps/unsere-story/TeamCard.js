const TeamCard = (props) => {
  const { img, name, jobtitel } = props;
  return (
    <div className="team-card-wrapper">
      <img src={img} alt="Team images"/>
      <h3>{name}</h3>
      <h4>{jobtitel}</h4>

      <style jsx>{`
        .team-card-wrapper img {
          // width: 35rem;
          width: 100%;
          margin-bottom: 1.563rem;
        }
        .team-card-wrapper h3 {
          font-family: var(--ff-reg-bold);
          color: var(--clr-super-green);
          font-size: var(--fs-600);
        }
        .team-card-wrapper h4 {
          font-family: var(--ff-reg-regular);
          font-size: var(--fs-500);
          font-weight: 400;
        }
      
      `}</style>
    </div>
  );
};

export default TeamCard;

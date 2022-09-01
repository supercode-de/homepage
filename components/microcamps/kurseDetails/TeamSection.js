import { useState, useEffect, useRef } from "react";
import teamData from "../../../data/teamData";
const TeamSection = ({ data }) => {
    const shouldLog = useRef(true)
    const [filteredTeam, setFilteredTeam] = useState(teamData)
    useEffect(() => {
        if (shouldLog.current) {
            shouldLog.current = false
            const filteredTeamData = filteredTeam.filter((team) => {
                if (team.theme === data.theme) {
                    return team
                } else {
                    return false
                }
            })
            setFilteredTeam(filteredTeamData)
        }
    }, [filteredTeam, data.theme])

    return (
        <section className="teamSection" id="teamSection">
            <div className="wrap">
                <article className="teamSection__headline">
                    <p>{data.category} Team</p>
                    <h3>Lerne mit qualifizierten Trainer*innen</h3>
                    <h3>aus der {data.theme === "design" ? "Design-" : data.theme === "coding" ? "IT-" : data.theme === "data" ? "Data-Science-" : ""}Branche</h3>
                </article>

                <article className="teamSection__gridTeam">
                    {filteredTeam.map((team, i) => (
                        <div key={i} className="teamSection__gridTeam__card">
                            <img src={`/img/${team.img}`} alt={`SuperCode Mitarbeiter*in ${team.name}`} />
                            <h5>{team.name}</h5>
                            <p>{team.jobtitel}</p>
                        </div>
                    )
                    )}
                </article>
            </div>
        </section>
    );
};

export default TeamSection;

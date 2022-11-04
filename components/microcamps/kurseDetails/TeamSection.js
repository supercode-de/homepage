import { useState, useEffect, useRef } from "react";
import teamData from "../../microcamps/data/teamData";
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
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

    console.log(filteredTeam.length);
    return (
        <section className="teamSection" id="teamSection">
            <div className="wrap">
                <article className="teamSection__headline">
                    <p>{data.category} Team</p>
                    <h3>Lerne mit qualifizierten Trainer:innen</h3>
                    <h3>aus der {data.theme === "design" ? "Design-" : data.theme === "coding" ? "IT-" : data.theme === "data" ? "Data-Science-" : ""}Branche</h3>
                </article>

                <article className="teamSection__gridTeam">
                    {filteredTeam.map((team, i) => (
                        <div key={i} className="teamSection__gridTeam__card">
                            <img src={`/img/${team.img}`} alt={`SuperCode Mitarbeiter:in ${team.name}`} />
                            <h5>{team.name}</h5>
                            <p>{team.jobtitel}</p>
                        </div>
                    )
                    )}
                </article>
                {filteredTeam.length > 1 ? 
                <div className='teamSection--carousel'>
                <Carousel
                    responsive={responsive}
                    ssr
                    showDots={false}
                    slidesToSlide={1}
                    infinite
                    containerClass='container-with-dots'
                    itemClass='image-item'
                    deviceType={''}
                >
                    {filteredTeam.map((team, i) => (
                        <div key={i} className="teamSection__gridTeam__card">
                        <img src={`/img/${team.img}`} alt={`SuperCode Mitarbeiter:in ${team.name}`} />
                        <h5>{team.name}</h5>
                        <p>{team.jobtitel}</p>
                    </div>
                    ))}
                </Carousel>
            </div>
            :    
            ""}
                
            </div>

            <style jsx>{`
                .teamSection__headline {
                    margin: 0 0 2% 0;
                }
                .teamSection__headline h3 {
                    color: var(--clr-super-lila);
                }
                .teamSection__headline h3 + p {
                    margin: 2% 40% 0 0;
                }
                .teamSection__gridTeam {
                    display: grid;
                    margin: 0 0 0 10%;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 25px;
                }
                .teamSection__gridTeam__card img {
                    border-radius: 25px;
                    width: 100%;
                }
                .teamSection__gridTeam__card h5 {
                    color: var(--clr-super-green);
                }
                .teamSection--carousel {
                    display: none;
                }

                @media only screen and (max-width: 1200px)  {
                    .teamSection__gridTeam {
                        grid-template-columns: repeat(2,1fr);

                    }
                }
                @media (max-width: 768px) {
                    .teamSection--carousel {
                        display: block;
                    }
                    .teamSection__gridTeam__card {
                        margin-right: 50px;
                    }
                    .teamSection__gridTeam {
                        display: ${filteredTeam.length === 1 ? "block" : "none"};
                    }
                }
            `}</style>  
        </section>
    );
};

export default TeamSection;

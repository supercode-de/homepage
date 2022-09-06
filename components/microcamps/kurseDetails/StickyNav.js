// import { Link } from "react-scroll";
// import Link from 'next/link';

const StickyNav = () => {
    console.log(window);

    return (
        <section className="stickyNav">
            <div className="wrap">
                <ul>
                    <li>
                        <a href="#overviewSection">Übersicht</a>
                    </li>
                    <li>
                        <a href="#curriculumSection">Curriculum</a>
                    </li>
                    <li>
                        <a href="#scheduleSection">Zeitplan</a>
                    </li>
                    <li>
                        <a href="#teamSection">Team</a>
                    </li>
                    <li>
                        <a href="#toolsSection">Tools</a>
                    </li>
                    <li>
                        <a href="#nextBootcamp">Termine</a>
                    </li>
                </ul>
            </div>

            <style jsx>{`
                .stickyNav {
                    background-color: var(--clr-super-lila);
                    color: var(--clr-super-white);
                    position: sticky;
                    top: 0;
                    z-index: 39;
                }
                .stickyNav .wrap {
                    padding: 1% 0;
                }
                .stickyNav ul {
                    display: flex;
                    list-style: none;
                    padding: 0;
                    justify-content: space-around;
                }
                .stickyNav ul li a {
                    text-decoration: none;
                    padding: 2% 0;
                    font-size: var(--fs-200);
                    font-weight: 400;
                }
                .stickyNav ul li a:hover {
                    border-bottom: 6px solid var(--clr-super-white);
                }
                .active {
                    border-bottom: 6px solid var(--clr-super-white);
                }
                @media only screen and (max-width: 1200px) {
                    .stickyNav {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default StickyNav;

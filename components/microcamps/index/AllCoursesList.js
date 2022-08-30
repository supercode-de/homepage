import { useEffect, useState } from "react";
import AllCoursesCardNeu from "./AllCoursesCard";
import FehlermeldungSection from "../FehlermeldungSection";

import courseData from "../data/courseData.json";

// die variable brauchen wir, damit nicht alle data science kurse angezeigt werden, da es diese noch nicht offiziell gibt, sie aber im datensatz schon angelegt sind und damit der datensatz nicht aufwendig verändert werden muss, slice ich die kurse einfach weg. sobald die kurse existieren muss entsprechend überall "courseDataSlice" wieder mit "courseData" ausgetauscht werden
const courseDataSlice = courseData.slice(0, 12)
const AllCoursesList = (props) => {
    const [filteredArr, setFilteredArr] = useState(courseDataSlice);

    const [filterWhat, setFilterWhat] = useState([]);
    const insertfilterWhatState = (status) => {
        if (filterWhat.includes(status)) {
            setFilterWhat(filterWhat.filter((item) => item !== status));
        } else {
            setFilterWhat([...filterWhat, status]);
        }
    };

    const [filterFor, setFilterFor] = useState([]);
    const insertfilterForState = (status) => {
        if (filterFor.includes(status)) {
            setFilterFor(filterFor.filter((item) => item !== status));
        } else {
            setFilterFor([...filterFor, status]);
        }
    };

    useEffect(() => {
        const filteredFor = courseDataSlice.filter((item) => {
            if (filterFor.length <= 0) {
                return item;
            } else {
                return (
                    item.level === filterFor[0] || item.level === filterFor[1]
                );
            }
        });
        const filteredAll = filteredFor.filter((item) => {
            if (filterWhat.length <= 0) {
                return item;
            } else {
                return (
                    item.theme === filterWhat[0] ||
                    item.theme === filterWhat[1] ||
                    item.theme === filterWhat[2]
                );
            }
        });
        setFilteredArr(filteredAll);
    }, [filterWhat, filterFor]);

    // mehr Kurse Button Funktionalität
    const postsPerRow = 8
    const [next, setNext] = useState(postsPerRow)
    const handleShowMore = () => {
        setNext(next + postsPerRow)
    }

    return (
        <article className="allCoursesArea__list">
            <div className="allCoursesArea__list__filter">
                <p>Filter</p>
                <input
                    className="hidden"
                    onChange={(e) => insertfilterWhatState(e.target.value)}
                    type="checkbox"
                    name="filter-what"
                    id="coding-button"
                    value="coding"
                />
                <label
                    className="button-label coding-label"
                    htmlFor="coding-button"
                >
                    <p>coding</p>
                </label>
                <input
                    className="hidden"
                    onChange={(e) => insertfilterWhatState(e.target.value)}
                    type="checkbox"
                    name="filter-what"
                    id="design-button"
                    value="design"
                />
                <label
                    className="button-label design-label"
                    htmlFor="design-button"
                >
                    <p>design</p>
                </label>
                <input
                    className="hidden"
                    onChange={(e) => insertfilterWhatState(e.target.value)}
                    type="checkbox"
                    name="filter-what"
                    id="data-button"
                    value="data"
                />
                <label
                    className="button-label data-label"
                    htmlFor="data-button"
                >
                    <p>data</p>
                </label>
                {/* ---------------------- */}
                <input
                    className="hidden"
                    onChange={(e) => insertfilterForState(e.target.value)}
                    type="checkbox"
                    name="filter-for"
                    id="expert-button"
                    value="Expert"
                />
                <label
                    className="button-label expert-label"
                    htmlFor="expert-button"
                >
                    <p>expert</p>
                </label>
                <input
                    className="hidden"
                    onChange={(e) => insertfilterForState(e.target.value)}
                    type="checkbox"
                    name="filter-for"
                    id="beginner-button"
                    value="Beginner"
                />
                <label
                    className="button-label beginner-label"
                    htmlFor="beginner-button"
                >
                    <p>beginner</p>
                </label>
            </div>

            {filteredArr.length === 0 ?
                <FehlermeldungSection />
                :
                <>
                    <div className="allCoursesArea__list__viewList">
                        {filteredArr.slice(0, next).map((course) => (
                            <AllCoursesCardNeu
                                key={course.id}
                                data={course}
                                filteredTools={props.filteredTools}
                            />
                        ))}
                    </div>
                    {next < filteredArr.length && (
                        <article className="btn__wrap">
                            <button className="btn btn--more" onClick={handleShowMore}>
                                mehr Kurse
                            </button>
                        </article>
                    )}
                </>
            }
        <style jsx>{`
            .allCoursesArea__list__filter {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 20px;
            }
            .allCoursesArea__list__filter p {
                font-size: var(--fs-500);
                font-weight: 800;
            }
            .allCoursesArea__list__filter .hidden {
                display: none;    
            }
            .allCoursesArea__list__filter .button-label {
                display: inline-block;
                padding: 5px 20px;
                border-radius: 50px;
                transition: 0.2s;
                cursor: pointer;
            }
            .allCoursesArea__list__filter .coding-label {
                border: 1px solid var(--clr-super-green);
            }
            .allCoursesArea__list__filter .coding-label:hover {
                background-color: var(--clr-super-green);
            }
            .allCoursesArea__list__filter #coding-button:checked + .button-label {
                background-color: var(--clr-super-green);
            }
            .allCoursesArea__list__filter #coding-button:checked + .button-label:hover {
                background-color: var(--clr-super-green);
            }
            .allCoursesArea__list__filter #coding-button:hover {
                background-color: var(--clr-super-green);
            }
            .allCoursesArea__list__filter .design-label {
                border: 1px solid var(--clr-super-yellow);
            }
            .allCoursesArea__list__filter .design-label:hover {
                background-color: var(--clr-super-yellow);
            }
            .allCoursesArea__list__filter #design-button:checked + .button-label {
                background-color: var(--clr-super-yellow);
            }
            .allCoursesArea__list__filter #design-button:checked + .button-label:hover {
                background-color: var(--clr-super-yellow);
            }
            .allCoursesArea__list__filter #design-button:hover {
                background-color: var(--clr-super-yellow);
            }
            .allCoursesArea__list__filter .data-label {
                border: 1px solid var(--clr-super-black);
            }
            .allCoursesArea__list__filter .data-label:hover {
                background-color: var(--clr-super-black);
            }
            .allCoursesArea__list__filter #data-button:checked + .button-label {
                background-color: var(--clr-super-black);
            }
            .allCoursesArea__list__filter #data-button:checked + .button-label:hover {
                background-color: var(--clr-super-black);
            }
            .allCoursesArea__list__filter #data-button:hover {
                background-color: var(--clr-super-black);
            }
            .allCoursesArea__list__filter .expert-label, .allCoursesArea__list__filter .beginner-label {
                border: 1px solid var(--clr-super-white);
            }
            .allCoursesArea__list__filter .expert-label:hover, .allCoursesArea__list__filter .beginner-label:hover {
                background-color: var(--clr-super-white);
                color: var(--clr-super-black);
            }
            .allCoursesArea__list__filter #expert-button:checked + .button-label, .allCoursesArea__list__filter #beginner-button:checked + .button-label {
                background-color: var(--clr-super-white);
                color: var(--clr-super-black);
            }
            .allCoursesArea__list__filter #expert-button:checked + .button-label:hover, .allCoursesArea__list__filter #beginner-button:checked + .button-label:hover {
                background-color: var(--clr-super-white);
                color: var(--clr-super-black);
            }
            .allCoursesArea__list__filter #expert-button:hover, .allCoursesArea__list__filter #beginner-button:hover {
                background-color: var(--clr-super-black);
            }
            .allCoursesArea__list__viewList {
                width: 80%;
                margin: 5% auto;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 100px 25px;
                z-index: 10;
            }

            .btn__wrap {
                text-align: center;
            }
            .btn__wrap .btn--more {
                margin: 5% 0;
                padding: 1% 6%;
                font-family: var(--ff-reg-regular);
                border: none;
                font-size: var(--fs-500);
                background-color: var(--clr-super-green);
                color: var(--clr-super-lila);
            }
            .btn {
                justify-content: center;
                align-items: center;
                font-weight: 400;
            }

            @media only screen and (max-width: 1400px) {
                .allCoursesArea__list__viewList {
                    grid-template-columns: repeat(3, 1fr);
                }
            }

            @media only screen and (max-width: 992px) {
                .allCoursesArea__list__viewList {
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media only screen and (max-width: 768px) {
                .allCoursesArea__list__viewList {
                    width: 100%;
                    display: flex;
                    overflow-x: scroll;
                    scroll-snap-type: x mandatory;
                    scroll-behavior: smooth;
                    scrollbar-width: none;
                }
                .allCoursesArea__list__viewList::-webkit-scrollbar {
                    display: none;
                }
            }
        `}</style>
        </article>
    );
};

export default AllCoursesList;

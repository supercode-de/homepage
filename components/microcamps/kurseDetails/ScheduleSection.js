import Timetable from "../kurseDetails/Timetable";
import ReasonsWhyOneReason from "../index/ReasonsWhyOneReason";
import ScheduleCTASection from "../kurseDetails/ScheduleCTASection";
import AlumniZitate from "../../../components/microcamps/kurseDetails/AlumniZitate";

import designReasons from "../../../components/microcamps/data/reasonsDesignData";
import webDevReasons from "../../../components/microcamps/data/reasonsWebDevData";
import dataReasons from "../../../components/microcamps/data/reasonsDataScienceData";

const ScheduleSection = (props) => {
    return (
        <section className="scheduleSection" id="scheduleSection">
            <div className="wrap">
                <article className="scheduleSection__textWrap">
                    <div className="scheduleSection__textWrap__headline">
                        <p>MicroCamp Zeitplan</p>
                        <h3>Lerne {props.kurs.theme === "design" ? "UX/UI-Design" : props.kurs.theme === "coding" ? "Web-Entwicklung" : props.kurs.theme === "data" ? "Data Science" : ""} live und online</h3>
                        <h3>in kleinen Lerngruppen</h3>
                    </div>
                    <div className="scheduleSection__textWrap__text">
                        <p>Wir möchten ehrlich zu dir sein: Unsere MicroCamps sind intensiv und es werden viele neue Themen auf dich zukommen.</p>
                        <p>Aber wir sind stolz darauf, einen Zeitplan zu haben, der für berufstätige Menschen optimal funktioniert. Bei jedem Schritt wirst du von deinen Trainer*innen, deiner Lerngruppe und unserem guten {props.kurs.theme === "design" ? "Design" : props.kurs.theme === "coding" ? "Web-Dev" : "Data Sientist"}-Netzwerk in ganz Deutschland unterstützt!</p>
                    </div>
                </article>
                <img
                    className="bigSuperCodePeople"
                    src="/img/microcamps/people_center.png"
                    alt="SuperCode Mitarbeitende und Alumni"
                />

                <article className="scheduleSection__list">
                    <ul>
                        {props.kurs.theme === "design" ? designReasons.map((reason, i) => (
                            <ReasonsWhyOneReason
                                key={i}
                                id={reason.id}
                                title={reason.title}
                                reason={reason.reason}
                            />
                        )) : props.kurs.theme === "coding" ? webDevReasons.map((reason, i) => (
                            <ReasonsWhyOneReason
                                key={i}
                                id={reason.id}
                                title={reason.title}
                                reason={reason.reason}
                            />
                        )) : props.kurs.theme === "data" ?
                            dataReasons.map((reason, i) => (
                                <ReasonsWhyOneReason
                                    key={i}
                                    id={reason.id}
                                    title={reason.title}
                                    reason={reason.reason}
                                />
                            )) : ""}
                    </ul>
                </article>

                <article className="scheduleSection__textWrap">
                    <div className="scheduleSection__textWrap__headline">
                        <h3>Vernetze dich mit anderen Teilnehmenden</h3>
                    </div>
                    <div className="scheduleSection__textWrap__text">
                        <p>Wir tun unser Bestes, damit du {props.kurs.theme === "design" ? "UX-Design" : props.kurs.theme === "coding" ? "Web-Entwicklung" : "Data Science"} zu einer Zeit zu lernen kannst, die für dich passt. Im Moment haben wir mehrere Online Live Kurse mit verschiedenen Schwerpunkten.</p>
                        <p>Du lernst also in einem online Kurs, kannst dich aber gleichzeitig jederzeit mit den anderen Teilnehmenden austauschen, vernetzen und gemeinsam lernen.</p>
                    </div>
                </article>

                <Timetable timetableData={props.kurs.timetable} />
                <AlumniZitate theme={props.kurs.theme} />
                <ScheduleCTASection data={props.kurs} />
            </div>

            <style jsx>{`
                .scheduleSection__textWrap {
                    width: 70%;
                    margin: 0 0 5% 0;
                }
                .scheduleSection__textWrap__headline {
                    margin: 0 0 2% 0;
                }
                .scheduleSection__textWrap__headline h3 {
                    color: var(--clr-super-lila);
                }
                .scheduleSection__textWrap__text p {
                    margin: 0 0 1% 0;
                }
                .scheduleSection .bigSuperCodePeople {
                    margin: 0 auto;
                    width: 100%;
                }
                .scheduleSection__list {
                    margin: 10% 0 10% 0;
                }
                .scheduleSection__list ul {
                    padding: 0;
                    list-style: none;
                }

                @media only screen and (max-width: 1200px) {
                    .scheduleSection__textWrap {
                        width: 100%;
                    }
                }
                @media (max-width: 425px) {
                    .scheduleSection__overview__headline {
                        margin: 10% 0% 5% 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default ScheduleSection;

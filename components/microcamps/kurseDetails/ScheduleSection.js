import Timetable from "./Timetable";
import ReasonsWhyOneReason from "../../reasonsWhySection/ReasonsWhyOneReason";
import ScheduleCTASection from "./ScheduleCTASection";

import designReasons from "../../../data/reasonsDesignData";
import webDevReasons from "../../../data/reasonsWebDevData";
import dataReasons from "../../../data/reasonsDataScienceData";
import AlumniZitate from "./AlumniZitate";

const ScheduleSection = (props) => {
    return (
        <section className="scheduleSection" id="scheduleSection">
            <div className="wrap">
                <article className="scheduleSection__textWrap">
                    <div className="scheduleSection__textWrap__headline">
                        <p>MicroCamp Zeitplan</p>
                        <h3>Lerne {props.data.theme === "design" ? "UX/UI-Design" : props.data.theme === "coding" ? "Web-Entwicklung" : props.data.theme === "data" ? "Data Science" : ""} live und online</h3>
                        <h3>in kleinen Lerngruppen</h3>
                    </div>
                    <div className="scheduleSection__textWrap__text">
                        <p>Wir möchten ehrlich zu dir sein: Unsere MicroCamps sind intensiv und es werden viele neue Themen auf dich zukommen.</p>
                        <p>Aber wir sind stolz darauf, einen Zeitplan zu haben, der für berufstätige Menschen optimal funktioniert. Bei jedem Schritt wirst du von deinen Trainer*innen, deiner Lerngruppe und unserem guten {props.data.theme === "design" ? "Design" : props.data.theme === "coding" ? "Web-Dev" : "Data Sientist"}-Netzwerk in ganz Deutschland unterstützt!</p>
                    </div>
                </article>
                <img
                    className="bigSuperCodePeople"
                    src="/img/people_center.png"
                    alt=""
                />

                <article className="scheduleSection__list">
                    <ul>
                        {props.data.theme === "design" ? designReasons.map((reason, i) => (
                            <ReasonsWhyOneReason
                                key={i}
                                id={reason.id}
                                title={reason.title}
                                reason={reason.reason}
                            />
                        )) : props.data.theme === "coding" ? webDevReasons.map((reason, i) => (
                            <ReasonsWhyOneReason
                                key={i}
                                id={reason.id}
                                title={reason.title}
                                reason={reason.reason}
                            />
                        )) : props.data.theme === "data" ?
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
                        <p>Wir tun unser Bestes, damit du {props.data.theme === "design" ? "UX-Design" : props.data.theme === "coding" ? "Web-Entwicklung" : "Data Science"} zu einer Zeit zu lernen kannst, die für dich passt. Im Moment haben wir mehrere Online Live Kurse mit verschiedenen Schwerpunkten.</p>
                        <p>Du lernst also in einem online Kurs, kannst dich aber gleichzeitig jederzeit mit den anderen Teilnehmenden austauschen, vernetzen und gemeinsam lernen.</p>
                    </div>
                </article>

                <Timetable timetableData={props.data.timetable} />
                <AlumniZitate theme={props.data.theme}/>
                <ScheduleCTASection data={props.data} />
            </div>
        </section>
    );
};

export default ScheduleSection;

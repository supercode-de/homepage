import ToolsOneTool from "./ToolsOneTool";

const ToolsSection = (props) => {
    return (
        <section className="toolsSection" id="toolsSection">
            <div className="wrap">
                <article className="toolsSection__headline">
                    <p>MicroCamp Tools</p>
                    <h3>Meistere die aktuellsten</h3>
                    <h3>{props.data.category} Tools und Workflows</h3>
                    <p>
                        In unseren MicroCamps arbeitest du mit den aktuellsten Tools. Im Gegensatz zu anderen Kursen, die noch mit einem veralteten Tech-Stack aus einer längst vergessenen Zeit arbeiten, sind wir der Meinung, dass moderne Tools deiner Karriere den nötigen Push geben.
                    </p>
                </article>
                <article className="toolsSection__toolList">
                    {props.filteredTools.map((tool, index) => {
                        return <ToolsOneTool key={index} tool={tool} />
                    })}
                </article>
            </div>
        </section>
    );
};

export default ToolsSection;

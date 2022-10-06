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
                    {props.data.toolsInternal.map((tool, index) => {
                        return <ToolsOneTool key={index} tool={tool} />
                    })}
                </article>
            </div>

            <style jsx>{`
                .toolsSection {
                    background-color: var(--clr-super-lila);
                    color: var(--clr-super-white);
                }
                .toolsSection__headline {
                    margin: 0 0 2% 0;
                }
                .toolsSection__headline h3 {
                    color: var(--clr-super-green);
                }
                .toolsSection__headline h3 + p {
                    margin: 2% 40% 0 0;
                }
                .toolsSection__toolList {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 25px;
                }
                
            `}</style>
        </section>
    );
};

export default ToolsSection;

import { useState } from "react";

const ToolsOneTool = ({ tool }) => {

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (
        <div
            className="toolWrap"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="tool">
                <img src={`/img/${tool.image}`} alt={tool.name} />
            </div>
            <div
                className={`openCard`}
                style={{
                    display: isHovering ? "inline-block" : "none",
                }}
            >
                <h5>{tool.name}</h5>
                <p>{tool.description}</p>
            </div>

            <style jsx>{`
                .toolWrap {
                    position: relative;
                    margin: 0 0 20% 0;
                }
                .toolWrap .tool {
                    display: grid;
                    place-items: center;
                    width: 100px;
                    background-color: var(--clr-super-white);
                    border-radius: 50%;
                    padding: 15%;
                    aspect-ratio: 1;
                    align-items: center;
                    margin: 1% 0 0 0;
                    transition: all 0.2s;
                    cursor: pointer;
                }
                .toolWrap .tool img {
                    width: 100%;
                }
                .toolWrap .tool:hover {
                    transform: translateY(-5%);
                    box-shadow: 0px 10px 0 0px var(--clr-super-lila-shadow);
                }
                .toolWrap .openCard {
                    background-color: var(--clr-super-white);
                    border-radius: 50px;
                    padding: 50%;
                    width: 30vw;
                    position: absolute;
                    top: 150%;
                    left: 0;
                    z-index: 5;
                    display: none;
                }
                .toolWrap .openCard h5 {
                    color: var(--clr-super-lila);
                    font-weight: 800;
                    margin: 0 0 5% 0;
                }
                .toolWrap .openCard p {
                    color: var(--clr-super-lila);
                }
            `}</style>
        </div>
    );
};

export default ToolsOneTool;

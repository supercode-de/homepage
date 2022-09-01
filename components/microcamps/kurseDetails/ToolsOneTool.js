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
        </div>
    );
};

export default ToolsOneTool;

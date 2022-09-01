import { useState } from "react";

const ReasonsWhyOneReason = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="reasonWrap">
                <div>
                    <h3>
                        <span className="headlines_stroke">
                            0{props.id + 1}
                        </span>
                    </h3>
                    <h3
                        style={{
                            textDecoration: isHovering
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {props.title}
                    </h3>
                </div>
                <p>+</p>
            </div>
            <div
                className={`openCard`}
                style={{
                    display: isHovering ? "inline-block" : "none",
                }}
            >
                <h3>
                    #0{props.id + 1} 
                    {props.title}
                </h3>
                <p>{props.reason}</p>
            </div>

            <style jsx>{`
                li {
                    position: relative;
                }
                li .reasonWrap {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 1% 0 0 0;
                    cursor: pointer;
                }
                li .reasonWrap div {
                    display: flex;
                }
                li .reasonWrap div h3 {
                    color: var(--clr-super-lila);
                }
                li .reasonWrap div h3 .headlines_stroke {
                    -webkit-text-stroke: 0.025em var(--clr-super-green);
                }
                li .reasonWrap div h3:first-of-type {
                    width: 130px;
                    font-size: var(--fs-700);
                }
                li .reasonWrap div .lineThrough {
                    text-decoration: line-through;
                }
                li .reasonWrap p {
                    font-size: var(--fs-600);
                    color: var(--clr-super-green);
                }
                li .openCard {
                    background-color: var(--clr-super-lila);
                    border-radius: 50px;
                    padding: 2%;
                    width: 50%;
                    position: absolute;
                    top: -50%;
                    right: 10%;
                    z-index: 5;
                    display: none;
                }
                li .openCard h3 {
                    color: var(--clr-super-white);
                    font-weight: 800;
                    margin: 0 0 5% 0;
                }
                li .openCard p {
                    color: var(--clr-super-white);
                }

            `}</style>
        </li>
    );
};

export default ReasonsWhyOneReason;
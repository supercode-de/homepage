const Stoerer_LiveOnline = (props) => {
    console.log(props);
    return ( 
        <div className="stoerer-wrapper">
            <div className="redDot"></div>
            <div>
                <p>live und online</p>
            </div>

            <style jsx>{`
                .stoerer-wrapper {
                    position: absolute;
                    top: ${props.stoererTopPos ? props.stoererTopPos : "54%"};
                    right: 5%;
                    background: var(--super-black);
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    padding: 20px 25px;
                    border-radius: 50px;
                }
                .redDot {
                    height: 27px;
                    width: 27px;
                    background: var(--super-red);
                    border-radius: 100px;
                    animation: glow 1s linear infinite alternate;
                }
                p {
                    color: var(--super-green);
                    font-family: "Neue_Machina_Ultrabold";
                    line-height: 0;
                    font-size: 25px;
                }

                @keyframes glow {
                    0% {
                        box-shadow: none;
                    }
                    100% {
                        box-shadow: 0px 0px 25px var(--super-red);
                    }
                }
            `}

            </style>
        </div>
    );
}

export default Stoerer_LiveOnline;
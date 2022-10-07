const ToolsOneToolMobile = ({ tool }) => {
    return (
        <section className="toolsMobile">
            <div className="tool">
                <img src={`/img/${tool.image}`} alt={tool.name} />
            </div>
            <div className="toolCard">
                <h5>{tool.name}</h5>
                <p>{tool.description}</p>
            </div>
            <style jsx>{`
                .toolsMobile {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 20px;
                }
                .toolCard {
                    background-color: var(--clr-super-white);
                    border-radius: 50px;
                    color: var(--super-lila);
                    padding: 5%;
                }
                .toolCard h5 {
                    margin: 0;
                }
                @media (max-width: 500px) {
                    .toolsMobile {
                        display: block;
                        margin-top: 50px;
                    }
                    .toolCard {
                        margin-top: 10px;
                        padding: 8%;
                    }
                } 
                @media (max-width: 425px) {
                    .tool {
                        width: 30%;
                    }
                    .tool img {
                        width: 100%;
                    }
                }

            `}</style>
        </section>
    );
}

export default ToolsOneToolMobile;
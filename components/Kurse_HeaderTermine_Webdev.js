const Kurse_HeaderTermine_Webdev = () => {
    return (
        <div id="header-termine">
            <div>
                <div className="termine-wrapper">
                    <div className="start-termin">
                        <img src="/img/FSHeader_Termine_Icon.png" alt="" />
                        <h2 className="line-through">12. Dezember</h2>
                    </div>
                    <div className="line-through">Anmeldeschluss bis 9. Dezember</div>
                    <div>Keine Plätze mehr verfügbar</div>
                </div>
            </div>
            <div>
                <div className="termine-wrapper">
                    <div className="start-termin">
                        <img src="/img/FSHeader_Termine_Icon.png" alt="" />
                        <h2>30. Januar</h2>
                    </div>
                    <div>Anmeldeschluss bis 27. Januar</div>
                </div>
            </div>
            <div>
                <div className="termine-wrapper">
                    <div className="start-termin">
                        <img src="/img/FSHeader_Termine_Icon.png" alt="" />
                        <h2>20. März</h2>
                    </div>
                    <div>Anmeldeschluss bis 17. März</div>
                </div>
            </div>
            <style jsx>{`
                #header-termine{
                    padding: 10vh 0;
                    background: var(--super-lila);
                    display:flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    color: white;
                }

                .line-through{
                    text-decoration: line-through;
                    text-decoration-color: var(--super-green);
                }

                .termine-wrapper div:nth-child(2){
                    margin-top: 15px;
                }

                .termine-wrapper .start-termin{
                    display:flex;
                    align-items: center;
                }

                .start-termin img{
                    width: 12px;
                }

                .start-termin h2{
                    margin: 0;
                    padding-left: 5px;
                    font-size: 2.2rem;
                }

                @media (max-width: 780px) {
                    #header-termine{
                        padding: 5vh 0 4vh 0;
                    }
                }
                @media(max-width: 425px) {
                    #header-termine {
                        flex-direction: column;
                        gap: 20px;
                        padding-left: 10%;
                    }
                }
            `}
            </style>
        </div>);
}

export default Kurse_HeaderTermine_Webdev;
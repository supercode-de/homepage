const FSHeaderTermine = () => {
    return (<div id="header-termine">
        <div>
            <div className="termine-wrapper">
                <div className="start-termin">
                    <img src="/img/FSHeader_Termine_Icon.png" alt="" />
                    <h2>21. März</h2>
                </div>
                <div>Anmeldeschluss bis zum 21. März</div>
            </div>
        </div>
        <div>
            <div className="termine-wrapper">
                <div className="start-termin">
                    <img src="/img/FSHeader_Termine_Icon.png" alt="" />
                    <h2>20. Juni</h2>
                </div>
                <div>Anmeldeschluss bis zum 20. Juni</div>
            </div>
        </div>
        <div>
            <div className="termine-wrapper">
                <div className="start-termin">
                    <img src="/img/FSHeader_Termine_Icon.png" alt="" />
                    <h2>26. September</h2>
                </div>
                <div>Anmeldeschluss bis zum 26. September</div>
            </div>
        </div>
        <style jsx>
            {`
                #header-termine{
                    padding: 10vh 0;
                    background: #5c3ede;
                    display:flex;
                    justify-content: space-evenly;
                    color: white;
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
            `}
        </style>
    </div>);
}

export default FSHeaderTermine;
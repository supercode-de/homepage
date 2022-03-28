const UXUIHeaderTermine = () => {
    return (<div id="header-termine">
        <div>
            <div className="termine-wrapper">
                <div className="start-termin">
                    <img src="/img/FSHeader_Termine_Icon_UXUI.png" alt="" />
                    <h2>18. Juli</h2>
                </div>
                <div>Anmeldeschluss bis 15. Juli</div>
            </div>
        </div>
        <div>
            <div className="termine-wrapper">
                <div className="start-termin">
                    <img src="/img/FSHeader_Termine_Icon_UXUI.png" alt="" />
                    <h2>26. September</h2>
                </div>
                <div>Anmeldeschluss bis 23. September</div>
            </div>
        </div>
        <div>
            <div className="termine-wrapper">
                <div className="start-termin">
                    <img src="/img/FSHeader_Termine_Icon_UXUI.png" alt="" />
                    <h2>21. November</h2>
                </div>
                <div>Anmeldeschluss bis 18. November</div>
            </div>
        </div>
        <style jsx>
            {`
                #header-termine{
                    padding: 10vh 0;
                    background: #42D8AC;
                    display:flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    // color: #ffda1a;
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

                @media (max-width: 1040px) {
                    .start-termin h2{
                        font-size: 1.8rem;
                    }

                    .termine-wrapper div:nth-child(2){
                        font-size: 14px;
                    }
                }

                @media (max-width: 780px) {
                    #header-termine{
                        padding: 5vh 0 1vh 0;
                    }

                    .termine-wrapper div:nth-child(2){
                        margin-bottom: 5vh;
                    }
                }

            `}
        </style>
    </div>);
}

export default UXUIHeaderTermine;
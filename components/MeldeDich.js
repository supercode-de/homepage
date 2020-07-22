import Button from "./small/Button"

const MeldeDich = () => {
    return (
        <div id="melde-dich">
            <h1>Melde dich noch heute, <br />oder mach mit bei unserem kostenlosen Workshop</h1>

            <div className="buttons">
                <Button href="/" text="TERMIN" />
                <Button href="/" text="WORKSHOP" />
            </div>
            <style jsx>{`
            #melde-dich {
                background: #5D3EDE;
                border: 12px solid #03000F;
                width: 80%;
                margin: 10vh auto;
            }
            h1 {
                font-size: 2em;
                color: #3DD7AC;
                text-align: center;
            }
            .buttons {
                text-align: center;
                margin-bottom: 2.68em
            }
            `}</style>
        </div>
    );
}

export default MeldeDich;
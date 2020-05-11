import Button from "./small/Button"

const MeldeDich = () => {
    return (
        <div id="melde-dich">
            <h1>Melde dich noch heute</h1>
            <div className="buttons">
                <Button href="/" text="BUTTON" />
                <Button href="/" text="BUTTON" />
            </div>
            <style jsx>{`
            #melde-dich {
                background: #5D3EDE;
                border: 12px solid #03000F;
                width: 80%;
                margin: 10vh auto;
            }
            h1 {
                font-size: 4em;
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
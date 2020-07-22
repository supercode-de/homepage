import Button from "./small/Button"

const HeaderCallToAction = () => {
    return (
        <div id="header-call">
            <h2>Lerne Programmieren und werde Junior <br /> Full-Stack Web-Developer*in! <br />– Jetzt auch online!</h2>

            <style jsx>{`
            #header-call {
                background: #5D3EDE;
                color: #3DD7AC;
                padding: 7vh 0;
                text-align: center;
                position: relative;
            }
            h2 {
                margin: 0 ;
                
            }
            
        `}</style>
        </div>
    );
}

export default HeaderCallToAction;
import Button from "./small/Button"

const HeaderCallToAction = () => {
    return (
        <div id="header-call">
            <h2>Sag uns wer du bist, und wir sagen dir was zu dir passt.</h2>
            <Button href="/" text="TYPEFORM" />
            <style jsx>{`
            #header-call {
                background: #5D3EDE;
                color: #3DD7AC;
                padding: 5vh 0;
                text-align: center;
            }
            h2 {
                margin: 0 0 1rem;
                
            }
            
        `}</style>
        </div>
    );
}

export default HeaderCallToAction;
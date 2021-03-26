import { useWindowSize } from "../components/functions/windowSize";
export default function Tryit(props) {
    if (process.browser) {
        const width = useWindowSize().width / 12;
        return (
            <div className="container">
                <div id="content">
                    <iframe src="https://tryit.supercode.de/"></iframe>
                </div>
                <style jsx>{`
                    #content iframe {
                        position: fixed;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        width: 100%;
                        border: none;
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                        z-index: 99;
                        height: 100%;
                    }
                `}</style>
            </div>
        );
    } else {
        return "";
    }
}

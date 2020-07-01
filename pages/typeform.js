import Layout from "../components/Layout";
import Link from "next/link";

const Typeform = (props) => {
    return (
        <Layout oneComponent={true}>
            <div id="typeform" >
                <Link href="/"><a></a></Link>
                <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://georg067469.typeform.com/to/bKVLnV"></iframe>
                <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>

                <style jsx>{`
                #typeform {
                    min-height: 100vh;
                    background: #03000F;
                    color: #3DD7AC;
                }
                a {
                    position: absolute;
                    top: 50px;
                    right: 50px;
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    overflow: hidden;
                    transition: transform .5s linear;
                    z-index: 500;
                }
                a::before, a::after {
                    content: '';
                    position: absolute;
                    height: 4px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -1px;
                    background: #fff;
                }
                a::before {
                    transform: rotate(-45deg);
                }
                a::after {
                    transform: rotate(45deg);
                }
                a:hover {
                    transform: rotate(180deg);
                }
                iframe{ position: absolute; left:0; right:0; bottom:0; top:0px; border:0; }
            `}</style>
            </div>
        </Layout >
    );
}

export default Typeform;

import Popup from 'reactjs-popup';
const Typeform = (props) => {
    return (
        <>
            <Popup trigger={<button> JETZT BEWERBEN</button>} position=" center">



                <div id="typeform" >
                    <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/TkOb8Jcw"></iframe>
                    <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
                </div>

            </Popup>
            <style jsx>{`
                #typeform {
                    position: fixed;
                    top:10%;
                    left: 10%;
                    width: 80%;
                    height: 80vh;
                    color: #3DD7AC;
                }
                a {
                    position: absolute;
                    top: 50px;
                    right: 50px;
                    display: inline-block;
                    width: 450px;
                    height: 50px;
                    overflow-x: hidden;
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
                button {
                    margin: 2em 1em;
                    font-family: 'Fira Sans', sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 16px;
                    text-align: center;
                    letter-spacing: 3.5px;
                    text-transform: uppercase;
                    padding: 18px 32px;
                    background: transparent;
                    border: 2px solid #3DD7AC;
                    color: #fff;
                    justify-self: center;
                    display:inline-block;
                    width:620px;
                    outline: none;
                  }
                  button:hover{
                    color:#5d3ede;
                    background:#3DD7AC;
                }
                iframe{ position: absolute; left:0; right:0; bottom:0; top:0px; border:0; }
                @media (max-width: 768px) {
                    button{
                        width:420px
                    }
                  }
                  @media (max-width: 568px) {
                    button{
                        width:230px
                    }
                  }
            `}</style>
        </>


    );
}

export default Typeform;
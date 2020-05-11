import Link from 'next/link'
const Button = (props) => {
    return (
        <Link href={props.href}>
            <a>
                {props.text}
                <style jsx>{`
            a {
                display:inline-block;
                color: #fff;
                text-decoration: none;
                text-transform: uppercase;
                padding: 5px 10px;
                border: 3px solid #fff;
                font-size: .9em;
                font-weight: 200;
                margin: 10px;
                transition: top .5s linear, box-shadow .5s linear, left .5s linear;
                box-shadow: 0 0 0 0 transparent;
                position: relative;
                top: 0;
                left: 0;
                text-align: center;
            }
            a:hover {
                // margin: 10px 5px 15px 10px;
                // margin: 10px 10px 15px 15px;
                box-shadow: -5px 5px 0 0 #fff;
                top: -5px;
                left: 5px;
            }
    `}</style>
            </a>
        </Link>
    );
}

export default Button;
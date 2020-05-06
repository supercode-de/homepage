import Link from 'next/link'
const Button = (props) => {
    return (
        <Link href={props.href}>
            <a>
                {props.text}
                <style jsx>{`
            a {
                color: #fff;
                text-decoration: none;
                text-transform: uppercase;
                padding: 5px;
                border: 3px solid #fff;
                font-size: .9em;
                font-weight: 200;
                margin: 10px;
                transition: margin .5s linear, box-shadow .5s linear;
                box-shadow: 0 0 0 0 transparent;
            }
            a:hover {
                margin: 10px 5px 15px 10px;
                box-shadow: -5px 5px 0 0 #fff;
            }
    `}</style>
            </a>
        </Link>
    );
}

export default Button;
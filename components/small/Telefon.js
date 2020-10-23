// Der Komponente wird mit color="" eine beliebige Farbe (hex, rgba, benannt) übergeben. Als Fallback ist #fff hinterlegt.

const Telefon = (props) => {
    return (
        <div className="aside">
            <a href="tel:+4921178172330">
                📞 +49 211 7817 233-0
            </a>
            <style jsx>{`
            .aside {
                font-size: .9rem;
                position: absolute;
                transform: rotate(-90deg);
                transform-origin: right;
                right: 3%;
                top: 30vh;
                color: ${props.color || "#fff"}
            }
            a {
                color: inherit;
                text-decoration: none;
            }
          `}</style>
        </div>

    );
}
export default Telefon;
// Der Komponente wird mit color="" eine beliebige Farbe (hex, rgba, benannt) übergeben. Als Fallback ist #fff hinterlegt.

const Telefon = (props) => {
    console.log(props.color);
    return (
        <div className="aside">
            📞 +49 211 7817 233-0
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
          `}</style>
        </div>

    );
}
export default Telefon;
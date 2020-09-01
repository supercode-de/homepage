const Telefon = () => {
    return (
        <div className="aside">
            📞 +49 211 7817 233-0
            <style jsx>{`
            .aside {
                position: absolute;
                transform: rotate(-90deg);
                transform-origin: right;
                right: 3%;
                top: 30vh;
                color: #fff
            }
          `}</style>
        </div>

    );
}

export default Telefon;
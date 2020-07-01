const ButtonOne = () => ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()}> <img src="/img/arrow-left.svg" alt="arrow-left" /> <style jsx>{`
    img {
        height: 10px;
    }
    `}</style></button>;
};
const ButtonTwo = () => ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()}> <img src="/img/arrow-right.svg" alt="arrow-right" /> <style jsx>{`img {
        height: 10px;
    }`}</style></button>;
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group">
            HALLO
            <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <ButtonTwo onClick={() => next()} />
            {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
            <style jsx>{`
                .carousel-button-group {
                    
                    background: red;
                }

            `}</style>
        </div>
    );
};
export default ButtonGroup
const AlumniSectionVideoCard = (props) => {
    const { name, posterSrc, videoSrc} = props
    return (
        <div className="alumniSection__videoArea__card">
            <video controls poster={posterSrc} >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h5>{name}</h5>
            <style jsx>{`
                video {
                    width: 100%;
                    border-radius: 15px;
                }
                .alumniSection__videoArea__card video:hover{
                    box-shadow: 0px 0px 35px var(--clr-super-black--shadow);
                }
                .alumniSection__videoArea__card p {
                    font-size: clamp(1rem, 0.8875rem + 0.5625vw, 1.5625rem);
                }
                .alumniSection__videoArea__card h5 {
                    font-size: var(--fs-600);
                    margin: 5% 0 0 0;
                    line-height: 39px;
                }
            
                @media only screen and (max-width: 768px) {
                    .alumniSection__videoArea__card {
                        width: 80%;
                        flex-shrink: 0;
                        scroll-snap-align: center;  
                    }
                }
                @media (max-width: 425px) {
                    .alumniSection__videoArea__card {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default AlumniSectionVideoCard;
const AlumniSectionVideoCard = (props) => {
    const { name, posterSrc, videoSrc, jobtitel} = props
    return (
        <div className="alumniSection__videoArea__card">
            <video controls poster={posterSrc} >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h5>{name}</h5>
            <p>{jobtitel}</p>

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
                
            
                @media only screen and (max-width: 768px) {
                    .alumniSection__videoArea__card {
                        width: 80%;
                        flex-shrink: 0;
                        scroll-snap-align: center;  
                    }
                }
            `}</style>
        </div>
    );
};

export default AlumniSectionVideoCard;
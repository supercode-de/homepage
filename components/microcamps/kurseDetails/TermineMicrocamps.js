import Link from 'next/link';
const TermineMicrocamps = (props) => {
    return (
        <div className="single-card">
            <div className="left-wrapper">
                <h4>{props.kursTitel}</h4>
                <div className="info-text">
                    <p>Live Class</p>
                    <p>{props.datum}</p>
                    <p>{props.tage} {props.uhrzeit}</p>
                </div>

                <p className="places-wr">
                    <span className="circle">max. 8 Plätze</span>
                </p>
                <Link href="/" passHref>
                    <a className="btn">Jetzt anmelden</a>
                </Link>
            </div>
            <div className="right-wrapper">
                <img src={props.trainerImage} alt={props.trainerName} />
                <h5>{props.trainerName}</h5>
                <h6>{props.trainerTitel}</h6>
            </div>

            <style jsx>{`
                .single-card {
                    display: inline-flex;
                    align-items: center;
                    background-color: var(--clr-super-lila);
                    border-radius: 25px;
                    color: var(--clr-super-white);
                    padding: 3.125rem;
                    gap: 50px;
                }
        
        
                .left-wrapper .info-text{
                    margin: 0 0 0.625rem 0;
                }
        
                .left-wrapper .info-text h4 {
                    margin: 0 0 0.625rem 0;
                    font-size: var(--fs-300);
                }
        
                .left-wrapper .info-text p {
                    font-size: var(--fs-200);
                }
        
                .btn{
                    font-size: var(--fs-300);
                    background-color: var(--clr-super-green);
                    color: var(--clr-super-lila);
                    margin-top: 5%;
                }
        
                .left-wrapper .places-wr {
                    margin: 10% 0;
                    font-size: var(--fs-300);
                }
        
                .left-wrapper .places-wr .circle {
                    background: url("/img/microcamps/world_circle.svg") center center/contain no-repeat;
                    padding: var(--fs-300);
                }
        
                .right-wrapper img {
                    height: 120px;
                    width: 120px;
                    object-fit: cover;
                    border-radius: 100%;
                    margin-bottom: 35px;
                }
        
                .right-wrapper h5,
                .right-wrapper h6 {
                    font-size: var(--fs-300);
                }
        
                .right-wrapper h6  {
                    font-weight: 400;
                    margin: 0;
                }
            `}</style>
        </div>
    );
}

export default TermineMicrocamps;
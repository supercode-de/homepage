import React, { useState, useEffect } from 'react';


const UnserCampus = (props) => {
    const size = useWindowSize();
    const width = size.width / 12
    return (
        <div id="unser-campus">
            <img src="https://unsplash.it/300/200" alt="" />
            <div className="text-one">
                <h1>
                    {width}
                    Unser Campus ist <span>mehr</span>
                </h1>
                <p>Unsere Schule befindet sich im Super7000. Auf über 1.000 qm arbeiten mehr als 50 Unternehmen in offenen Büros und in Teambüros inklusive Telefonzellen, Meetingräumen, Bällebad und der legendären Eventfläche auf echtem Kunstrasen für Workshops, Meet-Ups & Co. Wir nutzen dieses einzigartige Umfeld, um Dich noch schneller in passende Jobs zu vermitteln.</p>
                <p className="hash-tag">#superwinwin</p>
            </div>
            <img src="https://unsplash.it/300/200" alt="" />
            <div className="text-two">
                <p>SuperCode bietet ein arbeitsmarktlich aussichtsreiches und praxisnahes Bildungsangebot im IT-Bereich mit methodisch modernen und hohem Einsatz von Lehrpersonal. Hervorzuheben ist die hervorragende Branchenvernetzung sowie die innovative Praxiskompetenz der Geschäftsführung und des Teams.</p>
                <p className="hash-tag"># Certqua Bonn</p>
            </div>
            <style jsx>{`
                #unser-campus {
                    background-color: #fff;
                    background-image:
                      linear-gradient(
                        to right,
                        rgba(255, 0, 0, 0.25) 0,
                        rgba(255, 0, 0, 0.25) 1px,
                        transparent 1px,
                        transparent 100%
                      ),
                      linear-gradient(
                        to bottom,
                        rgba(255, 0, 0, 0.25) 0,
                        rgba(255, 0, 0, 0.25) 1px,
                        transparent 1px,
                        transparent 100%
                      )
                    ;
                    background-position: 0 0, 0 0;
                    background-size: ${width}px ${width}px;
                  }
            `}</style>
        </div>
    );
}

export default UnserCampus;

function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}
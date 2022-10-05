import React, { useEffect, useRef } from "react";

const HubspotNoKurseForm = () => {
    const shouldLog = useRef(true)
    useEffect(() => {
        if (shouldLog.current) {
            shouldLog.current = false
            const script = document.createElement('script');
            script.src = 'https://js.hsforms.net/forms/v2.js';
            document.body.appendChild(script);

            script.addEventListener('load', () => {
                // @TS-ignore
                if (window.hbspt) {
                    // @TS-ignore
                    window.hbspt.forms.create({
                        portalId: '5807040',
                        formId: 'e7a9bd57-98eb-4480-8a29-7d69d9bb15d5',
                        target: '#hubspotForm'
                    })
                }
            });
        }
    }, []);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );

}

export default HubspotNoKurseForm;
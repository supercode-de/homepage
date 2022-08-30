import React, { useEffect, useRef } from "react";

const HubspotNewsletterForm = () => {
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
                        formId: '9384135a-d6de-4c51-9497-c2d167e58afd',
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

export default HubspotNewsletterForm;
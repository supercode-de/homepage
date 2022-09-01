import React from 'react'
import Head from 'next/head'

import FACEBOOK_PIXEL_1 from './pixel-1'

const facebookIndex = ({name}) => {
    return (
        <Head>
            {name === 'FACEBOOK_PIXEL_1' && <FACEBOOK_PIXEL_1 />}
        </Head>
    )
}

export default facebookIndex
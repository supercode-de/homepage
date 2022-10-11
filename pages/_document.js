import { Html, Head, Main, NextScript } from 'next/document'
// import Script from 'next/script'

class MyDocument extends Docuemnt {
    render() {
        return (
            <Html>
                <Head>
                    {/* <Script src="https://static.clickskeks.at/18/d6/18d60b81-354e-4e9b-b119-078e881c7695/bundle.js" type="application/javascript" strategy="beforeInteractive"></Script>
                    <Script src="https://static.clickskeks.at/18/d6/18d60b81-354e-4e9b-b119-078e881c7695/bundle.js" type="application/javascript" strategy="beforeInteractive"></Script> */}
                    <script src="https://static.clickskeks.at/18/d6/18d60b81-354e-4e9b-b119-078e881c7695/bundle.js" type="application/javascript" strategy="beforeInteractive"></script>
                    <script src="https://static.clickskeks.at/18/d6/18d60b81-354e-4e9b-b119-078e881c7695/bundle.js" type="application/javascript" strategy="beforeInteractive"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}
export default MyDocument
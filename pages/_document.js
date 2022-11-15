import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <script src="https://static.clickskeks.at/18/d6/18d60b81-354e-4e9b-b119-078e881c7695/bundle.js" type="application/javascript" async defer ></script>
                    <script id="clickskeks-disclaimer-script" src="https://static.clickskeks.at/18/d6/18d60b81-354e-4e9b-b119-078e881c7695/disclaimer.js" type="application/javascript" async defer></script> */}
                    <script src="https://mein.clickskeks.at/app.js?apiKey=a6c30a45830ad4590dd9d592ec5214299af4dc0a52128bab&amp;domain=633ffb1968d46a7622050914" referrerPolicy="origin"></script>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
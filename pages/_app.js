import 'react-multi-carousel/lib/styles.css';
import Router from "next/router";
// import withFBQ from "next-fbq";
import withAnalytics from "next-analytics";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
// export default withFBQ("353903998812058", Router)(MyApp);
export default withAnalytics(Router, { ga: "UA-140157887-1", fbq: "353903998812058" })(MyApp);
import 'react-multi-carousel/lib/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
library.add(faChevronDown);
import Router from 'next/router';
// import withFBQ from "next-fbq";
import withAnalytics from 'next-analytics';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5773QJD' });
  }, []);
  return <Component {...pageProps} />;
}
// export default withFBQ("353903998812058", Router)(MyApp);
export default withAnalytics(Router, {
  ga: 'UA-140157887-1',
  fbq: '353903998812058',
})(MyApp);

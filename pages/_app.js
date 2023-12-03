import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import '../styles/flaticon.css';
import '../styles/fontawesome.min.css';
import "react-accessible-accordion/dist/fancy-example.css";
import 'react-tabs/style/react-tabs.css';
import "swiper/css/bundle";

// Globals CSS
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>CJ Sports Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
        CJ Sports Agency
        </title>
        <meta
          name="description"
          content="CJ Sports Agency."
        />
        <meta name="keywords" content="CJ" />
        <meta property="og:title" content="CJ Sports Agency " />
        <meta
          property="og:description"
          content="Soccer player agency"
        />
        <meta property="og:image" content="http://cjsportsagency.com/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.cjsportsagency.com" />
        <meta property="og:site_name" content="cjsportsagency" />
        <meta name="author" content="joseluiscl@gmail.com" />

      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop />
    </>
  );
}

export default MyApp;

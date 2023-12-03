import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap"
            rel="preconnect"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
            rel="preconnect"
          />
          <meta name="description" content="CJ Sport Agency." />
          <meta name="keywords" content="CJ" />
          <meta property="og:description" content="Soccer player agency" />
          <meta
            property="og:image"
            content="http://cjsportsagency.com/images/logo.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="www.cjsportsagency.com" />
          <meta property="og:site_name" content="cjsportsagency" />
          <meta name="author" content="joseluiscl@gmail.com" />
          <link rel="preconnect" type="image/png" href="images/favicon.png" />
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

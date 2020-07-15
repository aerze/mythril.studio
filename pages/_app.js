import Head from "next/head";
import "../styles/main.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, user-scalable=yes"
        />
        <title>The Web.Gallery - Main Entrance</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Playfair+Display:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

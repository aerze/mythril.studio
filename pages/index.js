import Head from "next/head";

const Home = () => (
  <React.Fragment>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, user-scalable=yes"
      />
      <title>The Web.Gallery - Main Entrance</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <div className="container">
      <header>
        <h2 className=" subtitle">WELCOME TO</h2>
        <h1 className=" title">The Web</h1>
        <h1 className=" title">.Gallery</h1>
      </header>
      <main>
        <p className="description">
          A curated space dedicated to art made possible by the web.
        </p>
      </main>

      <div className="placard">
        <h4 className="placard-title">HOW TO NAVIGATE:</h4>
        <p className="placard-body">
          Simply <strong>scroll down</strong> to begin browsing through "The
          Web".
          {/* Our Gallery is organized using a <strong>tag system</strong> you can
          use to make your own way through or just <strong>scroll down</strong>{" "}
          to begin browsing. */}
        </p>
      </div>
    </div>
    <style jsx>{`
      .container {
        height: 100vh;
        max-width: 400px;

        display: flex;
        flex-direction: column;
        padding: 2rem;
      }

      header {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }

      .subtitle {
        margin: 10px auto 10px 0;
        display: inline-block;
        padding: 4px 10px;

        background: black;
        color: white;

        font-size: 12px;
        font-weight: 700;
      }

      .title {
        margin: 0;
        font-family: "Playfair Display", serif;
        font-size: 3rem;
        font-weight: 300;
        line-height: 3rem;
      }

      .description {
        margin: 0;
        font-family: "Open Sans", sans-serif;
        font-size: 24px;
        font-weight: 300;
        line-height: 1.2;
      }

      .placard {
        margin-top: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .placard-title {
        margin: 0;
        display: inline-block;
        padding: 4px 10px;
        background: black;
        color: white;
        font-size: 12px;
        font-weight: 700;
      }

      .placard-body {
        border: 2px solid black;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        margin: 0;
        padding: 1em;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.5;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: "Open Sans", -apple-system, BlinkMacSystemFont, Segoe UI,
          Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </React.Fragment>
);

export default Home;

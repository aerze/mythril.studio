import Title from "../components/title/title";
import Subtitle from "../components/subtitle/subtitle";
import Caption from "../components/caption/caption";
import Placard from "../components/placard/placard";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <header className={styles.header}>
          <Subtitle className={styles.subtitle}>WELCOME TO</Subtitle>
          <Title>The Web</Title>
          <Title>.Gallery</Title>
        </header>
        <main>
          <Caption>
            A curated space dedicated to art made possible by the web.
          </Caption>
        </main>

        <Placard className={styles.placard} title="LATEST UPDATE:">
          We are currently searching for artists to exhibit. If you would like
          your art displayed here, let us know through Twitter{" "}
          <a href="https://twitter.com/theweb_gallery">
            <strong>@theweb_gallery</strong>
          </a>
        </Placard>

        {/* <Placard title="HOW TO NAVIGATE:">
        Simply <strong>scroll down</strong> to begin browsing through "The Web".
        <br />
        Our Gallery is organized using a <strong>tag system</strong> you can use
        to make your own way through or just <strong>scroll down</strong> to
        begin browsing.
      </Placard> */}
      </div>
    </React.Fragment>
  );
}

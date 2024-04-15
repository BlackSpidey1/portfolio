import styles from "./Home.module.scss";
import TypeIt from "typeit-react";

import { Link } from "react-router-dom";

export default function Home() {
  // const abs = new TypeIt("#companionMethods", {
  //   speed: 50,
  //   waitUntilVisible: true,
  // })
  //   .type("Nvver", { delay: 300 })
  //   .move(-3)
  //   .delete(1)
  //   .type("e")
  //   .move(null, { to: "END" })
  //   .type(" let yees")
  //   .pause(300)
  //   .delete(2)
  //   .type("sterday use up to muc")
  //   .move(-4)
  //   .type("o")
  //   .move(null, { to: "END" })
  //   .type("h of today.")
  //   .pause(500)
  //   .break({ delay: 500 })
  //   .break({ delay: 500 })
  //   .type("<em>- Will Rogers</em>")
  //   .go();

  return (
    <>
      <section className={styles.section__one}>
        <div className={styles.section__one_content}>
          <h1 className={styles.section__one_title}>
            <TypeIt
              options={{
                cursor: false,
                loop: false,
                speed: 100,
                deleteSpeed: 300,
                startDelete: true,
              }}
            >
              <span className={styles.section__one_span_one}>Hi all. I am</span>
              Black Spidey
              <span className={styles.section__one_span_two}>
                &gt; Front-end developer
              </span>
            </TypeIt>
          </h1>
          <div className={styles.section__one_information}>
            <p className={styles.section__one_text}>
              // you can also see it on my Github page
            </p>
            <Link
              to="https://github.com/BlackSpidey1"
              className={styles.section__one_link}
            >
              <span>const</span>
              <span>githubLink</span> =
              <span>“https://github.com/BlackSpidey1”</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

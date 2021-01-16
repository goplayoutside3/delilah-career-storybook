import Head from 'next/head';
import { useEffect } from 'react';
import classes from 'classnames';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../styles/home.module.scss';

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const allPages = Array.from(document.getElementsByClassName('book-page'));

    allPages.forEach((page, index) => {
      gsap.set(page, { z: index === 0 ? 13 : -index * 1 })
      if (index === 11) return false
      gsap.to(page, {
        rotateY: `-=${180 - index / 2}`,
        scrollTrigger: {
          scrub: 1,
          start: () => index * (window.innerHeight * 0.4),
          end: () => (index + 1) * (window.innerHeight * 0.4),
        },
      })
      gsap.to(page, {
        z: index === 0 ? -13 : index,
        scrollTrigger: {
          scrub: 1,
          start: () => index * (window.innerHeight * 0.4),
          end: () => (index + 0.5) * (window.innerHeight * 0.4),
        },
      })
    })
  }, []);

  return (
    <div>
      <Head>
        <title>Delilah's Career Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Storybook</h1>

        <div id={styles['book-animation']}>
          <div id="book" className={styles.book}>
            <div
              className={classes(
                styles.page,
                styles.book,
                styles.cover,
                styles.front,
                'book-page'
              )}
              style={{ '--page-index': 1 }}
            >
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div>SCROLL DOWN</div>
              </div>
              <div
                className={classes(styles.page, styles.half, styles.back)}
              ></div>
            </div>

            <div
              className={classes(styles.page, styles.book, 'book-page')}
              style={{ '--page-index': 2 }}
            >
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>
                  <p>Keep Scrolling</p>
                </div>
                <div className={styles.number}>1</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div className={styles.content}>
                  <p>Etc...</p>
                </div>
                <div className={styles.number}>2</div>
              </div>
            </div>

            <div
              className={classes(styles.page, styles.book, 'book-page')}
              style={{ '--page-index': 3 }}
            >
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>
                  <p>Keep scrolling...</p>
                </div>
                <div className={styles.number}>3</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div className={styles.content}>
                  <p>Etc...</p>
                </div>
                <div className={styles.number}>4</div>
              </div>
            </div>

            <div
              className={classes(styles.page, styles.book, 'book-page')}
              style={{ '--page-index': 4 }}
            >
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>
                  <p>Etc...</p>
                </div>
                <div className={styles.number}>5</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div className={styles.content}>
                  <p>Etc...</p>
                </div>
                <div className={styles.number}>6</div>
              </div>
            </div>

            <div
              className={classes(styles.page, styles.book, 'book-page')}
              style={{ '--page-index': 5 }}
            >
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>Etc...</div>
                <div className={styles.number}>7</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div className={styles.content}>Etc...</div>
                <div className={styles.number}>8</div>
              </div>
            </div>

            <div
              className={classes(styles.page, styles.book, 'book-page')}
              style={{ '--page-index': 6 }}
            >
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>Etc...</div>
                <div className={styles.number}>9</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div className={styles.content}>Etc...</div>
                <div className={styles.number}>10</div>
              </div>
            </div>

            <div
              className={classes(
                styles.page,
                styles.book,
                styles.cover,
                styles.back,
                'book-page'
              )}
              style={{ '--page-index': 12 }}
            ></div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

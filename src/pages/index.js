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
      gsap.set(page, { z: -index * 1 });

      gsap.to(page, {
        rotateY: `-=${180 - index / 2}`,
        scrollTrigger: {
          scrub: 1,
          start: () => index * (window.innerHeight * 0.4),
          end: () => (index + 1) * (window.innerHeight * 0.4),
        },
      });
      gsap.to(page, {
        z: index,
        scrollTrigger: {
          scrub: 1,
          start: () => index * (window.innerHeight * 0.4),
          end: () => (index + 0.5) * (window.innerHeight * 0.4),
        },
      });
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Delilah's Career Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id={styles['book-animation']}>
          <div className={classes(styles.book, styles.shadow)}>Behind</div>
          <div id={styles.book} className={styles.book}>

            <div
              className={classes(
                styles.page,
                styles.book,
                styles.cover,
                styles.front,
                'book-page'
              )}
            >
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div>SCROLL DOWN</div>
              </div>
              <div
                className={classes(styles.page, styles.half, styles.back)}
              ></div>
            </div>

            <div className={classes(styles.page, styles.book, 'book-page')}>
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

            <div className={classes(styles.page, styles.book, 'book-page')}>
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

            <div className={classes(styles.page, styles.book, 'book-page')}>
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

            <div className={classes(styles.page, styles.book, 'book-page')}>
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>Etc...</div>
                <div className={styles.number}>7</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div className={styles.content}>Etc...</div>
                <div className={styles.number}>8</div>
              </div>
            </div>

            <div className={classes(styles.page, styles.book, 'book-page')}>
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
            />

          </div>
        </div>
      </main>
    </div>
  );
}

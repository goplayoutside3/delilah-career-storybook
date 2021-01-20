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
        <title>Delilah's Career</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id={styles['book-animation']}>
          <div className={classes(styles.scroll, styles.book)}>
            <p>SCROLL DOWN</p>
            <img className={styles.down} src="/images/down.svg" />
          </div>
          <div className={classes(styles.book, styles.shadow)} />
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
                <div className={styles.content}>
                  <h1>I'm Delilah,</h1>
                  <h2 className={classes('h2', styles.subtext)}>
                    a fullstack web developer
                  </h2>
                </div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div className={styles.content}>
                  <p>KEEP SCROLLING</p>
                </div>
              </div>
            </div>

            <div className={classes(styles.page, styles.book, 'book-page')}>
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>
                  <h2 className="h2">A Journey to Web Development</h2>
                  <p>
                    This app was built as part of{' '}
                    <a href="https://www.mintbean.io/" target="_blank">
                      Mint Bean
                    </a>
                    's weekly hackathon. It utilizes{' '}
                    <a href="https://nextjs.org/" target="_blank">
                      Next.js
                    </a>
                    ,{' '}
                    <a href="https://greensock.com/gsap/" target="_blank">
                      GSAP
                    </a>
                    , and{' '}
                    <a href="https://sass-lang.com/" target="_blank">
                      SASS
                    </a>
                    .
                  </p>
                  <p>
                    Check out the hackathon requirements{' '}
                    <a
                      href="https://www.mintbean.io/meets/9e5bf4a2-5059-4ced-b893-f8da102c7a35"
                      target="_blank"
                    >
                      here
                    </a>
                    !
                  </p>
                  <p>
                    Book animation is adapted for React.js from{' '}
                    <a href="https://codepen.io/jh3y" target="_blank">
                      jhey
                    </a>
                    's{' '}
                    <a
                      href="https://codepen.io/jh3y/pen/VweZryJ"
                      target="_blank"
                    >
                      Codepen
                    </a>
                    .
                  </p>
                </div>
                <div className={styles.number}>1</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div
                  className={classes(
                    styles.content,
                    styles.illustration,
                    styles.canoe
                  )}
                />
                <div className={styles.number}>2</div>
              </div>
            </div>

            <div className={classes(styles.page, styles.book, 'book-page')}>
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>
                  <p className={styles.years}>2009 - 2018</p>
                  <h2 className="h2">Wilderness Trip Leader</h2>
                  <p>Details here</p>
                </div>
                <div className={styles.number}>3</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div
                  className={classes(
                    styles.content,
                    styles.illustration,
                    styles.wading
                  )}
                />
                <div className={styles.number}>4</div>
              </div>
            </div>

            <div className={classes(styles.page, styles.book, 'book-page')}>
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>
                  <p>2014 - 2016</p>
                  <h2 className="h2">Master of Science in Aquatic Biology</h2>
                  <p>Details here</p>
                </div>
                <div className={styles.number}>5</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div
                  className={classes(
                    styles.content,
                    styles.illustration,
                    styles.city
                  )}
                />
                <div className={styles.number}>6</div>
              </div>
            </div>

            <div className={classes(styles.page, styles.book, 'book-page')}>
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>
                  <p>2018 - 2019</p>
                  <h2 className="h2">Fullstack Academy of Code</h2>
                  <p>Details here</p>
                </div>
                <div className={styles.number}>7</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div
                  className={classes(
                    styles.content,
                    styles.illustration,
                    styles.globe
                  )}
                />
                <div className={styles.number}>8</div>
              </div>
            </div>

            <div className={classes(styles.page, styles.book, 'book-page')}>
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>
                  <p>2019 - 2020</p>
                  <h2 className="h2">Web Developer at Reach Creative</h2>
                  <p>Details here</p>
                </div>
                <div className={styles.number}>9</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div
                  className={classes(
                    styles.content,
                    styles.illustration,
                    styles.adler
                  )}
                />
                <div className={styles.number}>10</div>
              </div>
            </div>

            <div className={classes(styles.page, styles.book, 'book-page')}>
              <div className={classes(styles.page, styles.half, styles.front)}>
                <div className={styles.content}>
                  <p>2021 - Present</p>
                  <h2 className="h2">Web Developer at Adler Planetarium</h2>
                  <p>Details here</p>
                </div>
                <div className={styles.number}>11</div>
              </div>
              <div className={classes(styles.page, styles.half, styles.back)}>
                <div className={styles.content}>
                  <h2 className="h2">Connect with me!</h2>
                  <ul className={styles.socials}>
                    <li className={styles.porfolio}>
                      <a href="https://delilahclement.dev/" target="_blank">
                        Portfolio Site
                      </a>
                    </li>
                    <li className={styles.linkedin}>
                      <a
                        href="https://www.linkedin.com/in/delilahclement/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li className={styles.github}>
                      <a
                        href="https://github.com/goplayoutside3"
                        target="_blank"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.number}>12</div>
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
            >
              <div className={classes(styles.content, styles['end-cover'])}>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

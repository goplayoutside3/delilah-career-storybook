import Head from 'next/head';
import { useEffect } from 'react';
import classes from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Delilah's Career Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Storybook</h1>
      </main>

      <footer></footer>
    </div>
  );
}

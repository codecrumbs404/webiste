// pages/under-construction.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './UnderConstruction.module.css';

const UnderConstruction: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site Under Construction</title>
        <meta name="description" content="This site is under construction. Please check back soon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>We're Under Construction</h1>
        <p className={styles.description}>
          Our website is currently being built. Please come back soon for updates!
        </p>
        <Image 
          src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" 
          alt="Under Construction Illustration"  
          width={500} // Set width relative to desired aspect ratio
          height={500} // Set height relative to desired aspect ratio
          layout="responsive" // Make the image responsive
        />
      </main>

        <a
          href="mailto:contact@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          Contact Us
        </a>
      </div>
    
  );
}

export default UnderConstruction;

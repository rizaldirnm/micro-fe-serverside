import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  console.log({
    rout: router.basePath,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Product App</h1>
        <button
          onClick={() => {
            window.location.pathname = "/";
          }}
        >
          Go Home
        </button>
      </main>
    </div>
  );
};

export default Home;

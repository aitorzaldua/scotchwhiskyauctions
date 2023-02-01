import Head from 'next/head'
import styles from '../styles/Home.module.css';
import NavBar from './NavBar';
import Welcome from './Welcome';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scotch Whisky Auctions</title>
        <meta name="description" content="Scotch Whisky Auctions" />
        <link rel="icon" href="/glencairnIcon.png" />
      </Head>
      <div className="min-h-screen">
        <div className="bg-white">
          <NavBar />
          <Welcome />
        </div>
       
      </div>

    </div>
  )
}

import Head from 'next/head'
import Nav from '../components/Nav'
import { ServerLoadingNotification } from '../components/Notification'
import InsightSearch from '../components/InsightSearch'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Nav />
      <main className="Home">
        <div className="page">
          <div className="center">
            <h1>TransitHealth</h1>
            <p>Explore public transit and public health data across Chicago.</p>
          </div>
          <br />
          <div className="center">
            <InsightSearch />
          </div>
        </div>
      </main>
      <ServerLoadingNotification />
    </div>
  )
}

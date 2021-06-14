import Head from 'next/head'
import Nav from '../components/Nav'
import { ServerLoadingNotification } from '../components/Notification'

export default function About() {
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Nav />
      <main className="About">
        <div className="page">
          <h1>About</h1>
          <p>TransitHealth is developed by students at Scarlet Data Studio.</p>
        </div>
      </main>
      <ServerLoadingNotification />
    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import { ServerLoadingNotification } from '../components/Notification'

export default function Explorer() {
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="Explorer">
        <div className="page">
          <div className="center">
            <h1>Data Explorer</h1>
            <p>Select a view to explore public transit and public health metrics.</p>
            <br />
          </div>
          <div className="columns">
            <div className="column center">
              <h2>Timeline View</h2>
              <p>View data over time, on a weekly basis.</p>
              <br />
              <Link href="/timeline">
                <a className="btn primary">Timeline View</a>
              </Link>
            </div>
            <div className="column PreviewImage">
              <img src="/transithealth/images/timeline_preview.png" alt="Preview image for timeline view." />
            </div>
          </div>
          <br />
          <div className="columns">
            <div className="column center">
              <h2>Scatter View</h2>
              <p>Compare different data and community areas.</p>
              <br />
              <Link href="/scatter">
                <a className="btn primary">Scatter View</a>
              </Link>
            </div>
            <div className="column PreviewImage">
              <img src="/transithealth/images/scatter_preview.png" alt="Preview image for scatter view." />
            </div>
          </div>
        </div>
      </main>
      <ServerLoadingNotification />
    </div>
  );
}

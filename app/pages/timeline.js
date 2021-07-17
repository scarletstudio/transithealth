import Head from 'next/head'
import Nav from '../components/Nav'
import TimelineExplorer from '../components/TimelineExplorer'
import { timelineExplorerDefaults } from '../site/metrics'
import { ServerLoadingNotification } from '../components/Notification'

export default function TimelineView() {
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Nav />
      <main className="Timeline">
        <div className="page">
          <div className="center">
            <h1>Timeline View</h1>
          </div>
          <br />
          <TimelineExplorer metrics={timelineExplorerDefaults.defaultMetrics} />
        </div>
      </main>
      <ServerLoadingNotification />
    </div>
  );
}

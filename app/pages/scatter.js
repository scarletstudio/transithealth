import fs from 'fs'
import Head from 'next/head'
import Nav from '../components/Nav'
import CommunityScatterExplorer from '../components/CommunityScatterExplorer'
import { ServerLoadingNotification } from '../components/Notification'

export async function getStaticProps() {
  const communityAreas = JSON.parse(fs.readFileSync(
    "./public/resources/community_area.json"
  ));
  return {
    props: {
      communityAreas,
    },
  };
}

export default function ScatterView({ communityAreas }) {
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Nav />
      <main className="Scatter">
        <div className="page">
          <div className="center">
            <h1>Scatter View</h1>
          </div>
          <CommunityScatterExplorer communityAreas={communityAreas} />
        </div>
      </main>
      <ServerLoadingNotification />
    </div>
  );
}

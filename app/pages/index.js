import fs from 'fs'
import Head from 'next/head'
import Nav from '../components/Nav'
import TotalTripsDemo from '../components/TotalTripsDemo'

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

export default function Home({ communityAreas }) {
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="Home">
        <div className="page">
          <h1>TransitHealth</h1>
          <TotalTripsDemo communityAreas={communityAreas} />
        </div>
      </main>
    </div>
  )
}

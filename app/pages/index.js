import fs from 'fs'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import ChicagoMap from '../components/ChicagoMap'

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

const minAlpha = 0.05;

function getTripsByArea(rows) {
  const maxTrips = rows.reduce((maxTrips, val) => {
    return Math.max(maxTrips, val.total_trips);
  }, 0);
  const tripsByArea = rows.map((val) => {
    const alpha = val.total_trips / maxTrips;
    return {
      ...val,
      opacity: Math.max(alpha, minAlpha),
    };
  }).reduce((agg, val) => {
    agg[val.pickup_community_area] = val;
    return agg;
  }, {});
  return tripsByArea;
}

export default function Home({ communityAreas }) {
  const [ mapData, setMapData ] = useState(null);
  const [ clickArea, setClickArea ] = useState({});

  useEffect(() => {
    let isSubscribed = true;

    async function getData() {
      const req = await fetch(`${process.env.NEXT_PUBLIC_API}/rideshare/total_trips_by_pickup_area`);
      const res = await req.json();
      const tripsByArea = getTripsByArea(res);
      if (isSubscribed) {
        setMapData(tripsByArea);
      }      
    }

    getData();
    return () => isSubscribed = false;
  }, []);

  const clickRow = mapData && clickArea.number ? mapData[clickArea.number] : {};
  const tripsMsg = `${clickRow.total_trips ? clickRow.total_trips.toLocaleString() : "?"} total rideshare pickups.`;

  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="Home">
        <div className="page">
          <h1>TransitHealth</h1>
          <h2>Total Rideshare Trips</h2>
          <p>Pick a community area from the map.</p>
          <ChicagoMap
            data={mapData}
            communityAreas={communityAreas}
            height={400}
            defaultOpacity={1.0}
            onAreaClick={setClickArea}
          />
          <h3>{clickArea.name}</h3>
          <p>{clickArea.name ? tripsMsg : ""}</p>
        </div>
      </main>
    </div>
  )
}

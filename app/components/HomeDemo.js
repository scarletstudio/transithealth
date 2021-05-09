import { useState, useEffect } from 'react'
import ChicagoMap from '../components/ChicagoMap'

const minAlpha = 0.05;

function aggregateByArea(metrics) {
  const rows = metrics.map((val) => {
    const cases_per_thousand_trips = val.total_covid_cases / (val.rideshare_pickups_covid / 1000);
    return {
      ...val,
      cases_per_thousand_trips
    };
  });
  const maxVal = rows.reduce((maxVal, val) => Math.max(val.cases_per_thousand_trips, maxVal), 0);
  const byArea = rows.map((val) => {
    const alpha = val.cases_per_thousand_trips / maxVal;
    return {
      ...val,
      opacity: Math.max(alpha, minAlpha),
    };
  }).reduce((agg, val) => {
    agg[val.area_number] = val;
    return agg;
  }, {});
  return byArea;
}

export default function HomeDemo({ communityAreas }) {
  const [ mapData, setMapData ] = useState(null);
  const [ clickArea, setClickArea ] = useState({});

  useEffect(() => {
    let isSubscribed = true;

    async function getData() {
      const req = await fetch(
        `${process.env.NEXT_PUBLIC_API}/community/metrics`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            metrics: [
              "rideshare_pickups_covid",
              "total_covid_cases",
            ],
          }),
        }
      );
      const res = await req.json();
      const dataByArea = aggregateByArea(res.metrics);
      if (isSubscribed) {
        setMapData(dataByArea);
      }      
    }

    getData();
    return () => isSubscribed = false;
  }, []);

  const clickRow = mapData && clickArea.number ? mapData[clickArea.number] : {};
  const dataMsg = clickArea.name ? (
    <div>
      <p>{clickRow.cases_per_thousand_trips.toFixed(0)} COVID cases per thousand rideshare pickups</p>
      <p>
        <span>{clickRow.total_covid_cases.toLocaleString()} COVID cases</span>
        <span className="spacer">/</span>
        <span>{clickRow.rideshare_pickups_covid.toLocaleString()} total rideshare pickups since March 2020</span>
      </p>
    </div>
  ) : null;
  return (
    <div className="center">
      <h2>COVID Cases per Thousand Rideshare Pickups</h2>
      <p>Pick a community area from the map.</p>
      <ChicagoMap
        data={mapData}
        communityAreas={communityAreas}
        height={400}
        defaultOpacity={1.0}
        onAreaClick={setClickArea}
      />
      
      <h3>{clickArea.name}</h3>
      {dataMsg}
    </div>
  );
}

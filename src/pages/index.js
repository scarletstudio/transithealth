import React, { useState, useEffect } from 'react'
import { useFetch } from 'react-async'
import { useRouteData } from 'react-static'
import ChicagoMap from 'components/ChicagoMap'

import "../style/index.css"

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

export default () => {
	const { communityAreas } = useRouteData();
	const [ mapData, setMapData ] = useState(null);
	const [ clickArea, setClickArea ] = useState({});

	const { data } = useFetch("http://localhost:5000/rideshare/total_trips_by_pickup_area", {}, { json: true });
	if (data && !mapData) {
		const tripsByArea = getTripsByArea(data);
		setMapData(tripsByArea);
	}

	const clickRow = mapData && clickArea.number ? mapData[clickArea.number] : {};

	return (
	  <div>
		<div className="columns">
			<div className="column">
				<h1>TransitHealth</h1>
				<p>Explore transit and public health data across Chicago.</p>
				<h2>Total Rideshare Trips</h2>
				<p>Total number of trips, by community area of pickup.</p>
				<h3>{clickArea.name}</h3>
				<p>{clickRow.total_trips ? clickRow.total_trips.toLocaleString() : "?"} total rideshare pickups.</p>
			</div>
			<div className="column">
				<ChicagoMap
					data={mapData}
					communityAreas={communityAreas}
					width={450}
					defaultOpacity={minAlpha}
			        onAreaClick={setClickArea}
				/>
			</div>
		</div>
	  </div>
	);
}
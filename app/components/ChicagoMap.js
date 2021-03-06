import React, { useState, useEffect } from "react"
import { geoPath, geoMercator, geoCentroid } from "d3-geo"
import { debounce } from "throttle-debounce"

export default function ChicagoMap(props) {

	const defaultWidth = 300;
	const defaultHeight = 375;
	const defaultScale = 40000;

	const ratio = defaultWidth / defaultHeight;
	const width = props.width ? props.width : (props.height ? props.height * ratio : defaultWidth);
	const height = props.height ? props.height : (props.width ? props.width / ratio : defaultHeight);
	const translate = [ width / 2, height / 2 ];

	const scaleX = width / defaultWidth;
	const scaleY = height / defaultHeight;
	const scale = props.scale || defaultScale * Math.max(scaleX, scaleY);

	const offsetX = props.offsetX || -0.0475;
	const centroid = geoCentroid(props.communityAreas);
	const center = [centroid[0] + offsetX, centroid[1]];

	const projection = geoMercator()
		.center(center)
		.scale(scale)
		.translate(translate);

	const defaultOpacity = props.defaultOpacity || 1.0;

	const onAreaClick = props.onAreaClick ? debounce(100, props.onAreaClick) : null;
	const onAreaHover = props.onAreaHover ? debounce(100, props.onAreaHover) : null;

	const areas = props.communityAreas.features;
	const data = props.data || {};

	const [ selectedArea, setSelectedArea ] = useState(props.selectedAreaNumber);
	useEffect(() => {
		setSelectedArea(props.selectedAreaNumber);
	}, [ props.selectedAreaNumber ]);

	const classNames = [
		"ChicagoMap",
		Object.keys(data).length > 0 ? "HasData" : "NoData"
	].join(" ");

	return (
		<div className={classNames}>
			<svg width={ width } height={ height } viewBox={`0 0 ${width} ${height}`}>
				<g className="areas">
					{
						areas.map((area, i) => {
							const p = area.properties;
							const d = data[p.number] || {};
							return (
								<path
									className={`CommunityArea ${selectedArea === p.number ? "Selected" : ""}`}
									key={ `path-${ i }` }
									d={ geoPath().projection(projection)(area) }
									fill={d.fill}
									fillOpacity={ d.opacity || defaultOpacity }
									onClick={(e) => {
										setSelectedArea(p.number);
										if (onAreaClick) {
											onAreaClick(p);
										}
									}}
									onMouseEnter={(e) => {
										if (onAreaHover) {
											onAreaHover(p);
										}
									}}
								/>
							)
						})
					}
				</g>
			</svg>
		</div>
	);
}
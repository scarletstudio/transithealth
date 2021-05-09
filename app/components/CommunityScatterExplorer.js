import { useState, useEffect } from 'react'
import ChicagoMap from '../components/ChicagoMap'
import { MetricSelector } from '../components/Common'
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  Cell
} from 'recharts'

function numberWithCommas(val) {
  return new Intl.NumberFormat("en").format(val);
}

function numberInThousands(val) {
  return new Intl.NumberFormat("en").format((val / 1000).toFixed(1)) + "K";
}

function numberInMillions(val) {
  return new Intl.NumberFormat("en").format((val / 1000000).toFixed(1)) + "M";
}

const supportedMetrics = {
  rideshare_pickups_covid: {
    name: "Rideshare Pickups Since March 2020",
    units: "trips",
    format: numberInMillions,
    fullFormat: numberWithCommas,
  },
  total_population_2000: {
    name: "2000 Total Population",
    units: "people",
    format: numberInThousands,
    fullFormat: numberWithCommas,
  },
  total_population_2010: {
    name: "2010 Total Population",
    units: "people",
    format: numberInThousands,
    fullFormat: numberWithCommas,
  },
  total_covid_cases: {
    name: "Total COVID Cases",
    units: "cases",
    format: numberInThousands,
    fullFormat: numberWithCommas,
  },
};

const defaultMetricX = "total_population_2010";
const defaultMetricY = "total_covid_cases";

async function getScatterMetrics(metricX, metricY) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API}/community/metrics`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        metrics: [metricX, metricY],
      }),
    }
  );
  const res = await req.json();
  return res;
}

function getGeoMapMetric(metrics, selectedMetric, minAlpha=0.05) {
  const maxVal = metrics.reduce((maxVal, val) => {
    return Math.max(maxVal, val[selectedMetric]);
  }, metrics[0][selectedMetric]);
  const metricMapData = metrics.reduce((agg, val) => {
    const alpha = val[selectedMetric] / maxVal;
    agg[val.area_number] = {
      ...val,
      opacity: Math.max(minAlpha, alpha),
    };
    return agg;
  }, {});
  return metricMapData;
}

function CustomToolTip({ active, payload, label, metrics, selectedPayload }) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }
  const d = payload[0].payload;
  return (
    <div className="CustomToolTip">
      <h4>{d.name}</h4>
      <p>Community Area {d.area_number} ({d.part})</p>
      {metrics.map((m, i) => (
        <p key={i}>
          <span>{supportedMetrics[m].name}: </span>
          <span>{supportedMetrics[m].format(d[m])} </span>
          <span>{supportedMetrics[m].units}</span>
        </p>
      ))}
    </div>
  );
}

function CustomScatterPlot(props) {
  const { data, metricX, metricY, width, height, onHover, selectedAreaData } = props;
  const metricXDetails = supportedMetrics[metricX];
  const metricYDetails = supportedMetrics[metricY];
  const sData = data || [ { [metricX]: 0, [metricY]: 0 } ];
  return (
    <ResponsiveContainer width={width} height={height}>
      <ScatterChart margin={{ left: 30, right: 30, bottom: 30, top: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={metricX}
          type="number"
          tickFormatter={metricXDetails.format}
        >
          <Label
            value={`${metricXDetails.name} (${metricXDetails.units})`}
            position="bottom"
            offset={10}
          />
        </XAxis>
        <YAxis
          dataKey={metricY}
          type="number"
          tickFormatter={metricYDetails.format}
        >
          <Label
            value={`${metricYDetails.name} (${metricYDetails.units})`}
            position="left"
            angle={-90}
            offset={10}
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Tooltip content={ <CustomToolTip metrics={[ metricX, metricY ]} /> } />
        <Scatter
          name="Community Area"
          data={sData}
          onMouseOver={onHover}
          onMouseOut={() => onHover({ area_number: -1 })}
        >
        {sData.map((d, i) => {
          const className = d.area_number === selectedAreaData.area_number ? "selected" : "";
          return (
            <Cell key={i} className={className} />
          );
        })}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default function CommunityScatterExplorer({ communityAreas }) {
  const [ scatterData, setScatterData ] = useState(null);
  const [ metricX, setMetricX ] = useState(defaultMetricX);
  const [ metricY, setMetricY ] = useState(defaultMetricY);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ areaNumber, setAreaNumber ] = useState(-1);
  const [ mapData, setMapData ] = useState({});
  const selectedAreaData = mapData[areaNumber] || {};
  const metricXDetails = supportedMetrics[metricX];
  const metricYDetails = supportedMetrics[metricY];

  useEffect(() => {
    let isSubscribed = true;

    async function getData() {
      setIsLoading(true);
      const res = await getScatterMetrics(metricX, metricY);
      const metricMapData = getGeoMapMetric(res.metrics, metricY);
      if (isSubscribed) {
        setScatterData(res.metrics);
        setMapData(metricMapData);
        setIsLoading(false);
      }    
    }

    setAreaNumber(-1);
    setMapData({});
    getData();
    return () => isSubscribed = false;
  }, [ metricX, metricY ]);

  function onScatterHover(d) {
    if (d.area_number !== areaNumber) {
      setAreaNumber(d.area_number);
    }
  }

  function onAreaSelect(area) {
    if (area.number !== areaNumber) {
      setAreaNumber(area.number);
    }
  }
  return (
    <div>
      <h2>{mapData && areaNumber > 0 ? selectedAreaData.name : "By Community Area"}</h2>
      <div className="SelectorContainer">
        <MetricSelector
          label="X Axis"
          supportedMetrics={supportedMetrics}
          defaultValue={metricX}
          onChange={setMetricX}
        />
        <span>{
          selectedAreaData[metricX]
            ? `${metricXDetails.fullFormat(selectedAreaData[metricX])} ${metricXDetails.units}`
            : ""
        }</span>
        <span className="spacer"> </span>
        <MetricSelector
          label="Y Axis"
          supportedMetrics={supportedMetrics}
          defaultValue={metricY}
          onChange={setMetricY}
        />
        <span>{
          selectedAreaData[metricY]
            ? `${metricYDetails.fullFormat(selectedAreaData[metricY])} ${metricYDetails.units}`
            : ""
        }</span>
        <span className="spacer"> </span>
        <span>{ isLoading ? "Loading data..." : "" }</span>
      </div>
      <div className="PlotRow">
        <CustomScatterPlot
          data={scatterData}
          metricX={metricX}
          metricY={metricY}
          width={"65%"}
          height={450}
          onHover={onScatterHover}
          selectedAreaData={selectedAreaData}
        />
        <div>
          <ChicagoMap
            data={mapData}
            communityAreas={communityAreas}
            height={410}
            defaultOpacity={1.0}
            selectedAreaNumber={areaNumber}
            onAreaClick={onAreaSelect}
          />
          <p className="center">{metricYDetails.name}</p>
        </div>
      </div>
    </div>
  );
}

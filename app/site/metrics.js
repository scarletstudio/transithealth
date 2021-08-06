const numberEn = Intl.NumberFormat("en-US");

export function calculatePercentChange(before, after) {
  return (after - before) / before;
}

export const Formatter = {
  numberWithCommas: (v) => ( numberEn.format(v) ),
  numberInThousands: (v) => ( numberEn.format((v / 1000).toFixed(1)) + "K" ),
  numberInMillions: (v) => ( numberEn.format((v / 1000000).toFixed(1)) + "M" ),
  numberWithOneDecimal: (v) => ( v.toFixed(1) ),
  numberWithTwoDecimals: (v) => ( v.toFixed(2) ),
  percentWithNoDecimal: (v) => ((v * 100).toFixed(0) + "%"),
  percentWithOneDecimal: (v) => ((v * 100).toFixed(1) + "%"),
  dollarsUSD: (v) => ("$" + v.toFixed(2)),
  dollarsUSDWithCommas: (v) => `$${numberEn.format(Math.floor(v))}`,
  dollarsUSDInThousands: (v) => `$${numberEn.format((v / 1000).toFixed(1))}K`,
  centsToDollarsUSD: (v) => ("$" + (v / 100).toFixed(2)),
  percentChangeWithNoDecimal: (v) => ((v >= 0 ? "+" : "") + (v * 100).toFixed(0) + "%"),
  percentChangeWithOneDecimal: (v) => ((v >= 0 ? "+" : "") + (v * 100).toFixed(1) + "%"),
};

/*
 * Check whether the metrics have the required fields
 */
function validateMetrics(metricsMap) {
  const requiredFields = [
    "name",
    "units",
    "dataset",
    "format",
  ];
  Object.entries(metricsMap).forEach(([key, metric]) => {
    requiredFields.forEach((field) => {
      if (!metric?.[field]) {
        throw new Error(`Metric ${key} is missing the ${field} field.`);
      }
    });
  });
}

export const communityMetrics = {
  rideshare_pickups_covid: {
    name: "Rideshare Pickups Since March 2020",
    units: "trips",
    dataset: "Rideshare",
    description: "",
    format: Formatter.numberInMillions,
    fullFormat: Formatter.numberWithCommas,
  },
  rideshare_pooled_trip_rate_2018: {
    name: "2018 Rideshare Pooled Trip Rate",
    units: "of trips",
    dataset: "Rideshare",
    description: "",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rideshare_pooled_trip_rate_2019: {
    name: "2019 Rideshare Pooled Trip Rate",
    units: "of trips",
    dataset: "Rideshare",
    description: "",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rideshare_pool_request_rate_2018: {
    name: "2018 Rideshare Pool Request Rate",
    units: "of trips",
    dataset: "Rideshare",
    description: "",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rideshare_pool_request_rate_2019: {
    name: "2019 Rideshare Pool Request Rate",
    units: "of trips",
    dataset: "Rideshare",
    description: "",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  total_population_2010: {
    name: "2010 Total Population",
    units: "people",
    dataset: "Population",
    description: "Average population over the time period that ends on 2010.",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
  total_population_2019: {
    name: "2019 Total Population",
    units: "people",
    dataset: "Population",
    description: "Average population over the time period that ends on 2010.",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
  median_income_2010: {
    name: "2010 Median Income",
    units: "dollars",
    dataset: "Income",
    description: "Income in the past 12 months for 2010, in inflation-adjusted 2017 dollars.",
    format: Formatter.dollarsUSDInThousands,
    fullFormat: Formatter.dollarsUSDWithCommas,
  },
  median_income_2017: {
    name: "2017 Median Income",
    units: "dollars",
    dataset: "Income",
    description: "Income in the past 12 months for 2017, in inflation-adjusted 2017 dollars.",
    format: Formatter.dollarsUSDInThousands,
    fullFormat: Formatter.dollarsUSDWithCommas,
  },
  median_income_2018: {
    name: "2018 Median Income",
    units: "dollars",
    dataset: "Income",
    description: "Income in the past 12 months for 2018, in inflation-adjusted 2017 dollars.",
    format: Formatter.dollarsUSDInThousands,
    fullFormat: Formatter.dollarsUSDWithCommas,
  },
  median_income_2019: {
    name: "2019 Median Income",
    units: "dollars",
    dataset: "Income",
    description: "Income in the past 12 months for 2019, in inflation-adjusted 2017 dollars.",
    format: Formatter.dollarsUSDInThousands,
    fullFormat: Formatter.dollarsUSDWithCommas,
  },
  total_covid_cases: {
    name: "Total COVID Cases",
    units: "cases",
    dataset: "Covid",
    description: "The sum COVID spread cases for each community area",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
  disability_rate_2018: {
    name: "2018 Disability Rate",
    units: "of people",
    dataset: "Disability",
    description: "Percent of residents with a disability in 2018, defined as one or more sensory disabilities or difficulties with everyday tasks.",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  disability_rate_2019: {
    name: "2019 Disability Rate",
    units: "of people",
    dataset: "Disability",
    description: "Percent of residents with a disability in 2019, defined as one or more sensory disabilities or difficulties with everyday tasks.",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  belonging_rate_2017: {
    name: "2017 Rate of Belonging",
    units: "of people",
    dataset: "Belonging",
    description: "Percent of adults who reported that they strongly agree or agree that they really feel part of their neighborhood for 2017.",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  belonging_rate_2018: {
    name: "2018 Rate of Belonging",
    units: "of people",
    dataset: "Belonging",
    description: "Percent of adults who reported that they strongly agree or agree that they really feel part of their neighborhood for 2018.",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_burdened_2017: {
    name: "2017 Rate of Rent Burdened Households",
    units: "of households",
    dataset: "Rent Burden",
    description: "Households spending more than 30% of income on rent are considered rent-burdened in 2017. Rent costs do not include utilities, insurance, or building fees.",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_burdened_2018: {
    name: "2018 Rate of Rent Burdened Households",
    units: "of households",
    dataset: "Rent Burden",
    description: "Households spending more than 30% of income on rent are considered rent-burdened in 2018. Rent costs do not include utilities, insurance, or building fees.",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_burdened_2019: {
    name: "2019 Rate of Rent Burdened Households",
    units: "of households",
    dataset: "Rent Burden",
    description: "Households spending more than 30% of income on rent are considered rent-burdened in 2019. Rent costs do not include utilities, insurance, or building fees.",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_max: {
    name: "Maximum Rate of Rent Burdened Households",
    units: "of households",
    dataset: "Rent Burden",
    description: "Maximum Rate of households spending more than 30% of income on rent.",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_min: {
    name: "Minimum Rate of Rent Burdened Households",
    units: "of households",
    dataset: "Rent Burden",
    description: "Minimum Rate of households spending more than 30% of income on rent.",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_average: {
    name: "Average Rate of Rent Burdened Households",
    units: "of households",
    dataset: "Rent Burden",
    description: "Average Rate of households spending more than 30% of income on rent.",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  traffic_intensity_2016: {
    name: "2016 Traffic Intensity",
    units: "vehicle density",
    dataset: "Traffic Intensity",
    description: "Traffic Intensity dataset for year 2016",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberInThousands,
  },
  traffic_intensity_2017: {
    name: "2017 Traffic Intensity",
    units: "vehicle density",
    dataset: "Traffic Intensity",
    description: "Traffic Intensity dataset for year 2017",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberInThousands,
  },
  traffic_intensity_2018: {
    name: "2018 Traffic Intensity",
    units: "vehicle density",
    dataset: "Traffic Intensity",
    description: "Traffic Intensity dataset for year 2018",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberInThousands,
  },
  traffic_intensity_2019: {
    name: "2019 Traffic Intensity",
    units: "vehicle density",
    dataset: "Traffic Intensity",
    description: "Traffic Intensity dataset for year 2019",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberInThousands,
  },
  traffic_intensity_2020: {
    name: "2020 Traffic Intensity",
    units: "vehicle density",
    dataset: "Traffic Intensity",
    description: "Traffic Intensity dataset for year 2020",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberInThousands,
  },
  avg_speed_per_dropoff: {
    name: "Average Taxi Trip Speed Per Dropoff Area",
    units: "mph",
    dataset: "Taxi",
    description: "",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas
  },
  avg_speed_per_pickup: {
    name: "Average Taxi Trip Speed Per Pickup Area",
    units: "mph",
    dataset: "Taxi",
    description: "",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  sidewalk_cafe_permits_area: {
    name: "Number of Sidewalk Cafe Permits by Area",
    units: "permits",
    dataset: "Sidewalk Cafe",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  avg_distance_based_on_start_can: {
    name: "Escooter Average Distance by Start Area (2019)",
    units: "miles",
    dataset: "Escooter",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  avg_distance_based_on_end_can: {
    name: "Escooter Average Distance by End Area (2019)",
    units: "miles",
    dataset: "Escooter",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  number_of_trips_based_on_start_cn: {
    name: "Number of Escooter Trips by Start Area (2019)",
    units: "trips",
    dataset: "Escooter",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  number_of_trips_based_on_end_cn: {
    name: "Number of Escooter Trips by End Area (2019)",
    units: "trips",
    dataset: "Escooter",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
};

export const timelineMetrics = {
  weekly_rideshare_pickups: {
    name: "Weekly Rideshare Pickups",
    units: "trips",
    dataset: "Rideshare",
    description: "",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
  weekly_rideshare_pickups_covid: {
    name: "Weekly Rideshare Pickups Since March 2020",
    units: "trips",
    dataset: "Rideshare",
    description: "",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
  weekly_rideshare_avg_cost: {
    name: "Weekly Rideshare Avg. Cost",
    units: "USD",
    dataset: "Rideshare",
    description: "",
    format: Formatter.centsToDollarsUSD,
    fullFormat: Formatter.centsToDollarsUSD,
  },
  weekly_rideshare_avg_cost_covid: {
    name: "Weekly Rideshare Avg. Cost Since March 2020",
    units: "USD",
    dataset: "Rideshare",
    description: "",
    format: Formatter.centsToDollarsUSD,
    fullFormat: Formatter.centsToDollarsUSD,
  },
  weekly_covid_cases: {
    name: "Weekly COVID Cases",
    units: "cases",
    dataset: "Covid",
    description: "The number of COVID cases per week",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  yearly_belonging_rate_all: {
    name: "Rate of Belonging of the City",
    units: "of people",
    dataset:"Belonging",
    description: "Percent of adults who reported that they strongly agree or agree that they really feel part of their neighborhood over a four year period.",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  yearly_belonging_rate_W: {
    name: "Rate of Belonging of Non-Hispanic White People",
    units: "of people",
    dataset:"Belonging",
    description: "Percent of Non-Hispanic White adults who reported that they strongly agree or agree that they really feel part of their neighborhood over a four year period.",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  yearly_belonging_rate_B: {
    name: "Rate of Belonging of Non-Hispanic Black People",
    units: "of people",
    dataset:"Belonging",
    description: "Percent of Non-Hispanic Black adults who reported that they strongly agree or agree that they really feel part of their neighborhood over a four year period.",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  yearly_belonging_rate_A: {
    name: "Rate of Belonging of Asian or Pacific Islander People",
    units: "of people",
    dataset:"Belonging",
    description: "Percent of Asian or Pacific Islander adults who reported that they strongly agree or agree that they really feel part of their neighborhood over a four year period.",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  yearly_belonging_rate_H: {
    name: "Rate of Belonging of Hispanic or Latino People",
    units: "of people",
    dataset:"Belonging",
    description: "Percent of Hispanic or Latino adults who reported that they strongly agree or agree that they really feel part of their neighborhood over a four year period.",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  weekly_cta_train_ridership: {
    name: "Weekly CTA Train Ridership",
    units: "trips",
    dataset: "Public Transit",
    description: "",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  weekly_cta_train_ridership_covid: {
    name: "Weekly CTA Train Ridership Since COVID-19",
    units: "trips",
    dataset: "Public Transit",
    description: "",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  daily_sidewalk_cafe_permit: {
    name: "Daily Sidewalk Cafe Permits",
    units: "permits",
    dataset: "Sidewalk Cafe",
    description: "",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  yearly_sidewalk_cafe_permit: {
    name: "Yearly Sidewalk Cafe Permits",
    units: "permits",
    dataset: "Sidewalk Cafe",
    description: "",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
};

export const scatterExplorerDefaults = {
  metricX: "total_population_2019",
  metricY: "total_covid_cases",
};

export const timelineExplorerDefaults = {
  metricToAdd: "weekly_rideshare_pickups",
  defaultMetrics: [
    {
      id: "weekly_rideshare_pickups",
      axis: "left"
    },
    {
      id: "weekly_covid_cases",
      axis: "right"
    },
  ],
};

// Hacky way to cause site build to fail if a field is missing:
validateMetrics(communityMetrics);
validateMetrics(timelineMetrics);

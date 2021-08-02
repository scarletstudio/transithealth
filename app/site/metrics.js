const numberEn = Intl.NumberFormat("en-US");

export function calculatePercentChange(before, after) {
  return (after - before) / before;
}

export const Formatter = {
  numberWithCommas: (v) => ( numberEn.format(v) ),
  numberInThousands: (v) => ( numberEn.format((v / 1000).toFixed(1)) + "K" ),
  numberInMillions: (v) => ( numberEn.format((v / 1000000).toFixed(1)) + "M" ),
  percentWithNoDecimal: (v) => ((v * 100).toFixed(0) + "%"),
  percentWithOneDecimal: (v) => ((v * 100).toFixed(1) + "%"),
  dollarsUSD: (v) => ("$" + v.toFixed(2)),
  dollarsUSDWithCommas: (v) => `$${numberEn.format(Math.floor(v))}`,
  dollarsUSDInThousands: (v) => `$${numberEn.format((v / 1000).toFixed(1))}K`,
  centsToDollarsUSD: (v) => ("$" + (v / 100).toFixed(2)),
  percentChangeWithNoDecimal: (v) => ((v >= 0 ? "+" : "") + (v * 100).toFixed(0) + "%"),
  percentChangeWithOneDecimal: (v) => ((v >= 0 ? "+" : "") + (v * 100).toFixed(1) + "%"),
};

export const communityMetrics = {
  rideshare_pickups_covid: {
    name: "Rideshare Pickups Since March 2020",
    units: "trips",
    format: Formatter.numberInMillions,
    fullFormat: Formatter.numberWithCommas,
  },
  rideshare_pooled_trip_rate_2018: {
    name: "2018 Rideshare Pooled Trip Rate",
    units: "of trips",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rideshare_pooled_trip_rate_2019: {
    name: "2019 Rideshare Pooled Trip Rate",
    units: "of trips",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rideshare_pool_request_rate_2018: {
    name: "2018 Rideshare Pool Request Rate",
    units: "of trips",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rideshare_pool_request_rate_2019: {
    name: "2019 Rideshare Pool Request Rate",
    units: "of trips",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  total_population_2010: {
    name: "2010 Total Population",
    units: "people",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
  total_population_2019: {
    name: "2019 Total Population",
    units: "people",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
  median_income_2010: {
    name: "2010 Median Income",
    units: "dollars",
    format: Formatter.dollarsUSDInThousands,
    fullFormat: Formatter.dollarsUSDWithCommas,
  },
  median_income_2017: {
    name: "2017 Median Income",
    units: "dollars",
    format: Formatter.dollarsUSDInThousands,
    fullFormat: Formatter.dollarsUSDWithCommas,
  },
  median_income_2018: {
    name: "2018 Median Income",
    units: "dollars",
    format: Formatter.dollarsUSDInThousands,
    fullFormat: Formatter.dollarsUSDWithCommas,
  },
  median_income_2019: {
    name: "2019 Median Income",
    units: "dollars",
    format: Formatter.dollarsUSDInThousands,
    fullFormat: Formatter.dollarsUSDWithCommas,
  },
  total_covid_cases: {
    name: "Total COVID Cases",
    units: "cases",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
  disability_rate_2018: {
    name: "2018 Disability Rate",
    units: "of people",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  disability_rate_2019: {
    name: "2019 Disability Rate",
    units: "of people",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  belonging_rate_2017: {
    name: "2017 Rate of Belonging",
    units: "of people",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  belonging_rate_2018: {
    name: "2018 Rate of Belonging",
    units: "of people",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_burdened_2017: {
    name: "2017 Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_burdened_2018: {
    name: "2018 Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_burdened_2019: {
    name: "2019 Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_max: {
    name: "Maximum Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_min: {
    name: "Minimum Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  rent_average: {
    name: "Average Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  avg_speed_per_dropoff: {
    name: "Average Taxi Trip Speed Per Dropoff Area",
    units: "mph",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas
  },
  avg_speed_per_pickup: {
    name: "Average Taxi Trip Speed Per Pickup Area",
    units: "mph",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  sidewalk_cafe_permits_area: {
    name: "Number of Sidewalk Cafe Permits by Area",
    units: "permits",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
};

export const timelineMetrics = {
  weekly_rideshare_pickups: {
    name: "Weekly Rideshare Pickups",
    units: "trips",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
  weekly_rideshare_pickups_covid: {
    name: "Weekly Rideshare Pickups Since March 2020",
    units: "trips",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
  weekly_rideshare_avg_cost: {
    name: "Weekly Rideshare Avg. Cost",
    units: "USD",
    format: Formatter.centsToDollarsUSD,
    fullFormat: Formatter.centsToDollarsUSD,
  },
  weekly_rideshare_avg_cost_covid: {
    name: "Weekly Rideshare Avg. Cost Since March 2020",
    units: "USD",
    format: Formatter.centsToDollarsUSD,
    fullFormat: Formatter.centsToDollarsUSD,
  },
  weekly_covid_cases: {
    name: "Weekly COVID Cases",
    units: "cases",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  yearly_belonging_rate_all: {
    name: "Rate of Belonging of the City",
    units: "of people",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  yearly_belonging_rate_W: {
    name: "Rate of Belonging of Non-Hispanic White People",
    units: "of people",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  yearly_belonging_rate_B: {
    name: "Rate of Belonging of Non-Hispanic Black People",
    units: "of people",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  yearly_belonging_rate_A: {
    name: "Rate of Belonging of Asian or Pacific Islander People",
    units: "of people",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  yearly_belonging_rate_H: {
    name: "Rate of Belonging of Hispanic or Latino People",
    units: "of people",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  weekly_cta_train_ridership: {
    name: "Weekly CTA Train Ridership",
    units: "trips",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  weekly_cta_train_ridership_covid: {
    name: "Weekly CTA Train Ridership Since COVID-19",
    units: "trips",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  daily_sidewalk_cafe_permit: {
    name: "Daily Sidewalk Cafe Permits",
    units: "permits",
    format: Formatter.numberWithCommas,
    fullFormat: Formatter.numberWithCommas,
  },
  yearly_sidewalk_cafe_permit: {
    name: "Yearly Sidewalk Cafe Permits",
    units: "permits",
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

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
  total_population_2000: {
    name: "2000 Total Population",
    units: "people",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
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
    format: Formatter.dollarsUSD,
    fullFormat: Formatter.dollarsUSD,
  },
  median_income_2019: {
    name: "2019 Median Income",
    units: "dollars",
    format: Formatter.dollarsUSD,
    fullFormat: Formatter.dollarsUSD,
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
  rent_burdened_2015: {
    name: "2015 Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal(),
    fullFormat: Formatter.percentWithOneDecimal(),
  },
  rent_burdened_2016: {
    name: "2016 Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal(),
    fullFormat: Formatter.percentWithOneDecimal(),
  },
  rent_burdened_2017: {
    name: "2017 Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal(),
    fullFormat: Formatter.percentWithOneDecimal(),
  },
  rent_burdened_2018: {
    name: "2018 Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal(),
    fullFormat: Formatter.percentWithOneDecimal(),
  },
  rent_burdened_2019: {
    name: "2019 Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal(),
    fullFormat: Formatter.percentWithOneDecimal(),
  },
  rent_max: {
    name: "Maximum Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal(),
    fullFormat: Formatter.percentWithOneDecimal(),
  },
  rent_min: {
    name: "Minimum Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal(),
    fullFormat: Formatter.percentWithOneDecimal(),
  },
  rent_average: {
    name: "Average Rate of Rent Burdened Households",
    units: "of households",
    format: Formatter.percentWithOneDecimal(),
    fullFormat: Formatter.percentWithOneDecimal(),
  }
};

export const weeklyMetrics = {
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

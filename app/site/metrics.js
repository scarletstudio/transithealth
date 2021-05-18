const numberEn = Intl.NumberFormat("en-US");

export const Formatter = {
  numberWithCommas: (v) => ( numberEn.format(v) ),
  numberInThousands: (v) => ( numberEn.format((v / 1000).toFixed(1)) + "K" ),
  numberInMillions: (v) => ( numberEn.format((v / 1000000).toFixed(1)) + "M" )
};

export const communityMetrics = {
  rideshare_pickups_covid: {
    name: "Rideshare Pickups Since March 2020",
    units: "trips",
    format: Formatter.numberInMillions,
    fullFormat: Formatter.numberWithCommas,
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
    format: (val) => `$${Formatter.numberInThousands(val)}`,
    fullFormat: (val) => `$${Formatter.numberWithCommas(val)}`,
  },
  median_income_2019: {
    name: "2019 Median Income",
    units: "dollars",
    format: (val) => `$${Formatter.numberInThousands(val)}`,
    fullFormat: (val) => `$${Formatter.numberWithCommas(val)}`,
  },
  total_covid_cases: {
    name: "Total COVID Cases",
    units: "cases",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
  },
};

export const weeklyMetrics = {
  weekly_rideshare_pickups: {
    name: "Weekly Rideshare Pickups",
    units: "trips",
    format: Formatter.numberInThousands,
    fullFormat: Formatter.numberWithCommas,
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

export const insights = [
  {
    name: "Disability Rates by Community Area 2018 vs 2019",
    type: "scatter",
    x: "disability_rate_2018",
    y: "disability_rate_2019",
  },
  {
    name: "COVID Rates by Community Rate of Belonging",
    type: "scatter",
    x: "belonging_rate_2018",
    y: "total_covid_cases",
  },
  {
    name: "COVID Rates in Community by Average Number of Rent Burdened Households",
    type: "scatter",
    x: "rent_average",
    y: "total_covid_cases",
  },
  {
    name: "Community Pooled Trip Rate by Median Income 2019",
    type: "scatter",
    x: "median_income_2019",
    y: "rideshare_pooled_trip_rate_2019",
  },
  {
    name: "Community Rate of Belonging by Median Income 2018",
    type: "scatter",
    x: "median_income_2018",
    y: "belonging_rate_2018",
  },
];
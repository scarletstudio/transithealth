import Sample from '../components/questions/Sample'
import TemplateWithPieChart from '../components/questions/TemplateWithPieChart'
import PooledTrips from '../components/questions/PooledTrips'
import RidesharesAcrossCity from '../components/questions/RidesharesAcrossCity'
import ResidentsWithDisabilities from '../components/questions/ResidentsWithDisabilities'
import BelongingRates from '../components/questions/BelongingRates'
import RentBurdenedRates from '../components/questions/RentBurdenRates'
import SidewalkCafePermitsYears from '../components/questions/SidewalkCafePermitsYears'
import SidewalkCafePermitSearch from '../components/questions/SidewalkCafePermitSearch'
import DisabilitiesAndTransportation from '../components/questions/DisabilitiesAndTransportation'
import TaxiMostCommonDropoff from '../components/questions/TaxiMostCommonDropoff'
import TaxiPaymentMethod from '../components/questions/TaxiPaymentMethod'
import EscooterCity from '../components/questions/EscooterCity'
import CovidCasesPerRideshare from '../components/questions/CovidCasesPerRideshare'
import RideTrips from '../components/questions/RideTripsOhare'
import TrafficIntensityAcrossCity from '../components/questions/TrafficIntensity'

export const questionComponents = {
  "sample": Sample,
  "template-with-pie-chart": TemplateWithPieChart,
  "pooled-trips": PooledTrips,
  "rideshares-across-city": RidesharesAcrossCity,
  "residents-with-disabilities": ResidentsWithDisabilities,
  "belonging-rates": BelongingRates,
  "rent-burden-rates": RentBurdenedRates,
  "ridetrips-ohare": RideTrips,
  "sidewalk-cafe-permits-years": SidewalkCafePermitsYears,
  "sidewalk-cafe-permit-search": SidewalkCafePermitSearch,
  "disabilities-and-transportation": DisabilitiesAndTransportation,
  "taxi-most-common-dropoff": TaxiMostCommonDropoff,
  "taxi-payment-method": TaxiPaymentMethod,
  "escooter-city": EscooterCity,
  "covid-cases-per-rideshare": CovidCasesPerRideshare,
  "traffic-intensity-across-the-city": TrafficIntensityAcrossCity,
};

export const questionsParams = {
  "pooled-trips": {
    title: "How has stopping pooled rideshare trips affected communities?",
    author: "Vinesh Kannan",
    component: "pooled-trips",
    description: "In a pooled trip, riders pay a lower fare by splitting a ride with strangers. In March 2020, ridesharing platforms stopped allowing pooled trips due to social distancing. What has been the impact of this decision?",
  },
  "rideshares-across-city": {
    title: "How many rideshares across the city?",
    author: "Rachael Brooks",
    component: "rideshares-across-city",
    description: "Rideshares like Uber and Lyft are seemingly pretty popular. How many rideshares happen across the city?",
  },
  "disabilities": {
    title: "Disabilities in Burnside",
    author: "Maria Garcia",
    component: "residents-with-disabilities",
    description: "Burnside is the neighborhood with the highest disability rate. What percentage of residents in Burnside, Chicago have an included disability?",
  },
  "taxi-most-common-dropoff": {
    title: "Where are people usually getting dropped off by taxis?",
    author: "Leilah Alkatout",
    component: "taxi-most-common-dropoff",
    description: "People get dropped off in different community areas by taxis but, what's the most common dropoff area per pickup area?",
  },
  "taxi-popular-payment-method":{
    title: "What is the most popular payment method for taxis?",
    author: "Leilah Alkatout",
    component: "taxi-payment-method",
    description: "People in different areas of Chicago prefer using different methods of payment- what's the most popular method for each pickup and dropoff area for taxis?",
  },
  "belonging-example": {
    title: "Belonging Rates of Chicago",
    author: "Fabian Abrego",
    component: "belonging-rates",
    description: "Over the years, the residents of an area may feel differently about their sense of belonging. What is this rate for a given neighborhood?",
  },
  "rent-burden-rates": {
    title: "Rent Burden Rates",
    author: "William Javier",
    component: "rent-burden-rates",
    description: "What is the rent burden rate of a given neighborhood for the year?",
  },
  "sidewalk-cafe-permits-years": {
    title: "Sidewalk Cafe Permits Over the Years",
    author: "Asude Ozturk",
    component: "sidewalk-cafe-permits-years",
    description: "How many sidewalk cafe permits issued each year?",
  },
  "escooter-city": {
    title: "What parts of the city use escooters the most?",
    author: "Tabor Alemu",
    component: "escooter-city",
    description: "The city started tracking escooter use across the city. Find out which parts of the city escooters were used the most.",
  },
  "disabilities-and-transportation": {
    title: "Transportation for Individuals with Disabilities",
    author: "Maria Garcia",
    component: "disabilities-and-transportation",
    description: "It is common for individuals with disabilities to also have underlying diseases that make them at risk for COVID-19. How has COVID-19 impacted the ability of those with disabilities to travel throughout Chicago?",
  },
  "sidewalk-cafe-permit-search": {
    title: "Search Sidewalk Cafe Permits",
    author: "Vinesh Kannan",
    component: "sidewalk-cafe-permit-search",
    description: "Which restaurants have sidewalk cafe permits?",
  },
  "covid-cases-per-rideshare": {
    title: "How do COVID cases compare to rideshare usage around the city?",
    author: "Vinesh Kannan",
    component: "covid-cases-per-rideshare",
    description: "What is the ratio of COVID cases to rideshare trips in each community area?",
    loadCommunityAreas: true,
  },
  "example-with-pie-chart": {
    title: "Example with Pie Chart",
    author: "Templates",
    component: "template-with-pie-chart",
    description: "This page has a pie chart.",
    hidden: true,
  },
  "traffic-intensity": {
    title: "Traffic Intensity in Chicago",
    author: "Shahzia Perveen",
    component: "traffic-intensity-across-the-city",
    description: "What is the vehical density in Chicago for a given year?",
  },
  "ridetrips-ohare": {
    title: "Ride Trips Dropoff from O'Hare Area",
    author: "William Javier",
    component: "ridetrips-ohare",
    description: "How has the pandemic affected the dropoff trips from the O'Hare Area?",
  },
};

export function getAllQuestions() {
    return Object.keys(questionsParams).map((id) => ({
        params: { id, ...questionsParams[id] }
    })).filter(p => !p.params.hidden);
};

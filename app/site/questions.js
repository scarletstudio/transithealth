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

export const questionComponents = {
  "sample": Sample,
  "template-with-pie-chart": TemplateWithPieChart,
  "pooled-trips": PooledTrips,
  "rideshares-across-city": RidesharesAcrossCity,
  "residents-with-disabilities": ResidentsWithDisabilities,
  "belonging-rates": BelongingRates,
  "rent-burden-rates": RentBurdenedRates,
  "sidewalk-cafe-permits-years" : SidewalkCafePermitsYears,
  "sidewalk-cafe-permit-search": SidewalkCafePermitSearch,
  "disabilities-and-transportation" : DisabilitiesAndTransportation,
  "taxi-most-common-dropoff": TaxiMostCommonDropoff
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
    component: "sample",
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
  "example-with-pie-chart": {
    title: "Example with Pie Chart",
    author: "Templates",
    component: "template-with-pie-chart",
    description: "This page has a pie chart.",
  },
  "another": {
    title: "Another Question",
    author: "Student B",
    component: "sample",
    description: "This is a another question.",
  },
  "evenmore": {
    title: "Even More Questions",
    author: "Student C",
    component: "sample",
    description: "Even more questions!",
  },
  "nextrow": {
    title: "Next Row Question",
    author: "Student D",
    component: "sample",
    description: "We have enough to fill another row.",
  },
};

export function getAllQuestions() {
    return Object.keys(questionsParams).map((id) => ({
        params: { id, ...questionsParams[id] }
    }));
};

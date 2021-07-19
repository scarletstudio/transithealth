import Sample from '../components/questions/Sample'
import TemplateWithPieChart from '../components/questions/TemplateWithPieChart'
import PooledTrips from '../components/questions/PooledTrips'
import RidesharesAcrossCity from '../components/questions/RidesharesAcrossCity'
import BelongingRates from '../components/questions/BelongingRates'

export const questionComponents = {
  "sample": Sample,
  "template-with-pie-chart": TemplateWithPieChart,
  "pooled-trips": PooledTrips,
  "rideshares-across-city": RidesharesAcrossCity,
  "belonging-rates": BelongingRates,
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
  "belonging-example": {
    title: "Belonging Rates",
    author: "Fabian Abrego",
    component: "belonging-rates",
    description: "This page has a pie chart.",
  },
  "example-with-pie-chart": {
    title: "Example with Pie Chart",
    author: "Templates",
    component: "template-with-pie-chart",
    description: "This page has a pie chart.",
  },
  "sample": {
    title: "Sample Question",
    author: "Student A",
    component: "sample",
    description: "This is a sample question.",
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

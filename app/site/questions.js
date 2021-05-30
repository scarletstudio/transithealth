import Sample from '../components/questions/Sample'
import PooledTrips from '../components/questions/PooledTrips'

export const questionComponents = {
  "sample": Sample,
  "pooled-trips": PooledTrips,
};

export const questionsParams = {
  "pooled-trips": {
    title: "How has stopping pooled rideshare trips affected communities?",
    author: "Vinesh Kannan",
    component: "pooled-trips",
    description: "In a pooled trip, riders pay a lower fare by splitting a ride with strangers. In March 2020, ridesharing platforms stopped allowing pooled trips due to social distancing. What has been the impact of this decision?"
  },
  "sample": {
    title: "Sample Question",
    author: "Student A",
    component: "sample",
    description: "This is a sample question."
  },
  "another": {
    title: "Another Question",
    author: "Student B",
    component: "sample",
    description: "This is a another question."
  },
  "evenmore": {
    title: "Even More Questions",
    author: "Student C",
    component: "sample",
    description: "Even more questions!"
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

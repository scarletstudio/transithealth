import Sample from '../components/questions/Sample'

export const questionComponents = {
  sample: Sample
};

export const questionsParams = {
  sample: {
    title: "Sample Question",
    author: "Student A",
    component: "sample",
    description: "This is a sample question."
  },
  another: {
    title: "Another Question",
    author: "Student B",
    component: "sample",
    description: "This is a another question."
  },
  evenmore: {
    title: "Even More Questions",
    author: "Student C",
    component: "sample",
    description: "Even more questions!"
  },
  nextrow: {
    title: "Next Row Question",
    author: "Student D",
    component: "sample",
    description: "We have enough to fill another row.",
  }
};

export function getAllQuestions() {
    return Object.keys(questionsParams).map((id) => ({
        params: { id, ...questionsParams[id] }
    }));
};

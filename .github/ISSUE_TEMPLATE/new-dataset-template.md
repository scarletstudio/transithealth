---
name: New Dataset Template
about: Templating for adding new datasets to the offline pipeline.
title: Load data for (?)
labels: enhancement, pipeline
assignees: ''

---

- **Dataset Name:** ?
- **Dataset Source:** ? (include a link)

Write a one-sentence description of the dataset here.

- How many records are in the dataset?
- What does each record represent?
- What kind of metrics can be created from the dataset?
  - Community area metrics
  - Timeline metrics
  - Other metrics
- Are there any other caveats or information to know about the dataset?

Read the documentation on how to add a new dataset:

- [Short Guide](https://github.com/scarletstudio/transithealth/blob/main/docs/pages/tasks.md#extract-a-dataset)
- [Full Guide](https://github.com/scarletstudio/transithealth/blob/main/docs/pages/new_dataset.md)

This task will involve at least three pull requests:

- [ ] Extract dataset
- [ ] Transform dataset
- [ ] Load dataset

Once loaded, we can start developing metrics and questions based on this data.

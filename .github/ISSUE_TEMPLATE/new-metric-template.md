---
name: New Metric Template
about: Template for adding new metrics to the backend API.
title: Implement metric for (?)
labels: api, enhancement
assignees: ''

---

- **Metric Name:** `?`
- **Based on Table:** `?`

Add a one sentence description of the metric here.

- Where will this metric be used in the app?
  - Community Area View
  - Timeline View
  - Custom Data Question
  - Other
- Which endpoint file should the metric be added to?
  - For community area metrics: `api/endpoints/community.py`
  - For timeline metrics: `api/endpoints/timeline.py`
  - Otherwise, chat with your mentor to pick the right endpoint file

Read the documentation on how to add a new metric:

- [Short Guide](https://github.com/scarletstudio/transithealth/blob/main/docs/pages/tasks.md#implement-a-metric)
- [Full Guide](https://github.com/scarletstudio/transithealth/blob/main/docs/pages/new_endpoint.md)

This task will involve at least two pull requests:

- [ ] Implement metric (possibly including unit tests)
- [ ] Publish metric (add to existing endpoint in backend and to config in frontend)

Once published, we can add another metric or move on to adding a data question in the frontend.

# Add a New Question

Coming soon...

This guide will walk through the endpoint for [the Pooled Trips question](https://scarletstudio.github.io/transithealth/questions/pooled-trips) as an example.

The logic for the Pooled Trips question is in the `questions` module.

- The implementation is in the file `api/questions/pooled_trips.py`
- The tests are in the file `api/questions/pooled_trips_test.py`
- Throughout the API, we can import from its submodule like this:

```python
from api.questions.pooled_trips import PooledTripMetrics
```

Find the implementation of the `PooledTripMetrics` class and its unit tests. Read over the code and try to identify these aspects:

- How does the class access a connection to the database?
- What methods does the class support? Do any methods call other methods in the class?
- What are the inputs and outputs of the class methods?
- How does do the class methods run SQL queries? What do the SQL queries do?
- How is the class tested?

Refer to this implementation and tests as an idea for how to write the code for your own use case.

The [testing guide](testing.md) can help you write better tests for your implementation.
# Time API Requests

## Use Cases

Here are some common cases when you may want to time API requests:

- To get an estimate of how long new endpoint(s) take to return a response
- To compare the change in response time of endpoint(s) that were modified
- To identify areas for improvement in the response time of our API

## Instructions

1. Modify `api/scripts/time_endpoints.py` to include the requests you want to time.
2. Change directories to be in the root folder of the project.
3. If your virtual environment is not active, activate it:

```bash
source .venv/bin/activate
```

4. Start a local API server to send the requests to.

```bash
./api/dev.sh
```

5. Run the script to get the results.

```bash
# This command will show results in your terminal:
python3 api/scripts/time_endpoints.py
```

```bash
# Alternatively, this command will write results to a file:
python3 api/scripts/time_endpoints.py > results.txt
```

6. Copy the results to include in your pull request or doc.
7. If you wrote results to a file, delete or gitignore that file

## Comparison

If you are trying to compare the response time of a request before and after a change, you will need to follow the above instructions twice. Once for the state of the code and data before the change and once after the change. You might switch between different branches or different commits to do this.

Remember to run these commands to unpack the version of the database for the branch or commit you are on:

```bash
cd pipeline
make uncompressed
cd ..
```

## Caveats

There are several reasons why these results may not be good estimates of how long a request will take in production:

- This script only runs each request once to time it
- The server is running locally on your machine
    - Request transit time is likely lower
    - Resources on your machine may differ from our production server
    - No simulated load, the script is probably the only client sending requests to the local server
- This timing includes sending, receiving, and parsing the request
    - May not include time needed to process and render the data on the frontend

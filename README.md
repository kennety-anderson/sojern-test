### Favorite dogs how to exec.

> cd favorite-dogs

> npm i

> npm start

After those commands you will have the local endpoit to access.

#### Routes

> /

##### List the dogs images

> /favorites

##### List your favorites dogs images

### Compare versions how to exec.

> cd compare-versions

For exec this util you need edit the file `compare-versions` at line number `16` with the versions values.

> python compare-versions.py

#### Obs:

##### Python 3.9

### Math api how to exec

This project was built with `Flask`.

> cd math-api

> python3 -m venv venv

> . venv/bin/activate

> flask --app app run

After those commands you will have the local endpoint to access.

#### Routes - endpoints

> /min - POST

##### Return how many min numbers was passed

> /max - POST

##### Return how many numbers was passed

> /avg - POST

##### Return the average

> /median - POST

##### Return the median

> /percentile - POST

##### Return teh percentile

#### Body to endpoints - JSON

`/min`, `/max`, `/avg`, `/median`.

```json
{
  "list": [1, 2, 3, 3]
}
```

#### Body to endpoint

`/percentile`

```json
{
  "list": [1, 2, 3, 3],
  "q": 30
}
```

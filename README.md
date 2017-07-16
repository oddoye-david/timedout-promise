# Timedout Promise

Utility function to set a timeout in milliseconds for promises.

## Usage
```
const timedoutPromise = require('timedout-promise');

timedoutPromise(1000, fetch('https://foo.bar/fiz'))
  .then((data) => console.log(`${data.length} loaded before 1000ms`))
  .catch(() => console.log('Timed out in 1000ms'))

```

## Tests
```
> yarn test
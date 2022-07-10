# format-fl - a floating point number utility

A floating point number utility to stringify special number representation formats.

## Background

This project is a task I had to implement for a job interview process.
The requirements were a bunch of assertions that have to succeed.

**Using bun** (https://bun.sh) **as the runtime in these examples.**

### Installation

Simply install the bun package:

```
bun add format-fl
```

### Installation from source

Run to install dev-dependencies:

```
bun install
```

### Tests

Run for unit tests:

```
bun wiptest
```

### Documentation

Run to generate docs with [typedoc]():

```
bun run docs
```

This command will generate a folder `./docs` which includes static-site files.
To use the documentation locally, simply open the `./docs/index.html` file.

### Build for publishing

If you want to publish this package on npm, simply build the files with

```
npm run build
```

and publish the package with

```
npm publish
```

### Usage

Import the function and simply use it anywhere you need:

```javascript
const { format } = require('format-fl')

console.log(format(12342.555, 2))
// logs "12.342,56"
```

Or in typescript:

```typescript
import { format } from 'format-fl'

const formattedNumber: string = format(12342.555, 2)

console.log(formattedNumber)
// logs "12.342,56"
```
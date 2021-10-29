# format-fl - a floating point number utility

A floating point number utility to stringify special number representation formats.

## Background

This project is a task I had to implement for a job interview process.
The requirements were a bunch of assertions that have to succeed.

### Installation

Run to install dev-dependencies:

```
npm ci
```

### Tests

Run for unit tests:

```
npm run test
```

Run for code coverage:

```
npm run coverage
```

### Documentation

Run to generate docs with [typedoc]():

```
npm run docs
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
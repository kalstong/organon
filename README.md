# organon
Just a tool, a lib, a bunch of code I use!

[![Node.js Package - NPM](https://github.com/kalstong/organon/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/kalstong/organon/actions/workflows/npm-publish.yml)
[![Node.js Package - Github](https://github.com/kalstong/organon/actions/workflows/npm-publish-github-packages.yml/badge.svg?branch=main)](https://github.com/kalstong/organon/actions/workflows/npm-publish-github-packages.yml)

## Errors Module

### Types:
- ConnectionError
- CriticalError
- ExecutionError

Example of usage
```javascript
const { CriticalError } = require('../errors')

const err = new CriticalError('Sample message', { more: 'information' })
```

Example of console.log
```javascript
    CriticalError: Sample message
        at Object.<anonymous> (/home/kal/code/organon/tests/errors.test.js:16:17)
        at Promise.then.completed (/home/kal/code/organon/node_modules/jest-circus/build/utils.js:293:28)
        at new Promise (<anonymous>)
        at callAsyncCircusFn (/home/kal/code/organon/node_modules/jest-circus/build/utils.js:226:10)
        at _callCircusTest (/home/kal/code/organon/node_modules/jest-circus/build/run.js:297:40)
        at processTicksAndRejections (node:internal/process/task_queues:95:5)
        at _runTest (/home/kal/code/organon/node_modules/jest-circus/build/run.js:233:3)
        at _runTestsForDescribeBlock (/home/kal/code/organon/node_modules/jest-circus/build/run.js:135:9)
        at run (/home/kal/code/organon/node_modules/jest-circus/build/run.js:68:3)
        at runAndTransformResultsToJestFormat (/home/kal/code/organon/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
        at jestAdapter (/home/kal/code/organon/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
        at runTestInternal (/home/kal/code/organon/node_modules/jest-runner/build/runTest.js:367:16)
        at runTest (/home/kal/code/organon/node_modules/jest-runner/build/runTest.js:444:34) {
      isOperational: false,
      extra: { more: 'information' }
    }
```

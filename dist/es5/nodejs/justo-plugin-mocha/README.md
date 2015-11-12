[![Build Status](https://travis-ci.org/justojsp/justo-plugin-mocha.svg)](https://travis-ci.org/justojsp/justo-plugin-mocha)

Simple task to run the `mocha` command.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-mocha
```

Dependencies:

```
npm install -g mocha
```

## Use

```
const mocha = require("justo-plugin-mocha");
```

To run `mocha`, the task must be called as follows:

```
mocha(opts, config) : number
mocha(opts, ...files) : number
```

Configuration object:

- `files` (string[]). Files to run. Default: `["./test"]`.
- `reporter` (string). The reporter. For example, `spec`, `dot`, etc.
- `sort` (boolean). Sort test files: `true`, yep; `false`, nope.
- `colored` (boolean). Force enabling of colors: `true`, yep; `false`, nope. Default: `true`.
- `requires` (string[]). Require the given modules.
- `timeout` (number). Set test-case timeout in milliseconds.
- `ui` or `userInterface` (string). Specify user-interface: `bdd`, `tdd` or `exports`.
- `checkLeaks` (boolean). Check for global variable leaks: `true`, yep; `false`, nope.
- `output` (boolean). Display the mocha output: `true`, yep; `false`, nope. Default: `true`.

Examples:

```
mocha("Unit test", "test/unit/lib/mod1.js", "test/unit/lib/mod2.js");
mocha("Unit test", {
  files: [
    "test/unit/lib/mod1.js",
    "test/unit/lib/mod2.js"
  ],
  reporter: "spec",
  sort: true,
  colored: true,
  requires: ["justo-assert"],
  timeout: 3000,
  ui: "bdd",
  checkLeaks: true
});
```

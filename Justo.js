//imports
const register = require("justo").register;
const babel = require("justo-plugin-babel");
const clean = require("justo-plugin-clean");
const copy = require("justo-plugin-copy");
const jshint = require("justo-plugin-jshint");

//works
register({name: "build", desc: "Build the package."}, function() {
  clean("Clean build directory", {
    dirs: ["build/es5"]
  });

  jshint("Best practices", {
    output: true,
    files: [
      "lib/mocha.js",
      "lib/index.js"
    ]
  });

  babel("Transpile", {
    comments: false,
    retainLines: true,
    files: {
      "build/es5/lib/index.js": "lib/index.js",
      "build/es5/lib/mocha.js": "lib/mocha.js"
    }
  });

  clean("Clean dist directory", {
    dirs: ["dist/es5"]
  });

  copy(
    "Create package",
    {
      src: "build/es5/lib/",
      dst: "dist/es5/nodejs/justo-plugin-mocha/lib"
    },
    {
      src: ["package.json", "README.md"],
      dst: "dist/es5/nodejs/justo-plugin-mocha"
    }
  );
});

register({name: "test", desc: "Unit test."}, {
  require: "justo-assert",
  src: [
    "test/unit/lib/mocha.js"
  ]
});

register("default", ["build", "test"]);

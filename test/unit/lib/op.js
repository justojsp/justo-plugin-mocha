//imports
const path = require("path");
const suite = require("justo").suite;
const test = require("justo").test;
const mocha = require("../../../dist/es5/nodejs/justo-plugin-mocha/lib/op").default;

//suite
suite("#mocha()", function() {
  const DATA_DIR = "test/unit/data";

  test("mocha(...files)", function() {
    mocha([path.join(DATA_DIR, "suite1.js"), path.join(DATA_DIR, "suite2.js")]).must.be.eq(0);
  });

  test("mocha(config)", function() {
    mocha([{
      files: [path.join(DATA_DIR, "suite1.js"), path.join(DATA_DIR, "suite2.js")],
      reporter: "spec",
      sort: true,
      colored: false,
      requires: [],
      timeout: 3000,
      ui: "bdd",
      checkLeaks: true,
      output: false
    }]).must.be.eq(0);
  });

  test("mocha(config) - error", function() {
    mocha.must.raise(Error, [{
      files: [path.join(DATA_DIR, "unknown.js")],
      output: false
    }]);
  });
})();

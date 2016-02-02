//imports
import {simple} from "justo";

//api
module.exports = simple({ns: "org.justojs.plugin", name: "mocha"}, require("./lib/op").default);

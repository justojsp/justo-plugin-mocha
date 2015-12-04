"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = 






mocha;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}var _os = require("os");var _os2 = _interopRequireDefault(_os);var _child_process = require("child_process");var _child_process2 = _interopRequireDefault(_child_process);function mocha(params) {
  var cmd, args = [], res;


  if (params.length === 0) {
    params = { files: ["./test"] };} else 
  if (params.length == 1) {
    if (typeof params[0] == "string") params = { files: params };else 
    params = params[0];} else 
  if (params.length >= 2) {
    params = { files: params };}


  if (!params.files) params.files = { files: ["./test"] };
  if (!params.hasOwnProperty("output")) params.output = true;
  if (!params.hasOwnProperty("colored")) params.colored = true;


  if (/^win/.test(_os2["default"].platform())) cmd = "mocha.cmd";else 
  cmd = "mocha";

  if (params.reporter) {
    args.push("-R");
    args.push(params.reporter);}


  if (params.requires) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
      for (var _iterator = params.requires[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var r = _step.value;
        args.push("-r");
        args.push(r);}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator["return"]) {_iterator["return"]();}} finally {if (_didIteratorError) {throw _iteratorError;}}}}



  if (params.timeout) {
    args.push("-t");
    args.push(params.timeout);}


  if (params.ui || params.userInterface) {
    args.push("-u");
    args.push(params.ui || params.userInterface);}


  if (params.sort) args.push("-S");
  if (params.colored) args.push("-c");
  if (params.checkLeaks) args.push("--check-leaks");var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
    for (var _iterator2 = params.files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var f = _step2.value;args.push(f);}} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2["return"]) {_iterator2["return"]();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}


  res = _child_process2["default"].spawnSync(cmd, args);

  if (params.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stderr.toString());


  return res.status;}module.exports = exports["default"];

//imports
import os from "os";
import child_process from "child_process";

/**
 * Runs babel CLI.
 */
export default function mocha(params) {
  var cmd, args = [], res;

  //(1) arguments
  if (params.length === 0) {
    params = {files: ["./test"]};
  } else if (params.length == 1) {
    if (typeof(params[0]) == "string") params = {files: params};
    else params = params[0];
  } else if (params.length >= 2) {
    params = {files: params};
  }

  if (!params.files) params.files = {files: ["./test"]};
  if (!params.hasOwnProperty("output")) params.output = true;
  if (!params.hasOwnProperty("colored")) params.colored = true;

  //(2) determine command
  if (/^win/.test(os.platform())) cmd = "mocha.cmd";
  else cmd = "mocha";

  if (params.reporter) {
    args.push("-R");
    args.push(params.reporter);
  }

  if (params.requires) {
    for (let r of params.requires) {
      args.push("-r");
      args.push(r);
    }
  }

  if (params.timeout) {
    args.push("-t");
    args.push(params.timeout);
  }

  if (params.ui || params.userInterface) {
    args.push("-u");
    args.push(params.ui || params.userInterface);
  }

  if (params.sort) args.push("-S");
  if (params.colored) args.push("-c");
  if (params.checkLeaks) args.push("--check-leaks");
  for (let f of params.files) args.push(f);

  //(3) run
  res = child_process.spawnSync(cmd, args);

  if (params.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stderr.toString());

  //(3) return
  return res.status;
}

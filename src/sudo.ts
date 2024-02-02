import fs from "fs";
import os from "os";
import path from "path";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import * as process from "process";
import * as cache from "@actions/cache";

async function execBash(cmd : string) {
  await exec.exec("sh", ["-xc", cmd]);
}

async function execBashSudo(cmd : string) {
  await execBash("$(which sudo) " + cmd);
}

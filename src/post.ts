import os from "os";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import * as process from "process";
import { execBash } from './sudo'
import { execBashSudo } from './sudo'

export async function InstallDep(): Promise<void> {
    execBash("$HOME/clang/bin/clang --version");
}

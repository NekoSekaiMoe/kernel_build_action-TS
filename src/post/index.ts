import os from "os";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import * as process from "process";

export async function post(): Promise<void> {
    exec.exec("$HOME/clang/bin/clang --version");
}

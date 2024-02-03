import fs from "fs";
import os from "os";
import path from "path";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import * as process from "process";
import * as cache from "@actions/cache";

export const python2 = core.getInput('python2', { required: false });
export const KernelUrl = core.getInput('KernelUrl', { required: true });
export const branch = core.getInput('branch', { required: true });
export const depth = core.getInput('depth', { required: false });
export const KernelDir = core.getInput('KernelDir', { required: false });
export const arch = core.getInput('arch', { required: true });
export const config = core.getInput('config', { required: false });
export const ksu = core.getInput('ksu', { required: false });
export const KsuVersion = core.getInput('KsuVersion', { required: false });




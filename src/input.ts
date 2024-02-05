import fs from "fs";
import os from "os";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";

export const python2 = core.getInput('python2', { required: false });
export const KernelUrl = core.getInput('KernelUrl', { required: true });
export const branch = core.getInput('branch', { required: true });
export const depth = core.getInput('depth', { required: false });
export const KernelDir = core.getInput('KernelDir', { required: false });
export const arch = core.getInput('arch', { required: true });
export const config = core.getInput('config', { required: true });
export const vendor = core.getInput('vendor', { required: false });
export const VendorDir = core.getInput('VendorDir', { required: false });
export const VendorUrl = core.getInput('VendorUrl', { required: false });
export const ksu = core.getInput('ksu', { required: false });
export const KsuVersion = core.getInput('KsuVersion', { required: false });
export const AospGcc = core.getInput('AospGcc', { required: true });
export const AospClang = core.getInput('AospClang', { required: false });
export const AndroidVersion = core.getInput('AndroidVersion', { required: true });


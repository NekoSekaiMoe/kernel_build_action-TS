import fs from "fs";
import os from "os";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";

export async function PullVendor(): Promise<void> {
    if (python2 === 'true') {

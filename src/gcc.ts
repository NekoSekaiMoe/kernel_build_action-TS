import fs from "fs";
import os from "os";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import { KernelUrl } from "./input";

export async function InstallGcc(): Promise<void> {
    if (AospGcc === 'true') {
        console.log("Installing AOSP GCC");
    }
}

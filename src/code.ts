import fs from "fs";
import os from "os";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import { KernelUrl } from "./input";
import { KernelDir } from "./input";
import { branch } from "./input";
import { vendor } from "./input";
import { VendorUrl } from "./input";
import { VendorDir } from "./input"
import { execBash } from "./sudo"

export async function PullCode(): Promise<void> {
    console.log("Pulling Kernel Source Code");
    await execBash("git clone ${KernelUrl} -b ${branch} --recursive --depth=${depth} kernel/${KernelDir}");
    if (vendor === 'true') {
        console.log("Pulling Kernel Vendor Code");
        await execBash("git clone ${VendorUrl} --depth=${depth} ${VendorDir}");
    }
}

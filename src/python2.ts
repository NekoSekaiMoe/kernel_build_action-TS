import os from "os";
import path from "path";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import { execBash } from './sudo'
import { execBashSudo } from './sudo'
import { python2 } from './input'

export async function InstallPython2(): Promise<void> {
    if (python2 === 'true') {
        console.log("Installing Python2.7 instead Python3");
        await execBashSudo("apt-get install -y python2.7 python2.7-minimal")
        if (await io.which("/bin/python")) {
            await execBashSudo("rm -rf /bin/python");
            await execBashSudo("ln -v -s /bin/python2.7 /bin/python");
            return;
        } else if (await io.which("/bin/python2")) {
            await execBashSudo("rm -rf /bin/python2");
            await execBashSudo("ln -v -s /bin/python2.7 /bin/python2");
            return;
        }
    }
}

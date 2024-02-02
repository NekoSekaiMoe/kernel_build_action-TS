import fs from "fs";
import os from "os";
import path from "path";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import * as process from "process";
import * as cache from "@actions/cache";

export async function python2(): Promise<void> {
    const python2 = core.getInput('python2', { required: false });
    if (python2 === 'true') {
        console.log("Installing Python2.7 instead Python3");
        await exec.exec("sudo apt-get install -y python2.7 python2.7-minimal")
        if (await io.which("/bin/python")) {
            await exec.exec("sudo rm -rf /bin/python");
            await exec.exec("sudo ln -v -s /bin/python2.7 /bin/python");
            return;
        } else if (await io.which("/bin/python2")) {
            await exec.exec("sudo rm -rf /bin/python2");
            await exec.exec("sudo ln -v -s /bin/python2.7 /bin/python2");
            return;
        }
    }
}

import * as os from "os";
import * as fs from 'fs';
import * as path from 'path';
import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as io from "@actions/io";
import { nethunter, nethunterPatch, KernelDir, config, arch } from './input';

export async function InitNethunter(): Promise<void> {
    if (nethunter === 'true') {
        console.log("Initializing Nethunter");
        const directoryPath = `./kernel/${KernelDir}`;
        const ApatchConfig = `${directoryPath}/Apatch/Kconfig`;
        if (await io.which(ApatchConfig)) {
            console.log("Nethunter is Initialized.Skipping.");
            return;
        }
        try {
            const command = `wget https://github.com/Biohazardousrom/Kali-defconfig-checker/raw/master/check-kernel-config && bash check-kernel-config ${config} -w`;

            const options = {
                cwd: directoryPath,
            };
            await exec.exec(command, [], options);
        }

        finally{
           await exec.exec("echo CONFIG_APATCH_SUPPORT=y >>${KernelDir}/arch/${arch}/${config}");
        }
    }
}

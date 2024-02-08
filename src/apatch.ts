import * as os from "os";
import * as fs from 'fs';
import * as path from 'path';
import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as io from "@actions/io";
import { apatch, directoryPath, config, arch } from './input';

export async function InitApatch(): Promise<void> {
    if (apatch === 'true') {
        console.log("Initializing APatch");
        const ApatchConfig = `${directoryPath}/Apatch/Kconfig`;
        if (await io.which(ApatchConfig)) {
            console.log("Apatch is Initialized.Skipping.");
            return;
        }
        try {
            const command = `mkdir drivers/apatch && aria2c https://github.com/dabao1955/kernel_build_action/raw/main/apatch/fix_module.patch && git apply fix_module.patch`;

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

import * as os from "os";
import * as fs from 'fs';
import * as path from 'path';
import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as io from "@actions/io";
import { ksu, directoryPath, KsuVersion } from './input';

export async function InitKSU(): Promise<void> {
    if (ksu === 'true') {
        console.log("Initializing KsernelSU");
        const ksuConfig = `${directoryPath}/KernelSU/Kconfig`;
        if (await io.which(ksuConfig)) {
            console.log("KernelSU is Initialized.Skipping.");
            return;
        }
        try {
            const command = `curl -SsL https://github.com/tiann/KernelSU/raw/main/kernel/setup.sh | bash -s ${KsuVersion}`;

            const options = {
                cwd: directoryPath,
            };
            await exec.exec(command, [], options);
        }

        finally{
           console.log("Ksu");
        }
    }
}

import * as os from "os";
import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';
import * as core from "@actions/core";
import * as exec from "@actions/exec";
import { ksu } from './input';
import { KernelDir } from './input';
import { KsuVersion } from './run';
import { execBash } from './sudo'

export async function InitKSU(): Promise<void> {
    if (ksu === 'true') {
      console.log(" Initializing KsernelSU");
      const directoryPath = './kernel/${KernelDir}';
      exec(`curl -SsL https://github.com/tiann/KernelSU/raw/main/kernel/setup.sh | bash -s ${KsuVersion}}`, { cwd: directoryPath }, (error, stdout, stderr) => {
      if (error) {
          console.error(`exec error: ${error}`);
          return 1;
      }
    }
  }
}

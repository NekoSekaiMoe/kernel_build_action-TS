import os from "os";
import path from "path";
import { containsText } from './file';
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import { execBash } from './sudo'
import { lto, arch, config, directoryPath, filePath } from './input'

export async function DisableLto(): Promise<void> {
    if (lto === 'false') {
        const searchText = 'LTO';
        if (containsText(filePath, searchText)) {
            execBash("sed -i 's/CONFIG_LTO=y/CONFIG_LTO=n/' arch/${arch}/configs/${config}");
            execBash("sed -i 's/CONFIG_LTO_CLANG=y/CONFIG_LTO_CLANG=n/' arch/${arch}/configs/${config}");
            execBash("sed -i 's/CONFIG_THINLTO=y/CONFIG_THINLTO=n/' arch/${arch}/configs/${config}");
            execBash("echo 'CONFIG_LTO_NONE=y' >> arch/${arch}/configs/${config}");
        }
    }
}

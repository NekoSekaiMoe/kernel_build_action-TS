import os from "os";
import path from "path";
import { containsText } from './file';
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import { execBash } from './sudo'
import { overlayfs, directoryPath, filePath } from './input'

export async function InitOverlay(): Promise<void> {
    if (overlayfs === 'true') {
        const searchText = 'LTO';
        if (containsText(filePath, searchText)) {
            execBash("echo 'CONFIG_OVERLAY_FS=y' >>  >> ${filePath}");
        }
    }
}

import fs from "fs";
import os from "os";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import { AospGcc } from "./input";
import { AospClang } from "./input";
import { execMkdir } from "./sudo";
import { execDown } from "./sudo";
import { execBash } from "./sudo";

export async function InstallGcc(): Promise<void> {
    if (AospGcc === 'true') {
        console.log("Installing AOSP GCC");
        execMkdir($HOME/gcc-64);
        execMkdir($HOME/gcc-32);
        if (AospClang === 'true') {
            execDown(https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/+archive/refs/tags/android-12.1.0_r27.tar.gz -o gcc-aarch64.tar.gz);
            execBash(tar -C $HOME/gcc-64 -zxf gcc-aarch64.tar.gz);
            execDown(https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/arm/arm-linux-androideabi-4.9/+archive/refs/tags/android-12.1.0_r27.tar.gz -o gcc-aarch -o gcc-arm.tar.gz);
            execBash(tar -C $HOME/gcc-32 -zxf gcc-arm.tar.gz)
        } else {
            execBash(git clone https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/ --depth=1 -b android${AndroidVersion}-release $HOME/gcc-64);
            execBash(git clone https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/arm/arm-linux-androideabi-4.9/ --depth=1 -b android${AndroidVersion}-release $HOME/gcc-32);
            return;
        }
    }
}

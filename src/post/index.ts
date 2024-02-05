import os from "os";
import * as core from "@actions/core";
import * as exec from "@actions/exec";

async function post(): Promise<void> {
    if (await io.which("$HOME/gcc-64/bin")) {
        await exec.exec("HOME/gcc-64/bin/aarch64-linux-android-as --version");
        return;
    } else if (await io.which("$HOME/clang/bin/clang")) {
        await exec.exec("$HOME/clang/bin/clang --version");
        return;
    }
}

(async () => {
    try {
        await post();
    } catch (error) {
        console.error("Failed to run post step.");
        return 1;
    }
})();

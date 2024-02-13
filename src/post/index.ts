import os from "os";
import * as  io from "@actions/io";
import * as core from "@actions/core";
import * as exec from "@actions/exec";

async function post(): Promise<void> {
    if (await io.which(os.homedir() + "/gcc-64/bin")) {
        await exec.exec("HOME/gcc-64/bin/aarch64-linux-android-as --version");
        return;
    } else if (await io.which(os.homedir() + "/clang/bin/clang")) {
        await exec.exec(os.homedir() + "/clang/bin/clang --version");
        return;
    } else {
        await console.error("Failed to load compiler.");
        process.exit(127);
    }
}

(async () => {
    try {
        if (process.env.GITHUB_ACTIONS === 'true') {
            await post();
        } else {
            console.error("This Cleanup Script Is Intended For Github Action Runner.");
            process.exit(2);
        }
    } catch (error) {
        console.error("Failed to execute post step.");
        process.exit(1);
    }
})();

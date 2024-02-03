import os from "os";
import * as core from "@actions/core";
import * as exec from "@actions/exec";

async function post(): Promise<void> {
    await exec.exec("echo 6");
}

(async () => {
    try {
        await post();
    } catch (error) {
        console.error("Failed to run post step.");
        return 1;
    }
})();

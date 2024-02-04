import fs from "fs";
import os from "os";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";

export async function swap(): Promise<void> {
    console.log("SettingUp Swap");
    for (let i in [ "export SWAP_FILE=$(swapon --show=NAME | tail -n 1)", "sudo swapoff $SWAP_FILE", "sudo rm $SWAP_FILE", "sudo fallocate -l 16G $SWAP_FILE", "sudo chmod 600 $SWAP_FILE", "sudo mkswap $SWAP_FILE", "sudo swapon $SWAP_FILE" ]) { await exec.exec(i); }
}

import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import { execBash } from './sudo'

export async function cleanup(): Promise<void> {
    console.log("Cleaning Up.");
    execBash("docker rmi -f $(docker images -q");
    execBash("wget -q https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh && NONINTERACTIVE=1 bash ./uninstall.sh -f -q");
}

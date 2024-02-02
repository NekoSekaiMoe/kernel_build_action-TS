import os from "os";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import * as process from "process";
import { execBash } from './sudo'
import { execBashSudo } from './sudo'

export async function InstallDep(): Promise<void> {
    console.log("Install build dependences");
    if (await io.which("apt-get")) {
      await execBashSudo("apt-get install --no-install-recommends -y binutils binutils-aarch64-linux-gnu binutils-arm-linux-gnueabi git ccache automake flex lzop bison gperf build-essential zip curl zlib1g-dev g++-multilib libxml2-utils bzip2 libbz2-dev libbz2-1.0 libghc-bzlib-dev squashfs-tools pngcrush schedtool dpkg-dev liblz4-tool make optipng maven libssl-dev pwgen libswitch-perl policycoreutils minicom libxml-sax-base-perl libxml-simple-perl bc libc6-dev-i386 lib32ncurses5-dev libx11-dev lib32z-dev libgl1-mesa-dev xsltproc unzip device-tree-compiler python3 aria2");
      return;
    }
}

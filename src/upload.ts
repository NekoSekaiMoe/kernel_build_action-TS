import os from "os";
import path from "path";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";
import { anykernel3, KernelPath, BootimgUrl } from './input';
import { execBash, execMkdir, execDown } from './sudo'

export async function upload(): Promise<void> {
    execMkdir("./out");
    if (anykernel3 === 'true') {
        console.log("Packaging Anykernel3 Flasher");
        execBash("git clone https://github.com/osm0sis/AnyKernel3");
        execBash("sed -i 's!block=/dev/block/platform/omap/omap_hsmmc.0/by-name/boot;!block=auto;!g' AnyKernel3/anykernel.sh");
        execBash("sed -i 's/do.devicecheck=1/do.devicecheck=0/g' AnyKernel3/anykernel.sh");
        execBash("sed -i 's/is_slot_device=0;/is_slot_device=auto;/g' AnyKernel3/anykernel.sh");
        if (await io.which("${KernelPath}/Image.*-dtb")) {
            execBash("cp ${KernelPath}/Image.*-dtb AnyKernel3");
        } else if (await io.which("${KernelPath}/Image.*")) {
            execBash("cp ${KernelPath}/Image.* AnyKernel3");
        } else if (await io.which("${KernelPath}/Image")) {
            execBash("cp ${KernelPath}/Image AnyKernel3");
        }
        if (await io.which("${KernelPath}/dtbo.img")) {
            execBash("cp ${KernelPath}/dtbo.img AnyKernel3");
        }
        execBash("zip -R anykernel3-flasher.zip AnyKernel3/*");
        execBash("mv anykernel3-flasher.zip out");
        console.log("anykernel3-flasher is ready,you can find it in out directory.");
    } else {
        console.log("Preparing to Upload boot.img");
        execBash("git clone https://github.com/Shubhamvis98/AIK");
        execDown("${BootimgUrl} -o boot.img");
        execBash("nohup bash AIK/unpackimg ../boot.img");  
    }
}

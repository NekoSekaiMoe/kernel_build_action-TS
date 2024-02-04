import { swap } from './swap';
import { InstallDep } from './install-dep';
import { InstallPython2 } from './python2';
import { PullCode } from "./code";
import { InitKSU } from './ksu';

export async function run(): Promise<void> {
    await swap();
    await InstallDep();
    await InstallPython2();
    await PullCode();
    await InitKSU();
}


import { cleanup } from './cleanup';
import { swap } from './swap';
import { InstallDep } from './install-dep';
import { InstallPython2 } from './python2';
import { PullCode } from './code';
import { InstallGcc } from "./gcc";
import { InitKSU } from './ksu';
import { InitApatch } from './apatch';
import { InitNethunter } from './nethunter';
import { DisableLto } from './lto';
import { InitOverlay } from './overlay';
import { compile } from './compile';
import { upload } from './upload';

export async function run(): Promise<void> {
    await cleanup();
    await swap();
    await InstallDep();
    await InstallGcc();
    await InstallPython2();
    await PullCode();
    await InitKSU();
    await InitApatch();
    await InitNethunter();
    await DisableLto();
    await InitOverlay();
    await compile();
    await upload();
}


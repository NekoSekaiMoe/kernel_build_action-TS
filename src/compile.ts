import { execBash } from './sudo'
import { arch, config, directoryPath, ccache, AospClang, AospGcc, AndroidNdk } from './input'

export async function compile(): Promise<void> {
    console.log("Building Kernel.")
    if (AndroidNdk === 'true') {
        if (ccache === 'true') {
            await execBash("apt-get install -y python2.7 python2.7-minimal");
            await execBash("apt-get install -y python2.7 python2.7-minimal");
        } else {
            await execBash("apt-get install -y python2.7 python2.7-minimal");
            await execBash("apt-get install -y python2.7 python2.7-minimal");
        }
    } else {
        await execBash("apt-get install -y python2.7 python2.7-minimal");
        await execBash("apt-get install -y python2.7 python2.7-minimal");
    }
}

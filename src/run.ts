import { swap } from './swap'
import { InstallDep } from './install-dep'
import { InstallPython2 } from './python2'

export async function run(): Promise<void> {
    swap()
    InstallDep()
    InstallPython2()
}


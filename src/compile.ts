import { execBash } from './sudo'
import { arch, config, directoryPath, ccache, AospClang, AospGcc, OtherClang } from './input'

export async function compile(): Promise<void> {
    console.log("Building Kernel.")
}

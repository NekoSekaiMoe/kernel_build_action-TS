import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

const streamPipeline = promisify(pipeline);

export async function downloadFile(fileUrl: string, outputPath: string): Promise<void> {
    const response = await fetch(fileUrl);
    
    if (!response.ok) {
        throw new Error(`Unexpected response ${response.statusText}`);
    }

    return streamPipeline(response.body, fsPromises.createWriteStream(outputPath));
}

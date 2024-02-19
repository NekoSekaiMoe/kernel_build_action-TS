import fetch from 'node-fetch';
import { promises as fsPromises, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

const streamPipeline = promisify(pipeline);

export async function downloadFile(fileUrl: string, outputPath: string): Promise<void> {
    const response = await fetch(fileUrl);

    if (!response.ok) {
        throw new Error(`Unexpected response: ${response.statusText}`);
    }

    const writer = createWriteStream(outputPath);

    if (response.body) {
        await streamPipeline(response.body, writer);
    } else {
        throw new Error('Unable to download file: The response body is null.');
    }
}

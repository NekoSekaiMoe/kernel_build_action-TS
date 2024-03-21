import { execBash } from './sudo';

export const fileUrl = `${downUrl}`;
export const outputPath = `${downPath}`;

downloadFile(fileUrl, outputPath)
    .then(() => execBash('echo File downloaded successfully.'))
    .catch(e => console.error('Download failed.'));

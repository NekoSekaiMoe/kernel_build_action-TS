import { readFileSync } from 'fs';

export function containsText(filePath: string, searchText: string): boolean {
    const content = readFileSync(filePath, 'utf8');
    return content.includes(searchText);
}

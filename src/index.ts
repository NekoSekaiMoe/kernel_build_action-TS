/**
 * The entrypoint for the action.
 */
import { run } from './run'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
    try {
        await run();
    } catch (error) {
        console.error("Failed to execute action. Please to contect project owner.");
        process.exit(1);
    }
})();

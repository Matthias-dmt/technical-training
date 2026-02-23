const STATE_SUCCESS = 'SUCCESS';

export function logParser(input: string[]):Record<string, number> | null {
    if(input.length === 0) return null;

    const parsedLog: Record<string, number> = {};

    for(const log of input) {
        const formatedLog = log.split('|');
        const [timestamp, userId, status] = formatedLog

        if (!timestamp || !userId || !status || status !== STATE_SUCCESS) continue;

        parsedLog[userId] = (parsedLog[userId] ?? 0) + 1
    }

    return parsedLog;
}

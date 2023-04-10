import { readFileSync } from 'fs';

export default class Jsonhelper {
    public static async extractKeyValuePair(key1: string, key2: string) {
        let jsonString = readFileSync('./src/test-data/test.json', { encoding: 'utf8', flag: 'r' });
        let rawdata: string = await JSON.parse(jsonString);
        const result: string = await rawdata[key1][key2];
        return result;
    }
}

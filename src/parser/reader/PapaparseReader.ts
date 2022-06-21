import { ReaderInterface } from "../../interfaces/ReaderInterface";
import papa from "papaparse";

export class PapaparseReader implements ReaderInterface {
    parse(fileName: string): NodeJS.ReadWriteStream {
        return papa.parse(papa.NODE_STREAM_INPUT, {});
    }

}
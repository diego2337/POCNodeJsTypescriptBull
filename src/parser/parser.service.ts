import { ReaderInterface } from "../interfaces/ReaderInterface";
import { CsvReader } from "./reader/CsvReader";
import { PapaparseReader } from "./reader/PapaparseReader";
import { XlsxReader } from "./reader/XlsxReader";

export class ParserService {
    reader?: ReaderInterface;

    constructor(readerType: string = "xlsx") {
        if (readerType == "xlsx") {
            this.reader = new XlsxReader();
        } else if (readerType == "csv") {
            this.reader = new CsvReader();
        } else if (readerType == "papaparse") {
            this.reader = new PapaparseReader();
        } else {
            throw "Unknown reader type";
        }
    }
    
    async handleParse(fileName: string): Promise<string> {
        if(this.reader) {
            return this.reader.parse(fileName);
        }
        return "Unprocessed";
    }
}

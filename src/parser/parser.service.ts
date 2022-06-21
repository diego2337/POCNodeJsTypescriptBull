import { ReaderInterface } from "../interfaces/ReaderInterface";
import { CsvReader } from "./reader/CsvReader";
import { PapaparseReader } from "./reader/PapaparseReader";
// import { XlsxReader } from "./reader/XlsxReader";
import fs from "fs";

export class ParserService {
    reader?: ReaderInterface;

    constructor(readerType: string = "xlsx") {
        // if (readerType == "xlsx") {
        //     this.reader = new XlsxReader();
        // } else 
        if (readerType == "csv") {
            this.reader = new CsvReader();
        } else if (readerType == "papaparse") {
            this.reader = new PapaparseReader();
        } else {
            throw "Unknown reader type";
        }
    }
    
    async handleParse(fileName: string): Promise<string> {
        if(this.reader) {
            const dataStream = fs.createReadStream('files/' + fileName);
            const parseStream = await this.reader.parse(fileName);
            dataStream.pipe(parseStream);

            parseStream.on('data', (chunk) => {
                console.log('chunk of data:');
                console.log(chunk);
            });
        }
        return "Unprocessed";
    }
}

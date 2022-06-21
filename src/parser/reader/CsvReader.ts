import { ReaderInterface } from "../../interfaces/ReaderInterface";

export class CsvReader implements ReaderInterface {
    parse(fileName: string): NodeJS.ReadWriteStream {
        throw new Error("Method not implemented.");
    }

}
import { ReaderInterface } from "../../interfaces/ReaderInterface";

export class CsvReader implements ReaderInterface {
    parse(fileName: string): string {
        throw new Error("Method not implemented.");
    }

}
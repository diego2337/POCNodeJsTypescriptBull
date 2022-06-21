export interface ReaderInterface {
    parse(fileName: string): NodeJS.ReadWriteStream;
}
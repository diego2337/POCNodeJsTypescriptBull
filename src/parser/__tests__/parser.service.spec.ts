import { ParserService } from "../parser.service";
import { CsvReader } from "../reader/CsvReader";
import { PapaparseReader } from "../reader/PapaparseReader";
import { XlsxReader } from "../reader/XlsxReader";

describe('ParserService', () => {
    let parserService: ParserService;

    beforeEach(async () => {
        expect.hasAssertions();
    });

    it('should be defined', () => {
        parserService = new ParserService();
        expect(parserService).toBeDefined();
    });

    it('should create an instance of \'XlsxReader\'', () => {
        parserService = new ParserService();
        expect(parserService.reader).toBeInstanceOf(XlsxReader);
    });

    it('should create an instance of \'CsvReader\'', () => {
        parserService = new ParserService('csv');
        expect(parserService.reader).toBeInstanceOf(CsvReader);
    });

    it('should create an instance of \'PapaparseReader\'', () => {
        parserService = new ParserService('papaparse');
        expect(parserService.reader).toBeInstanceOf(PapaparseReader);
    });

    it('should throw an error when instance is unknown', () => {
        try {
            parserService = new ParserService('unknown');
        } catch(error) {
            expect(error).toBe('Unknown reader type');
        }
    });
});
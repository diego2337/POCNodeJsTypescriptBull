import { ReaderInterface } from "../../interfaces/ReaderInterface";
import { Course } from "../types/course.type";
import { Worksheet } from "./Xlsx/Worksheet";

export class XlsxReader implements ReaderInterface {
    worksheet: Worksheet;

    constructor() {
        this.worksheet = new Worksheet(__dirname + "../../../../files/");
    }

    parse(fileName: string): string {
        this.worksheet.readFile(fileName);
        let sheetData = this.worksheet.pageData(0);
        if (this.worksheet.error_message || sheetData == undefined) {
            throw new Error(this.worksheet.error_message);
        } else {
            console.log("Read lines in sheet");
            for(var row in sheetData){
                // TODO - Map sheet headers to "Course" type
                let course = (sheetData[row] as Course);
                console.log(sheetData[row]);
                // console.log(`Linha ${row}: `, course.courseName, course.active, course.courseTotalPrice);
            }
            console.log("Finished reading lines in sheet");
        }
        return "dummy return";
    }
}
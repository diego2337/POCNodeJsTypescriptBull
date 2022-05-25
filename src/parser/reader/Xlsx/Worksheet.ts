import fs from "fs";
import path from "path";
import xlsx from "xlsx";

export class Worksheet {
    dir: string;
    worksheet: xlsx.WorkBook | undefined;
    error_message: string | undefined;

    constructor(dir: string){
        this.dir = dir;
        this.error_message = undefined;
    }

    readFile(fileName: string) {
        const fullPath = path.join(this.dir, fileName);

        if (fs.existsSync(fullPath)) {
            console.log("Planilha localizada:", fullPath);
        } else {
            console.log("Planilha NÃO localizada:", fullPath);
        }
        
        console.log("Lendo Planilha...");
        this.worksheet = xlsx.readFile(fullPath, { sheetRows: 11 });
    }

    pageData(pageIndex: number) {
        if (this.worksheet == undefined) {
            this.error_message = "Não possível acessar os dados da planilha! Você lembrou de chamar o readFile antes?";
            return;
        }

        let sheetsList = this.worksheet.SheetNames;
        console.log("Abas: ", sheetsList);

        let page = xlsx.utils.sheet_to_json(this.worksheet.Sheets[sheetsList[pageIndex]], {
            defval: "",
            blankrows: true,
          });
        
        return page;
    }
}
import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ParserController from "./parser/parser.controller";
import { ParserService } from "./parser/parser.service";

class App {
    public app: Express;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.app.use(cors());
        this.app.use(bodyParser.json());

        // this.initializeMiddlewares();
        this.initializeControllers();
    }

    private initializeControllers() {
        this.app.use('/', new ParserController(new ParserService()).router);
    }

    public listen() {
        this.app.listen(process.env.PORT, () =>
            console.log(`Server running on http://localhost:${process.env.PORT}`)
        );
    }
};

export default App;

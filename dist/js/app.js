"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const parser_controller_1 = __importDefault(require("./parser/parser.controller"));
const parser_service_1 = require("./parser/parser.service");
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.app.use((0, cors_1.default)());
        this.app.use(body_parser_1.default.json());
        // this.initializeMiddlewares();
        this.initializeControllers();
    }
    initializeControllers() {
        this.app.use('/', new parser_controller_1.default(new parser_service_1.ParserService()).router);
    }
    listen() {
        this.app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));
    }
}
;
exports.default = App;

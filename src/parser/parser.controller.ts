import { Response, Request, Router } from "express";

import { ParserService } from "./parser.service";

class ParserController {
    public path: string = "/parser";
    public router: Router = Router();
    public parserService: ParserService;
    
    constructor(parserService: ParserService) {
        this.parserService = parserService;
        
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, this.handleParse);
    }

    handleParse = async(req: Request, res: Response): Promise<void> => {
        try {
            const { body } = req;
            // TODO define "body" type to use 'fileName' typed
            const response = await this.parserService.handleParse(body.fileName);
            if (response == "Parse successful") {
                res.status(200).json({
                    messsage: response
                });
            } else {
                res.status(412).json({
                    message: response
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error
            });
            throw error;
        }
    };
};

export default ParserController;
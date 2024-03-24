import { Request, Response } from 'express';
import { TeddysModel } from "../model/teddys"

export class TeddysController {
    private teddysModel: TeddysModel;

    constructor(teddysModel: TeddysModel = new TeddysModel()) {
        this.teddysModel = teddysModel;
    }

    public getTeddysCustomizationOptions = async (req: Request, res: Response) => {
        try {
            const response = await this.teddysModel.getTeddysCustomizationOptions();
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
}
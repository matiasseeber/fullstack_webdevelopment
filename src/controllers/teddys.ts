import { Request, Response } from 'express';
import { TeddysModel } from "../model/teddys"

export class TeddysController {
    private teddysModel: TeddysModel;

    constructor(teddysModel: TeddysModel = new TeddysModel()) {
        this.teddysModel = teddysModel;
    }

    public createCustomizedTeddy = async (req: Request, res: Response) => {
        try {
            const response = await this.teddysModel.createCustomizedTeddy({ user_id: req.decoded.id, ...req.body });
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
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

    public getAllUserTeddys = async (req: Request, res: Response) => {
        try {
            const response = await this.teddysModel.getAllUserTeddys(req.decoded.id);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

    public deleteTeddy = async (req: Request, res: Response) => {
        try {
            const response = await this.teddysModel.deleteTeddy(req.params.id, req.decoded.id);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

    public getMostChosenAnimals = async (req: Request, res: Response) => {
        try {
            const response = await this.teddysModel.getMostChosenAnimals();
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
}
import { Router } from 'express';
import { TeddysController } from "../controllers/teddys";

const router = Router();

const teddysController: TeddysController = new TeddysController();

router.route("/resources")
    .get(teddysController.getTeddysCustomizationOptions);

export default router;
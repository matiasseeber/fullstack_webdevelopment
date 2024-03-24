import { Router } from 'express';
import { TeddysController } from "../controllers/teddys";

const router = Router();

const teddysController: TeddysController = new TeddysController();

router.route("/")
    .get(teddysController.getAllUserTeddys)
    .post(teddysController.createCustomizedTeddy);

router.route("/:id")
    .delete(teddysController.deleteTeddy);

router.route("/resources")
    .get(teddysController.getTeddysCustomizationOptions);

router.route("/dashboard")
    .get(teddysController.getMostChosenAnimals);

export default router;
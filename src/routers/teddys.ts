import { Router } from 'express';
import { TeddysController } from "../controllers/teddys";
import verifyToken from "../routers/verifyToken";

const router = Router();

const teddysController: TeddysController = new TeddysController();

router.route("/")
    .get(verifyToken, teddysController.getAllUserTeddys)
    .post(verifyToken, teddysController.createCustomizedTeddy);

router.route("/:id")
    .delete(verifyToken, teddysController.deleteTeddy);

router.route("/resources")
    .get(verifyToken, teddysController.getTeddysCustomizationOptions);

router.route("/dashboard")
    .get(teddysController.getMostChosenAnimals);

export default router;
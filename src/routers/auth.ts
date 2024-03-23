import { Router } from 'express';
import { AuthController } from "../controllers/auth";

const router = Router();

const authController: AuthController = new AuthController();

router.route("/login")
    .post(authController.login);

export default router;
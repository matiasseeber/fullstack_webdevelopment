import { Request, Response } from 'express';
import { UsersModel } from '../model/users';
import jwt from "jsonwebtoken";
import app from '../app';
import bcryptjs from 'bcryptjs';

type loginPayload = {
    email: string;
    password: string;
}

export class AuthController {
    private authModel: UsersModel;

    constructor(authModel: UsersModel = new UsersModel()) {
        this.authModel = authModel;
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password }: loginPayload = req.body;
            const user = await this.authModel.getUserByEmailAndPassword(email);
            if (!user || !bcryptjs.compareSync(password, user.password)) {
                return res.status(401).json({ err: "No user exists with that user-password combination." });
            }
            res.status(200).json({ access_token: jwt.sign(user, app.get("secretKey"), { expiresIn: "60m" }) });
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
}
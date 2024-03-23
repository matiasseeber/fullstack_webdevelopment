import prisma from '../database/connection';

export class AuthModel {
    constructor() { }

    public getUserByEmailAndPassword = async (email: string) => {
        return prisma.users.findFirst({ where: { email } });
    }
}
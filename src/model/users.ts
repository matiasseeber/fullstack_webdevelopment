import prisma from '../database/connection';

export class UsersModel {
    constructor() { }

    public getUserByEmailAndPassword = async (email: string) => {
        return prisma.users.findFirst({ where: { email } });
    }
}
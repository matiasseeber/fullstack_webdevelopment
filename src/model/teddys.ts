import prisma from '../database/connection';

export class TeddysModel {
    constructor() { }

    private getAnimals = async () => {
        return prisma.animals.findMany();
    }

    private getAccesories = async () => {
        return prisma.accesories.findMany();
    }

    public getTeddysCustomizationOptions = async () => {
        const response = await Promise.all([
            this.getAnimals(),
            this.getAccesories()
        ]);

        return {
            animals: response[0],
            accessories: response[1]
        };
    }
}
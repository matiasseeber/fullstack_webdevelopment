import prisma from '../database/connection';

type teddyCreatePayload = {
    hex: string;
    user_id: string;
    animal_id: string;
    accessory_id: string;
};

export class TeddysModel {
    constructor() { }

    private getAnimals = async () => {
        return prisma.animals.findMany();
    }

    private getAccessories = async () => {
        return prisma.accessories.findMany();
    }

    public getTeddysCustomizationOptions = async () => {
        const response = await Promise.all([
            this.getAnimals(),
            this.getAccessories()
        ]);

        return {
            animals: response[0],
            accessories: response[1]
        };
    }

    public createCustomizedTeddy = async (data: teddyCreatePayload) => prisma.teddys.create({ data });

    public getAllUserTeddys =
        async (user_id: string) => prisma.teddys.findMany({ where: { user_id, active: true }, include: { accessory: true, animal: true } });

    public deleteTeddy = async (teddy_id: string, user_id: string) => prisma.teddys.update({ where: { id: teddy_id, user_id }, data: { active: false } });

    public getMostChosenAnimals = async () => {
        const result = await prisma.teddys.groupBy({
            by: ["animal_id"],
            where: { active: true },
            _count: {
                _all: true
            }
        });

        const animalsInfo = await prisma.animals.findMany({ where: { id: { in: result.map((item) => item.animal_id) } } });
        return animalsInfo.slice(0, 3).map((animal) => {
            return {
                ...animal,
                count: result.find((result) => result.animal_id === animal.id)?._count._all
            };
        });
    }
}
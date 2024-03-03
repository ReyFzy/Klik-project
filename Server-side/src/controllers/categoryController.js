import { prisma } from "../lib/prismaClient.js"

export async function createCategory(req, res){
    try {
        const categoryData = req.body;
        const newCategory = await prisma.category.create({
            data : {
                category : categoryData.category
            }
        });
        await prisma.$disconnect();
        res.status(201).json({ newCategory });
    } catch (error) {
        res.status(500).json({msg: 'Failed to create new category'});
    }
}

export async function updateCategory(req, res){
    try {
        const categoryId = req.params.id;
        const categoryData = req.body;
        const updatedCategory = await prisma.category.update({
            where: {
                id : categoryId
            },
            data : categoryData
        });
        await prisma.$disconnect();
        res.status(200).json({ updatedCategory });
    } catch (error) {
        res.status(500).json({ msg: 'Failed to update user' });
    }
};

export async function deleteCategory(req, res){
    try {
        const categoryId = req.params.id;
        await prisma.category.delete({
            where : {
                id : categoryId
            }
        });
        res.status(200).json({msg : 'Ok'})
    } catch (error) {
        res.status(500).json({ msg: 'Failed to delete category' });
    }
}
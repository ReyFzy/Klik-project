import { prisma } from "../lib/prismaClient.js";

export async function createProduct(req, res){
    try {
        const { name, desc, price, quantity, store, link, category_name, user_id } = req.body;
        // const user_id = req.user.id;
        const category_id = await findCategoryIdByName(category_name);

        const newProduct = await prisma.product.create({
            data : {
                name,
                desc,
                price,
                quantity,
                store,
                link,
                category : {
                    connect : {id : category_id}
                },
                user : {
                    connect : {id : user_id}
                }
            }
        });
        await prisma.$disconnect();
        console.log('New product created:', newProduct);
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to create product"});
    }
}


export async function updateProduct(req, res){
    try {
        const { id } = req.params;
        const { name, desc, price, quantity, store, link, category_name, user_id} = req.body;
        // const user_id = req.user.id;
        const category_id = await findCategoryIdByName(category_name);
        const updatedProduct = await prisma.product.update({
            where : { 
                id : id
            },
            data : {
                name : name,
                desc,
                price,
                quantity,
                store,
                link,
                category : {
                    connect : {id : category_id}
                },
                user : {
                    connect : {id : user_id}
                }
            }
        });
        await prisma.$disconnect();
        console.log('Product updated:', updatedProduct);
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Failed to update product" });
    }
}


export async function getAllProduct(req, res){
    try {
        const { category } = req.params;
        
        const findCategory = await prisma.category.findFirst({
            where: {
                category: category
            },
            select: {
                id: true
            }
        });
        if (!findCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        const productsInCategory = await prisma.product.findMany({
            where: {
                id: category.id
            },
            select: {
                name: true,
                desc: true,
                price: true,
                quantity: true,
                store: true,
                link: true,
                category: true,
            }
        });
        if (!productsInCategory || productsInCategory.length === 0) {
            return res.status(404).json({ error: 'No products found in the specified category' });
        }
        await prisma.$disconnect();
        res.status(200).json(productsInCategory);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ error: 'Failed to fetch products by category' });
    }
}


export async function deleteProduct(req, res){
    try {
        const { id } = req.params;
        const deletedProduct = await prisma.product.delete({
            where :{
                id : id 
            }
        });
        await prisma.$disconnect();
        res.status(200).json({ msg: 'Product has been Deleted', deletedProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to deleted Product"});
    }
}




    async function findCategoryIdByName(categoryName){
        try {
            const category = await prisma.category.findFirst({
                where : {
                    category : categoryName
                },
                select : {
                    id : true
                }
            });
            if(category){
                return (category.id);
            }else{
                throw new Error('Category not found');
            };
        } catch (error) {
            console.error('Error fetching category:', error);
            throw error;
        }
    }
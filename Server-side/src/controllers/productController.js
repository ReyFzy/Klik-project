import { prisma } from "../lib/prismaClient.js";

export async function createProduct(req, res){
    try {
        const { name, desc, price, quantity, store, link, category_name } = req.body;
        const user_id = req.locals.user.id;
        console.log(user_id)
        const category_id = await findCategoryIdByName(category_name);
        console.log(category_id)

        const newProduct = await prisma.products.create({
            data : {
                name,
                desc,
                price,
                quantity,
                store,
                link,
                categories : {
                    connect : {id : category_id}
                },
                users : {
                    connect : {id : user_id}
                }
            }
        });
        await prisma.$disconnect();
        console.log('New product created:', newProduct);
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        console.error("Failed to create product: ", error);
        res.status(500).json({msg: "Failed to create product"});
    }
}

export async function createProductNImg(req, res){
    try {
        const { name, desc, price, quantity, store, link, category_name, url } = req.body;
        const user_id = req.locals.user.id;
        console.log(user_id)
        const category_id = await findCategoryIdByName(category_name);
        console.log(category_id)

        const newProduct = await prisma.products.create({
            data : {
                name,
                desc,
                price,
                quantity,
                store,
                link,
                categories : {
                    connect : {id : category_id}
                },
                users : {
                    connect : {id : user_id}
                }
            }
        });

        const product = await prisma.productImg.create({
            data: {
                url,
                product_id: newProduct.id
            }
        })
        await prisma.$disconnect();
        console.log('New product created:', newProduct, product);
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        console.error("Failed to create product: ", error);
        res.status(500).json({msg: "Failed to create product"});
    }
}

export async function updateProduct(req, res){
    try {
        const { id } = req.params;
        const { name, desc, price, quantity, store, link, category_name} = req.body;
        const user_id = req.locals.user.id;
        const category_id = await findCategoryIdByName(category_name);
        const updatedProduct = await prisma.products.update({
            where : { 
                id : id
            },
            data : {
                name,
                desc,
                price,
                quantity,
                store,
                link,
                categories : {
                    connect : {id : category_id}
                },
                users : {
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
        
        const findCategory = await prisma.categories.findFirst({
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
        const productsInCategory = await prisma.products.findMany({
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
        const deletedProduct = await prisma.products.delete({
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
            const category = await prisma.categories.findFirst({
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
import { prisma } from "../lib/prismaClient.js"

export async function createReview (req, res){
    try {
        const {comment, rating} = req.body;
        const user_id = req.locals.user.id;
        const product_id = req.params.product_id
        const addReview = await prisma.reviews.create({
            data : {
                user : {
                    connect : {id : user_id}
                },
                product : {
                    connect : {id : product_id}
                },
                comment: comment,
                rating: rating
            }
        });
        console.log(addReview);
        await prisma.$disconnect();
        res.status(200).json({msg: "Success to add review!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to create review"});
    }
}

export async function createLike(req, res){
    try {
        const userId = req.locals.user.id;
        const productId = req.params.product_id;

        await prisma.likes.create({
            data: {
                user : {
                    connect : {id : userId}
                },
                product : {
                    connect : {id : productId}
                }
            }
        });

        res.status(200).json({message: "Thanks to giving like :D"})
    } catch (error) {
        console.error('Error while create like: ', error);
        res.status(500).json({msg: "Failed to like"});
    } finally {
        await prisma.$disconnect();
    }
}
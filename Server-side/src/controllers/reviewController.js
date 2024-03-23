import { prisma } from "../lib/prismaClient.js"

export async function createReview (req, res){
    try {
        const {comment, rating, user_id} = req.body;
        // const user_id = req.user.id;
        const product_id = req.params.product_id
        const addReview = await prisma.review.create({
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
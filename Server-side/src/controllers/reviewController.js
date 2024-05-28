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


export async function deleteReview(req, res) {
    try {
        const reviewId = req.params.id;
        const userId = req.locals.user.id;

        const review = await prisma.reviews.findUnique({
            where: { id: reviewId },
            include: { user: true }
        });

        if (!review || review.user.id !== userId) {
            return res.status(404).json({ message: 'Review not found or unauthorized' });
        }

        await prisma.reviews.delete({
            where: { id: reviewId }
        });

        res.status(200).json({ message: 'Review removed successfully' });
    } catch (error) {
        console.error('Error while deleting review:', error);
        res.status(500).json({ message: 'Failed to remove review' });
    } finally {
        await prisma.$disconnect();
    }
}


export async function createLike(req, res){
    try {
        const userId = req.locals.user.id;
        const productId = req.params.product_id;

        await prisma.likes.create({
            data: {
                users : {
                    connect : {id : userId}
                },
                products : {
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


export async function deleteLike(req, res) {
    try {
        const likeId = req.params.id;
        const userId = req.locals.user.id;

        const like = await prisma.likes.findUnique({
            where: { id: likeId },
            include: { users: true }
        });

        if (!like || like.users.id !== userId) {
            return res.status(404).json({ message: 'Like not found or unauthorized' });
        }

        await prisma.likes.delete({
            where: { id: likeId }
        });

        res.status(200).json({ message: 'Like removed successfully' });
    } catch (error) {
        console.error('Error while deleting like:', error);
        res.status(500).json({ message: 'Failed to remove like' });
    } finally {
        await prisma.$disconnect();
    }
}

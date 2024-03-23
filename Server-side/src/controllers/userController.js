import { prisma } from "../lib/prismaClient.js";

export async function deleteUser (req, res) {
    try {
        const { id } = req.params;
        const deletedUser = await prisma.user.delete({
            where : {
                id : id
            }
        });
        await prisma.$disconnect();
        res.status(200).json({ msg: 'User has been Deleted', deletedUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to deleted User"});
    }
}
import { prisma } from "../lib/prismaClient.js";

export async function deleteAccount (req, res) {
    try {
        const { id } = req.params;
        const deletedUser = await prisma.users.delete({
            where : {
                id : id
            }
        });
        res.status(200).json({ msg: 'User has been Deleted', deletedUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to deleted User"});
    } finally {
        await prisma.$disconnect();
    }
}

export async function updateAccount (req, res) {
    try {
        const userId = req.locals.user.id;
        const userDTO = req.body;

        const pictureFileName = req.file ? req.file.filename : null;
        const pictureUrl = pictureFileName ? `/uploads/${pictureFileName}` : null;

        const account = await prisma.users.findFirst({
            where: {
                id: userId
            }
        });
        if (!account) return res.status(404).json({ message: "Account not found" });

        const updated = await prisma.users.update({
            data:{
                password: userDTO.password,
                name: userDTO.name,
                username: userDTO.username,
                picture:  pictureUrl,
                no_telp: userDTO.no_telp,
                gender: userDTO.gender,
                tgl_lahir: userDTO.tgl_lahir,
                role: userDTO.role
            },
            where: {
                id: userId
            }
        });

        return res.status(200).json({message: "Account has been updated", updated})
    } catch (error) {
        console.error('Error update account :', error);
        return res.status(500).json({ error: 'Failed to update account' });
    } finally {
        await prisma.$disconnect()
    }
}

export async function getAllAccount (req, res) {
    try {
        const accounts = await prisma.users.findMany({});

        return res.status(200).json(accounts)
    } catch (error) {
        console.error('Error get all account :', error);
        return res.status(500).json({ error: 'Failed to fetch accounts' });
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAccountById (req, res) {
    try {
        const userId = req.params.id;

        const accounts = await prisma.users.findFirst({
            where: {
                id : userId
            }
        });

        return res.status(200).json(accounts)
    } catch (error) {
        console.error('Error get account :', error);
        return res.status(500).json({ error: 'Failed to fetch account' });
    } finally {
        await prisma.$disconnect();
    }
}
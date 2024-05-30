import { prisma } from "../lib/prismaClient.js";

export async function createEvent(req, res){
    try {
        const { link } = req.body;
        
        const pictureFileName = req.file ? req.file.filename : null;
        const pictureUrl = pictureFileName ? `uploads/${pictureFileName}` : null;
    
        const event = await prisma.events.create({
            data: {
                event: pictureUrl,
                link,
                create_at: new Date()
            }
        });

        return res.status(201).json({ message: "Event has been created!", event });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAllEvent(req, res){
    try {
        const events = await prisma.events.findMany({});
        
        if (!events.length) return res.status(404).json({ message: "Event not found" });

        return res.status(200).json(events);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    } finally {
        await prisma.$disconnect();
    }
}

export async function deleteEvent(req, res){
    try {
        const eventId = req.params.id;

        const event = await prisma.events.findUnique({
            where: { id: eventId }
        });
        
        if (!event) return res.status(404).json({ message: "Event not found" });

        await prisma.events.delete({
            where: {
                id: event.id
            }
        });

        return res.status(200).json({ message: "Event has been deleted" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    } finally {
        await prisma.$disconnect();
    }
}
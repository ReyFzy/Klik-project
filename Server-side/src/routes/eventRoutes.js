import express from "express";

import * as eventController from "../controllers/eventController.js";
import { uploadEventPicture } from "../services/multerService.js";

const router = express.Router();

router.get('/events', eventController.getAllEvent);
router.post('/event', uploadEventPicture, eventController.createEvent);
router.delete('/event/:id', eventController.deleteEvent);

export const eventRoutes = router;
import { Router } from "express";

import authController from "../controllers/auth";
import chordController from "../controllers/chord";

const router = Router();

router.post("/chord", chordController.create);
router.get("/chord", chordController.findAll);

router.post("/auth", authController);

export default router;

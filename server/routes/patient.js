import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { getPatient, postPatient, getPatientHistory } from "../controllers/patient.js"

const router = express.Router()

router.post("/",  verifyToken, postPatient)
router.get("/:abdmNumber", verifyToken, getPatient)
router.get("/:abdmNumber/history", verifyToken, getPatientHistory)

export default router
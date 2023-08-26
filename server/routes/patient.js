import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { 
    getPatient, 
    postPatient, 
    getPatientPrescriptionsHistory, 
    updatePatient, 
    getPatientPrescriptions, 
    getPreviousIllness,
    getPreviousTest,
    getUpComingTest
} from "../controllers/patient.js"

const router = express.Router()

router.post("/",  verifyToken, postPatient)
router.get("/:abdmNumber", verifyToken, getPatient)
router.put("/:abdmNumber", verifyToken, updatePatient)
router.get("/:abdmNumber/prescriptionHistory", verifyToken, getPatientPrescriptionsHistory)
router.get("/:abdmNumber/prescriptions", verifyToken, getPatientPrescriptions)
router.get("/:abdmNumber/previousIllness", verifyToken, getPreviousIllness)
router.get("/:abdmNumber/previousTest", verifyToken, getPreviousTest)
router.get("/:abdmNumber/upComingTest", verifyToken, getUpComingTest)

export default router
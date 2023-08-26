import Patient from "../model/Patient.js"

// GET PATIENT
export const getPatient = async(req, res) => {
    try {
        const { abdmNumber } = req.params
        const patient = await Patient.findOne({ abdmNumber })
        res.status(200).json(patient)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// POST PATIENT
export const postPatient = async(req, res) => {
    try {
        const {
            firstName,
            lastName,
            abdmNumber,
            phoneNumber,
            age,
            sex,
            prevailingIllness,
            prescriptions,
            prescriptionHistory
        } = req.body
        const patient = new Patient({
            firstName,
            lastName,
            abdmNumber,
            phoneNumber,
            age,
            sex,
            prevailingIllness,
            prescriptions: prescriptions.map(prescription => ({
                medicineName: prescription.medicineName,
                dosage: prescription.dosage.map(dosage => ({
                    dosage: dosage.dosage,
                    frequency: dosage.frequency
                }))
            })),
            prescriptionHistory: prescriptionHistory.map(prescriptionHistory => ({
                medicineName: prescriptionHistory.medicineName,
                dosage: prescriptionHistory.dosage.map(dosage => ({
                    dosage: dosage.dosage,
                    frequency: dosage.frequency
                }))
            }))
        })
        const newPatient = await patient.save()
        res.status(201).json(newPatient)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getPatientHistory = async(req, res) => {
    try {
        const { abdmNumber } = req.params
        const patient = await Patient.findOne({ abdmNumber })
        res.status(200).json(patient.prescriptionHistory)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
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

// GET HISTORY OF PATIENT PRESCRIPTIONS
export const getPatientHistory = async(req, res) => {
    try {
        const { abdmNumber } = req.params
        const patient = await Patient.findOne({ abdmNumber })
        res.status(200).json(patient.prescriptionHistory)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// UPDATE PATIENT
export const updatePatient = async(req, res) => {
    try {
        const { abdmNumber } = req.params
        const updatedData = req.body
        const patient = await Patient.findOne({ abdmNumber })
        if(!patient) {
            return res.status(404).json({ message: 'Patient not found' })
        }
        Object.assign(patient, updatedData)
        const updatePatient = await patient.save()
        res.status(201).json(updatePatient)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
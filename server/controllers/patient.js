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
            height,
            weight,
            prevailingIllness,
            prescriptions,
            prescriptionHistory,
            test

        } = req.body
        const patient = new Patient({
            firstName,
            lastName,
            abdmNumber,
            phoneNumber,
            age,
            sex,
            height,
            weight,
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
            })),
            test: test.map(test => ({
                previousTest: test.previousTest,
                upComingTest: test.upComingTest
            }))
        })
        const newPatient = await patient.save()
        res.status(201).json(newPatient)

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

// GET HISTORY OF PATIENT PRESCRIPTIONS
export const getPatientPrescriptionsHistory = async(req, res) => {
    try {
        const { abdmNumber } = req.params
        const patient = await Patient.findOne({ abdmNumber })
        res.status(200).json(patient.prescriptionHistory)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// GET PATIENT PRESCRIPTIONS
export const getPatientPrescriptions = async(req, res) => {
    try {
        const { abdmNumber } = req.params
        const patient = await Patient.findOne({ abdmNumber })
        res.status(200).json(patient.prescriptions)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// GET HISTORY OF PATIENT'S PREVIOUS DISEASE
export const getPreviousIllness = async(req, res) => {
    try {
        const { abdmNumber } = req.params
        const patient = await Patient.findOne({ abdmNumber })
        res.status(200).json(patient.prevailingIllness)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// GET PREVIOUS TEST HISTORY OF THE PATIENT
export const getPreviousTest = async(req, res) => {
    try {
        const { abdmNumber } = req.params
        const patient = await Patient.findOne({ abdmNumber })
        res.status(200).json(patient.previousTest)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// GET UPCOMING TEST SCHEDULE OF THE PATIENT
export const getUpComingTest = async(req, res) => {
    try {
        const { abdmNumber } = req.params
        const patient = await Patient.findOne({ abdmNumber })
        res.status(200).json(patient.upComingTest)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
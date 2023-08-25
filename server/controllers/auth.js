import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Admin } from "mongodb"

// REGISTER PATH
export const register = async(req, res) => {
    try {
        const {
            firstName,
            lastName,
            doctorId,
            email,
            password
        } = req.body
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        const newAdmin = {
            firstName,
            lastName,
            doctorId,
            email,
            password: passwordHash
        }
        const savedAdmin = await newAdmin.save()
        res.status(201).json(savedAdmin)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// LOGIN PATH
export const login = async(req, res) => {
    try {
        const { doctorId, password } = req.body
        const admin = await Admin.findOne({ doctorId: doctorId })
        if(!admin) {
            return res.status(400).json({ message: "Admin does not exist." })
        }

        const isMatch = await bcrypt.compare(password, admin.password)
        if(!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET)
        delete admin.password
        res.status(200).json({ token, admin })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
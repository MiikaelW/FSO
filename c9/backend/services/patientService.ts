import patients from "../data/patients"
import { Patient } from "../types"
import { v1 as uuid } from 'uuid'


const getNonSensitivePatients = (): Omit<Patient, "ssn">[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id, name, dateOfBirth, gender, occupation
    }))
}

const addPatient = (patient: Omit<Patient, "id">): Patient => {
    const newPatient = { ...patient, id: uuid() }
    patients.concat(newPatient)
    return newPatient
}

export default {
    getNonSensitivePatients,
    addPatient
};
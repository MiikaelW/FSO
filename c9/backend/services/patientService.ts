import patients from "../data/patients"
import { NonSensitivePatient, Patient, NewPatient } from "../types"
import { toNewPatient } from "../utils"


const getNonSensitivePatients = (): NonSensitivePatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id, name, dateOfBirth, gender, occupation
    }))
}

const addPatient = (object: unknown): NewPatient => {
    const newPatient: NewPatient = toNewPatient(object)
    //Do not know how to keep the changes in memory...
    //inMemoryPatients = inMemoryPatients.concat(newPatient)
    return toNewPatient(object)
}

const getNonSensitivePatient = (id: string): Patient => {
    const patient = patients.find(p => p.id === id)
    if (!patient) {
        throw Error("Patient not found")
    }
    return {
        ...patient,
        entries: []
    }
}


export default {
    getNonSensitivePatients,
    addPatient,
    getNonSensitivePatient
};
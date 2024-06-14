import patients from "../data/patients"
import { Patient } from "../types"
import { toNewPatient } from "../utils"


const getNonSensitivePatients = (): Omit<Patient, "ssn">[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id, name, dateOfBirth, gender, occupation
    }))
}

const addPatient = (object: unknown): Patient => {
    const newPatient: Patient = toNewPatient(object)
    //Do not know how to keep the changes in memory...
    //inMemoryPatients = inMemoryPatients.concat(newPatient)
    return toNewPatient(object)
}


export default {
    getNonSensitivePatients,
    addPatient
};
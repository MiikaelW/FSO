export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
    entries: Entry[]
}

export type NewPatient = Omit<Patient, "entries">
export type NonSensitivePatient = Omit<Patient, "ssn" | "entries">

export enum Gender {
    Male = "male",
    Female = "female",
    Other = "other"
}

export interface Entry {
    description: string
}
import { NewPatient, Gender } from "./types";
import { v1 as uuid } from "uuid"

function isString(text: unknown): text is string {
    return typeof text === "string" || text instanceof String
}

function isDate(date: string): boolean {
    return Boolean(Date.parse(date))
}

function isGender(text: string): text is Gender {
    return Object.values(Gender).map(v => v.toString()).includes(text)
}

export function toNewPatient(object: unknown): NewPatient {

    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }

    const propertiesInObject = 'name' in object
        && 'dateOfBirth' in object
        && 'ssn' in object
        && 'gender' in object
        && 'occupation' in object

    if (!propertiesInObject) {
        throw new Error('Incorrect data: some fields are missing');
    }

    //Normally dateofbirth as date and ssn check as well.
    function parseName(text: unknown): string {
        if (!text || !isString(text)) {
            throw new Error('Incorrect or missing name');
        }
        return text
    }

    function parseDateOfBirth(text: unknown): string {
        if (!text || !isString(text) || !isDate(text)) {
            throw new Error('Incorrect or missing date of birth');
        }
        return text
    }

    function parseSsn(text: unknown): string {
        if (!text || !isString(text)) {
            throw new Error('Incorrect or missing SSN');
        }
        return text
    }

    function parseGender(text: unknown): string {
        if (!text || !isString(text) || !isGender(text)) {
            throw new Error('Incorrect or missing gender');
        }
        return text
    }

    function parseOccupation(text: unknown): string {
        if (!text || !isString(text)) {
            throw new Error('Incorrect or missing occupation');
        }
        return text
    }

    return {
        id: uuid(),
        name: parseName(object.name),
        dateOfBirth: parseDateOfBirth(object.dateOfBirth),
        ssn: parseSsn(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation)
    }
}
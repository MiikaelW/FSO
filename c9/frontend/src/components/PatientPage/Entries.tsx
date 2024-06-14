import { Entry, Diagnosis } from "../../types";
import diagnosisService from "../../services/diagnoses";
import { useState, useEffect } from "react";

type Props = {
    entries: Entry[]
}

const Entries = (props: Props) => {
    const [allDiagnoses, setAllDiagnoses] = useState<Array<Diagnosis>>([])


    useEffect(() => {
        const getAllDiagnoses = async () => {
            const diagnoses = await diagnosisService.getAll()
            setAllDiagnoses(diagnoses)
        }
        getAllDiagnoses()
    }, [])

    return props.entries.map(e => (
        <div>

            <div>
                {e.date} {e.description}
            </div>
            <ul>
                {e.diagnosisCodes ?
                    <DiagnosisCodes allDiagnoses={allDiagnoses}
                        entryDiagnosisCodes={e.diagnosisCodes}>
                    </DiagnosisCodes> : null}
            </ul>
        </div>
    ))
};

function DiagnosisCodes({ entryDiagnosisCodes, allDiagnoses }:
    { entryDiagnosisCodes: string[], allDiagnoses: Diagnosis[] }) {
    return entryDiagnosisCodes.map(code => (
        <li>{code} {allDiagnoses.find(d => d.code === code)?.name}</li>
    ))
}

export default Entries;

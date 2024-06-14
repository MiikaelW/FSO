import { Entry } from "../../types";

type Props = {
    entries: Entry[]
}

const Entries = (props: Props) => {
    return props.entries.map(e => (
        <div>

            <div>
                {e.date} {e.description}
            </div>
            <ul>

                {e.diagnosisCodes ? <DiagnosisCodes diagnosisCodes={e.diagnosisCodes}></DiagnosisCodes> : null}
            </ul>
        </div>
    ))
};

function DiagnosisCodes({ diagnosisCodes }: { diagnosisCodes: string[] }) {
    return diagnosisCodes.map(code => (
        <li>{code}</li>
    ))
}

export default Entries;

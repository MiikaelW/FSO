import { useEffect, useState } from "react";
import { Box, Typography } from '@mui/material';
import { Patient } from "../../types";
import patientService from "../../services/patients";
import { useParams } from "react-router-dom";

const PatientPage = () => {

  const { id } = useParams()
  const [patient, setPatient] = useState<Patient | undefined>(undefined);

  useEffect(() => {
    const getPatient = async () => {
      if (!id) {
        return
      }
      const patient = await patientService.get(id)
      setPatient(patient)
    }

    getPatient()

  }, [id])

  if (!patient) {
    return (
      <div className="App">
        <Box>
          <Typography align="center" variant="h6">
            No patient found
          </Typography>
        </Box>
      </div>
    )
  }

  return (
    <div className="App">
      <div>
        <h3>{patient.name}</h3>
      </div>
      <div>
        Gender: {patient.gender}
      </div>
      <div>
        Date of birth: {patient.dateOfBirth}
      </div>
      <div>
        Occupation: {patient.occupation}
      </div>
      <div>
        SSN: {patient.ssn}
      </div>
    </div>
  );
};

export default PatientPage;

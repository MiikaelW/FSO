import express from 'express';
import diaryService from './services/diagnosisService'
import patientService from './services/patientService'
import { Patient } from './types';

const app = express();
app.use(express.json());

const cors = require('cors')
app.use(cors())

const PORT = 3000;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
    res.send(diaryService.getDiagnoses())
});

app.get('/api/patients', (_req, res) => {
    res.send(patientService.getNonSensitivePatients())
});

app.post('/api/patients', (req, res) => {
    const Patient = req.body as Omit<Patient, "id">
    res.send(patientService.addPatient(Patient))
});

app.get('/api/patients/:id', (req, res) => {
    const id = req.params.id
    res.send(patientService.getNonSensitivePatient(id))
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
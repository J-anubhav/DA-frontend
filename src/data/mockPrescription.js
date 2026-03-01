// Mock prescription data matching the MongoDB document schema
// Used for both dashboard listing and detail views

export const mockPrescriptions = [
    {
        _id: "1",
        filename: "prescription_12.jpg",
        status: "completed",
        received_at: { $date: "2026-02-28T11:32:02.947Z" },
        analysis_data: {
            name: "Prescription #12",
            date: "2026-02-28",
            time: "12:27 PM",
            doctorUsername: "Dr. Miles Dyson",
            patientUsername: "Sarah Connor",
            hospitalName: "Cyberdyne Systems Medical",
            hospitalId: "HSP-CYB-001",
            clinicalNote: "Patient advised to rest for 3 days. Drink plenty of fluids. Follow up if fever persists beyond 48 hours.",
            diagnosis: ["Acute Bronchitis"],
            complaints: ["Persistent cough", "Mild fever", "Fatigue"],
            notes: ["Monitor temperature every 6 hours"],
            medication: [
                { name: "Amoxicillin", dosage: "500mg", frequency: "Twice Daily" },
                { name: "Paracetamol", dosage: "650mg", frequency: "SOS" }
            ],
            test: [],
            followup: {
                date: "2026-03-07",
                reason: "Check on bronchitis recovery"
            },
            vitals: {
                BP: "120/80",
                Heartrate: "72",
                RespiratoryRate: "16",
                temp: "99.2°F",
                spO2: "98",
                weight: "65 kg",
                height: "170 cm",
                BMI: "22.4",
                waist_hips: ""
            },
            nursing: [],
            discharge: {
                planned_date: "",
                instruction: "",
                Home_Care: "",
                Recommendations: ""
            },
            icdCode: ["J20.9"],
            medicalHistory: ["No significant history"],
            labScanPdf: [],
            systematicExamination: {
                General: ["Alert, oriented"],
                CVS: ["S1, S2 normal"],
                RS: ["Bilateral rhonchi"],
                CNS: ["No focal deficit"],
                PA: ["Soft, non-tender"],
                ENT: []
            },
            assessmentPlan: "Acute bronchitis — symptomatic management with antibiotics",
            nutritionAssessment: [],
            referredTo: {
                doctorName: "",
                doctorUsername: "",
                phoneNumber: "",
                email: "",
                hospitalId: "",
                hospitalName: "",
                speciality: ""
            },
            scribePrescription: {
                scribeId: "AI_SCRIBE_V1",
                imageUrl: "https://res.cloudinary.com/dpofehp90/image/upload/v1772278326/processed_prescriptions/epehejdvov2dlq8emnlm.png",
                publicId: "processed_prescriptions/epehejdvov2dlq8emnlm",
                date: "2026-02-28T11:32:11.928504+00:00"
            }
        },
        original_image: {
            url: "https://res.cloudinary.com/dpofehp90/image/upload/v1772278325/original_prescriptions/l7at4sixrt7logzlgkrt.jpg",
            public_id: "original_prescriptions/l7at4sixrt7logzlgkrt"
        },
        processed_at: { $date: "2026-02-28T11:32:11.928Z" },
        processed_image: {
            url: "https://res.cloudinary.com/dpofehp90/image/upload/v1772278326/processed_prescriptions/epehejdvov2dlq8emnlm.png",
            public_id: "processed_prescriptions/epehejdvov2dlq8emnlm"
        }
    },
    {
        _id: "2",
        filename: "prescription_11.jpg",
        status: "completed",
        received_at: { $date: "2026-02-27T09:15:00.000Z" },
        analysis_data: {
            name: "Prescription #11",
            date: "2026-02-27",
            time: "02:45 PM",
            doctorUsername: "Dr. House",
            patientUsername: "John Doe",
            hospitalName: "Princeton Plainsboro",
            hospitalId: "HSP-PP-001",
            clinicalNote: "Patient presents with mild fatigue and recurring headaches. Recommend further blood work.",
            diagnosis: ["Tension Headache", "Iron Deficiency"],
            complaints: ["Recurring headaches", "Fatigue", "Dizziness"],
            notes: [],
            medication: [
                { name: "Ibuprofen", dosage: "400mg", frequency: "As needed" },
                { name: "Ferrous Sulfate", dosage: "325mg", frequency: "Once Daily" }
            ],
            test: ["CBC", "Iron Panel"],
            followup: { date: "2026-03-10", reason: "Review blood work results" },
            vitals: {
                BP: "110/70",
                Heartrate: "78",
                RespiratoryRate: "14",
                temp: "98.6°F",
                spO2: "99",
                weight: "82 kg",
                height: "180 cm",
                BMI: "25.3",
                waist_hips: ""
            },
            nursing: [],
            discharge: { planned_date: "", instruction: "", Home_Care: "", Recommendations: "" },
            icdCode: ["G44.2", "D50.9"],
            medicalHistory: ["Mild anemia"],
            labScanPdf: [],
            systematicExamination: { General: [], CVS: [], RS: [], CNS: [], PA: [], ENT: [] },
            assessmentPlan: "",
            nutritionAssessment: [],
            referredTo: { doctorName: "", doctorUsername: "", phoneNumber: "", email: "", hospitalId: "", hospitalName: "", speciality: "" },
            scribePrescription: {
                scribeId: "AI_SCRIBE_V1",
                imageUrl: "",
                publicId: "",
                date: "2026-02-27T09:20:00.000Z"
            }
        },
        original_image: { url: "", public_id: "" },
        processed_at: { $date: "2026-02-27T09:20:00.000Z" },
        processed_image: { url: "", public_id: "" }
    },
    {
        _id: "3",
        filename: "prescription_10.jpg",
        status: "completed",
        received_at: { $date: "2026-02-26T14:00:00.000Z" },
        analysis_data: {
            name: "Prescription #10",
            date: "2026-02-26",
            time: "07:30 PM",
            doctorUsername: "Dr. Meredith Grey",
            patientUsername: "Emily Watson",
            hospitalName: "Grey Sloan Memorial",
            hospitalId: "HSP-GSM-001",
            clinicalNote: "Post-operative follow-up. Wound healing well. Continue current medication.",
            diagnosis: ["Post-op Recovery"],
            complaints: ["Mild discomfort at incision site"],
            notes: [],
            medication: [
                { name: "Cephalexin", dosage: "250mg", frequency: "Three Times Daily" },
                { name: "Tramadol", dosage: "50mg", frequency: "As needed" }
            ],
            test: [],
            followup: { date: "2026-03-05", reason: "Suture removal" },
            vitals: {
                BP: "118/76",
                Heartrate: "70",
                RespiratoryRate: "15",
                temp: "98.4°F",
                spO2: "97",
                weight: "58 kg",
                height: "165 cm",
                BMI: "21.3",
                waist_hips: ""
            },
            nursing: [],
            discharge: { planned_date: "", instruction: "", Home_Care: "", Recommendations: "" },
            icdCode: [],
            medicalHistory: [],
            labScanPdf: [],
            systematicExamination: { General: [], CVS: [], RS: [], CNS: [], PA: [], ENT: [] },
            assessmentPlan: "",
            nutritionAssessment: [],
            referredTo: { doctorName: "", doctorUsername: "", phoneNumber: "", email: "", hospitalId: "", hospitalName: "", speciality: "" },
            scribePrescription: { scribeId: "AI_SCRIBE_V1", imageUrl: "", publicId: "", date: "" }
        },
        original_image: { url: "", public_id: "" },
        processed_at: { $date: "2026-02-26T14:05:00.000Z" },
        processed_image: { url: "", public_id: "" }
    },
    {
        _id: "4",
        filename: "prescription_09.jpg",
        status: "processing",
        received_at: { $date: "2026-02-25T10:00:00.000Z" },
        analysis_data: {
            name: "Prescription #09",
            date: "2026-02-25",
            time: "03:30 PM",
            doctorUsername: "Dr. Strange",
            patientUsername: "Peter Parker",
            hospitalName: "Metro General Hospital",
            hospitalId: "HSP-MGH-001",
            clinicalNote: "",
            diagnosis: [],
            complaints: [],
            notes: [],
            medication: [],
            test: [],
            followup: { date: "", reason: "" },
            vitals: { BP: "", Heartrate: "", RespiratoryRate: "", temp: "", spO2: "", weight: "", height: "", BMI: "", waist_hips: "" },
            nursing: [],
            discharge: { planned_date: "", instruction: "", Home_Care: "", Recommendations: "" },
            icdCode: [],
            medicalHistory: [],
            labScanPdf: [],
            systematicExamination: { General: [], CVS: [], RS: [], CNS: [], PA: [], ENT: [] },
            assessmentPlan: "",
            nutritionAssessment: [],
            referredTo: { doctorName: "", doctorUsername: "", phoneNumber: "", email: "", hospitalId: "", hospitalName: "", speciality: "" },
            scribePrescription: { scribeId: "", imageUrl: "", publicId: "", date: "" }
        },
        original_image: { url: "", public_id: "" },
        processed_at: { $date: "" },
        processed_image: { url: "", public_id: "" }
    }
];

export const getPrescriptionById = (id) => {
    return mockPrescriptions.find(p => p._id === id) || null;
};

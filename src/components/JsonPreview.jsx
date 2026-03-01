import { Code } from 'lucide-react';
import './JsonPreview.css';

export default function JsonPreview({ data }) {
    // Show a subset of interesting fields
    const preview = {
        doctorUsername: data.analysis_data?.doctorUsername || '',
        patientUsername: data.analysis_data?.patientUsername || '',
        hospitalName: data.analysis_data?.hospitalName || '',
        clinicalNote: data.analysis_data?.clinicalNote
            ? data.analysis_data.clinicalNote.substring(0, 50) + '...'
            : '',
        diagnosis: data.analysis_data?.diagnosis || [],
        vitals: {
            BP: data.analysis_data?.vitals?.BP || '',
            Heartrate: data.analysis_data?.vitals?.Heartrate || '',
            SpO2: data.analysis_data?.vitals?.spO2 || '',
        },
        imageUrl: data.analysis_data?.scribePrescription?.imageUrl
            ? data.analysis_data.scribePrescription.imageUrl.substring(0, 40) + '...'
            : '',
        date: data.analysis_data?.scribePrescription?.date || '',
    };

    return (
        <div className="json-preview">
            <h3 className="section-heading">
                <Code size={20} />
                Detailed JSON Preview (Raw Data)
            </h3>
            <div className="json-code-block">
                <pre>{JSON.stringify(preview, null, 2)}</pre>
            </div>
        </div>
    );
}

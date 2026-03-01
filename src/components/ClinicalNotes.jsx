import { ClipboardList } from 'lucide-react';
import './ClinicalNotes.css';

export default function ClinicalNotes({ data }) {
    return (
        <div className="card card-pink clinical-card">
            <h3 className="section-heading">
                <ClipboardList size={20} />
                Clinical Notes
            </h3>

            {/* Diagnosis */}
            {data.diagnosis && data.diagnosis.length > 0 && (
                <div className="clinical-section">
                    <span className="label">Diagnosis</span>
                    <p className="value">{data.diagnosis.join(', ')}</p>
                </div>
            )}

            {/* Complaints */}
            {data.complaints && data.complaints.length > 0 && (
                <div className="clinical-section">
                    <span className="label">Complaints</span>
                    <ul className="complaints-list">
                        {data.complaints.map((c, i) => (
                            <li key={i} className="complaint-item">
                                <span className="bullet">•</span>
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Clinical Note / Instructions */}
            {data.clinicalNote && (
                <div className="clinical-section">
                    <span className="label">Instructions</span>
                    <p className="clinical-text">{data.clinicalNote}</p>
                </div>
            )}

            {/* Follow-up */}
            {data.followup?.date && (
                <div className="clinical-section">
                    <span className="label">Follow-up</span>
                    <p className="value">
                        {new Date(data.followup.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        {data.followup.reason && ` — ${data.followup.reason}`}
                    </p>
                </div>
            )}
        </div>
    );
}

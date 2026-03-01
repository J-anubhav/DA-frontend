import { Pill } from 'lucide-react';
import './PrescribedMeds.css';

export default function PrescribedMeds({ medication }) {
    if (!medication || medication.length === 0) {
        return (
            <div className="card meds-card">
                <h3 className="section-heading">
                    <Pill size={20} />
                    Prescribed Meds
                </h3>
                <p className="meds-empty">No medications prescribed</p>
            </div>
        );
    }

    return (
        <div className="card meds-card">
            <h3 className="section-heading">
                <Pill size={20} />
                Prescribed Meds
            </h3>
            <div className="meds-list">
                {medication.map((med, i) => (
                    <div key={i} className="med-item">
                        <div className="med-dot" />
                        <div className="med-info">
                            <span className="med-name">{med.name}</span>
                            <span className="med-dosage">
                                {med.dosage} • {med.frequency}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

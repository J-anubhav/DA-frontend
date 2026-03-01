import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './PrescriptionCard.css';

export default function PrescriptionCard({ prescription, index }) {
    const { analysis_data, status, _id } = prescription;
    const isNew = status === 'processing';
    const displayNumber = String(12 - index).padStart(2, '0');

    return (
        <Link to={`/prescription/${_id}`} className="prescription-card card card-lavender">
            <div className="pcard-left">
                <div className="pcard-number">
                    <span className="pcard-hash">#</span>
                    {displayNumber}
                </div>
                <div className="pcard-info">
                    <span className="pcard-title">Prescription no: {displayNumber}</span>
                    <span className="pcard-patient">{analysis_data?.patientUsername || 'Unknown Patient'}</span>
                    <span className="pcard-id">{analysis_data?.hospitalId || '—'}</span>
                </div>
            </div>
            <div className="pcard-right">
                {isNew && <span className="badge badge-yellow">NEW</span>}
                {!isNew && <span className="badge badge-green">Processed</span>}
                <ChevronRight size={20} className="pcard-chevron" />
            </div>
        </Link>
    );
}

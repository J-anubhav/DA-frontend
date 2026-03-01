import { User, Stethoscope, Building2, CalendarDays, Clock } from 'lucide-react';
import './PatientDoctorInfo.css';

export default function PatientDoctorInfo({ data }) {
    const formatDate = (dateStr) => {
        if (!dateStr) return '—';
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <div className="card card-blue patient-info-card">
            <h3 className="section-heading">
                <User size={20} />
                Patient & Doctor Info
            </h3>
            <div className="info-grid">
                <div className="info-item">
                    <span className="label">Patient Name</span>
                    <span className="value">{data.patientUsername || '—'}</span>
                </div>
                <div className="info-item">
                    <span className="label">Patient ID</span>
                    <span className="value">{data.hospitalId ? `PT-${data.hospitalId.replace(/[^a-zA-Z0-9]/g, '').slice(-8).toLowerCase()}` : '—'}</span>
                </div>
                <div className="info-item">
                    <span className="label"><Stethoscope size={14} style={{ display: 'inline', marginRight: 4 }} />Doctor</span>
                    <span className="value">{data.doctorUsername || '—'}</span>
                </div>
                <div className="info-item">
                    <span className="label"><Building2 size={14} style={{ display: 'inline', marginRight: 4 }} />Hospital</span>
                    <span className="value">{data.hospitalName || '—'}</span>
                </div>
                <div className="info-item">
                    <span className="label"><CalendarDays size={14} style={{ display: 'inline', marginRight: 4 }} />Date</span>
                    <span className="value">{formatDate(data.date)}</span>
                </div>
                <div className="info-item">
                    <span className="label"><Clock size={14} style={{ display: 'inline', marginRight: 4 }} />Time</span>
                    <span className="value">{data.time || '—'}</span>
                </div>
            </div>
        </div>
    );
}

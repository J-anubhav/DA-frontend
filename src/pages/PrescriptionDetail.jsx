import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Printer, Share2, CheckCircle, Clock } from 'lucide-react';
import Header from '../components/Header';
import PatientDoctorInfo from '../components/PatientDoctorInfo';
import VitalsCards from '../components/VitalsCards';
import ClinicalNotes from '../components/ClinicalNotes';
import PrescribedMeds from '../components/PrescribedMeds';
import OriginalDocument from '../components/OriginalDocument';
import { getPrescriptionById } from '../data/mockPrescription';
import './PrescriptionDetail.css';

export default function PrescriptionDetail() {
    const { id } = useParams();
    const prescription = getPrescriptionById(id);

    if (!prescription) {
        return (
            <div className="detail-page">
                <Header />
                <main className="container detail-main">
                    <div className="card not-found">
                        <h2>Prescription not found</h2>
                        <p>The requested prescription could not be located.</p>
                        <Link to="/" className="btn btn-white">
                            <ArrowLeft size={16} />
                            Back to Dashboard
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    const { analysis_data, status } = prescription;
    const isProcessed = status === 'completed';

    return (
        <div className="detail-page">
            <Header />
            <main className="container detail-main">
                {/* Top bar */}
                <div className="detail-top-bar">
                    <Link to="/" className="btn btn-white back-btn">
                        <ArrowLeft size={16} />
                        Back
                    </Link>
                    <div className="detail-top-right">
                        <span className={`badge ${isProcessed ? 'badge-green' : 'badge-yellow'}`}>
                            {isProcessed ? <CheckCircle size={12} /> : <Clock size={12} />}
                            Status: {isProcessed ? 'Processed' : 'Processing'}
                        </span>
                        <button className="btn btn-white">
                            <Printer size={16} />
                            Print
                        </button>
                        <button className="btn btn-orange">
                            <Share2 size={16} />
                            Share Report
                        </button>
                    </div>
                </div>

                {/* Title */}
                <h1 className="detail-title">{analysis_data.name || `Prescription`}</h1>

                {/* Two-column layout */}
                <div className="detail-grid">
                    {/* Left Column */}
                    <div className="detail-left">
                        <PatientDoctorInfo data={analysis_data} />
                        <ClinicalNotes data={analysis_data} />
                    </div>

                    {/* Right Column */}
                    <div className="detail-right">
                        <VitalsCards vitals={analysis_data.vitals} />
                        <PrescribedMeds medication={analysis_data.medication} />
                        <OriginalDocument
                            scribe={analysis_data.scribePrescription}
                            originalImage={prescription.original_image}
                            processedImage={prescription.processed_image}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

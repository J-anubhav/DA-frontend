import { FileText } from 'lucide-react';
import Header from '../components/Header';
import PrescriptionCard from '../components/PrescriptionCard';
import JsonPreview from '../components/JsonPreview';
import { mockPrescriptions } from '../data/mockPrescription';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard-page">
            <main className="container dashboard-main">
                <Header />
                {/* Main dashboard container */}
                <div className="dashboard-container card-dashboard">
                    {/* Title section */}
                    <div className="dashboard-header">
                        <h1 className="dashboard-title">
                            <FileText size={24} />
                            Latest Prescriptions
                        </h1>
                        <span className="badge badge-green">Live</span>
                    </div>

                    {/* Prescription list */}
                    <div className="prescription-list">
                        {mockPrescriptions.map((p, i) => (
                            <PrescriptionCard key={p._id} prescription={p} index={i} />
                        ))}
                    </div>

                    {/* JSON Preview */}
                    {mockPrescriptions.length > 0 && (
                        <JsonPreview data={mockPrescriptions[0]} />
                    )}
                </div>

                {/* CTA Banner */}
                <div className="cta-banner card">
                    <div className="cta-content">
                        <h2 className="cta-title">See your Digital Prescriptions</h2>
                        <p className="cta-text">
                            Upload and manage all your medical prescriptions in one place with AI-powered analysis.
                        </p>
                    </div>
                    <button className="btn btn-orange">Get Started</button>
                </div>
            </main>
        </div>
    );
}

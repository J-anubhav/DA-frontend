import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PrescriptionDetail from './pages/PrescriptionDetail';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/prescription/:id" element={<PrescriptionDetail />} />
            </Routes>
        </Router>
    );
}

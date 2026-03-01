import { Heart, Droplets, Scale } from 'lucide-react';
import './VitalsCards.css';

export default function VitalsCards({ vitals }) {
    const cards = [
        {
            icon: <Heart size={22} />,
            label: 'Heart Rate',
            value: vitals?.Heartrate || '—',
            unit: 'bpm',
        },
        {
            icon: <Droplets size={22} />,
            label: 'SpO2',
            value: vitals?.spO2 || '—',
            unit: '%',
        },
        {
            icon: <Scale size={22} />,
            label: 'BMI',
            value: vitals?.BMI || '—',
            unit: '',
        },
    ];

    return (
        <div className="vitals-grid">
            {cards.map((card) => (
                <div key={card.label} className="card card-yellow vital-card">
                    <div className="vital-icon">{card.icon}</div>
                    <div className="vital-info">
                        <span className="label">{card.label}</span>
                        <span className="vital-value">
                            {card.value}
                            {card.unit && <span className="vital-unit"> {card.unit}</span>}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

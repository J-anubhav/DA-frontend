import { Moon, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-inner container">
                <Link to="/" className="header-logo">
                    <span className="logo-text">DA-SYNC</span>
                </Link>
                <div className="header-actions">
                    <button className="btn-icon theme-toggle" aria-label="Toggle theme">
                        <Moon size={20} />
                    </button>
                    <button className="btn btn-pink header-account-btn">
                        <User size={16} />
                        My Account
                    </button>
                </div>
            </div>
        </header>
    );
}

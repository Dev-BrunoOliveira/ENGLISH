import React from 'react';
import { X, Trash2 } from 'lucide-react';

interface SettingsProps {
  onResetProgress: () => void;
  onLogout: () => void;
  onClose: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onResetProgress, onLogout, onClose }) => {
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Settings</h1>
        <button className="btn-icon" onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
          <X size={28} />
        </button>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#ef4444' }}>Danger Zone</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Resetting your progress will delete all XP, streaks, and unlocked lessons. This cannot be undone.</p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => {
              if (window.confirm("Are you sure you want to reset all your progress?")) {
                onResetProgress();
              }
            }}
            style={{
              padding: '1rem 2rem',
              borderRadius: '12px',
              border: 'none',
              background: 'rgba(239, 68, 68, 0.2)',
              color: '#f87171',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}
          >
            <Trash2 size={20} /> Reset My Progress
          </button>
          
          <button 
            onClick={() => {
              if (window.confirm("Are you sure you want to logout?")) {
                onLogout();
              }
            }}
            className="btn btn-glass"
            style={{ padding: '1rem 2rem', fontSize: '1rem', flex: 1, display: 'flex', justifyContent: 'center' }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

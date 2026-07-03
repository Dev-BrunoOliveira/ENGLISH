import React from 'react';

interface ProgressBarProps {
  total: number;
  completed: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ total, completed }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div style={{ width: '100%', maxWidth: '800px', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
        <span style={{ fontWeight: 600 }}>Your Progress</span>
        <span>{completed} / {total} Learned ({percentage}%)</span>
      </div>
      <div style={{ width: '100%', height: '8px', background: 'var(--glass-bg)', borderRadius: '4px', overflow: 'hidden' }}>
        <div 
          style={{ 
            height: '100%', 
            width: `${percentage}%`, 
            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
            transition: 'width 0.5s ease-out'
          }} 
        />
      </div>
    </div>
  );
};

import React from 'react';

interface ScreenTransitionProps {
  isVisible: boolean;
}

export const ScreenTransition: React.FC<ScreenTransitionProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'var(--bg-color)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'fadeInOut 1.5s ease-in-out', 
    }}>
      <div style={{ width: '300px', height: '300px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <video 
          src="/loading.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ 
            width: '150%', 
            height: '150%', 
            objectFit: 'cover',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
          }}
        />

      </div>
      <h2 className="animate-pulse" style={{ marginTop: '20px', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
        Loading...
      </h2>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeInOut {
            0% { opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

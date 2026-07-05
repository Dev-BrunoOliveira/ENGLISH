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
      animation: 'fadeInOut 1.5s ease-in-out', // Assuming it lasts 1.5s
    }}>
      {/* Increased size slightly and removed the circle crop so the character fits better */}
      <div style={{ width: '200px', height: '200px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <video 
          src="/loading.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            // Usa uma máscara radial para apagar as bordas duras do quadriculado
            // criando um efeito de "holofote" focado apenas no centro onde está o personagem
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 65%)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 65%)'
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

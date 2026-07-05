import React from 'react';

interface ScreenTransitionProps {
  isVisible: boolean;
  duration?: number; // em milissegundos
}

export const ScreenTransition: React.FC<ScreenTransitionProps> = ({ isVisible, duration = 1500 }) => {
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
      animation: `fadeInOut ${duration}ms ease-in-out`, 
    }}>
      <div style={{
        width: '220px', 
        height: '340px', 
        position: 'relative', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        // Borda de Janela
        border: '4px solid var(--glass-border)',
        borderRadius: '120px',
        boxShadow: 'var(--glass-shadow)',
        overflow: 'hidden',
        backgroundColor: 'var(--glass-bg)'
      }}>
        <video 
          src="/loading.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' // O vídeo preenche a moldura inteira!
          }}
        />
      </div>
      <h2 style={{ marginTop: '8px', color: '#f97316', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
        <span className="animate-pulse">Carregando</span>
        <span className="animated-dots"></span>
      </h2>
      <style>
        {`
          @keyframes dots {
            0%, 20% { content: ''; }
            30%, 50% { content: '.'; }
            60%, 80% { content: '..'; }
            90%, 100% { content: '...'; }
          }
          .animated-dots::after {
            content: '';
            animation: dots 1.5s infinite;
            display: inline-block;
            width: 1em; /* keeps space so text doesn't jump */
            text-align: left;
          }
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

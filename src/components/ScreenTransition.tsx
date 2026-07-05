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
      <div style={{
        width: '220px', 
        height: '340px', 
        position: 'relative', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        // Borda de Janela de Avião Cartoon
        border: '14px solid #ffffff',
        borderRadius: '120px', // Cantos hiper arredondados formando a pílula da janela
        boxShadow: '12px 12px 0px rgba(0,0,0,0.5), inset 6px 6px 0px rgba(0,0,0,0.3)', // Sombra grossa de cartoon 2D
        overflow: 'hidden',
        backgroundColor: '#ccc'
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

import React from 'react';

export const LoadingVideo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      <h2 className="animate-pulse" style={{ marginTop: '20px', fontSize: '1.2rem' }}>
        Loading...
      </h2>
      <style>
        {`
          @keyframes animate-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: .5; }
          }
          .animate-pulse {
            animation: animate-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
    </div>
  );
};

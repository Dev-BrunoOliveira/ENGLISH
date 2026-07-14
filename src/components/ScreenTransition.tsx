import React from 'react';
import { LoadingVideo } from './LoadingVideo';

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
      <LoadingVideo />
      <style>
        {`
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


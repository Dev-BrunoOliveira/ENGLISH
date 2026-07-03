import React from 'react';
import { ChevronLeft, ChevronRight, Shuffle, Eye, EyeOff } from 'lucide-react';

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
  onRandom: () => void;
  showNative: boolean;
  onToggleNative: () => void;
  currentIndex: number;
  totalPhrases: number;
}

export const Controls: React.FC<ControlsProps> = ({
  onNext,
  onPrev,
  onRandom,
  showNative,
  onToggleNative,
  currentIndex,
  totalPhrases
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginTop: '2rem' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button className="btn btn-glass" onClick={onPrev} disabled={currentIndex === 0}>
          <ChevronLeft size={20} />
          Prev
        </button>
        
        <button className="btn btn-primary" onClick={onRandom} title="Random Phrase">
          <Shuffle size={20} />
          Random
        </button>

        <button className="btn btn-glass" onClick={onNext} disabled={currentIndex === totalPhrases - 1}>
          Next
          <ChevronRight size={20} />
        </button>
      </div>

      <button className="btn btn-glass" onClick={onToggleNative}>
        {showNative ? <EyeOff size={20} /> : <Eye size={20} />}
        {showNative ? 'Hide Translation' : 'Show Translation Always'}
      </button>

      <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500, marginTop: '1rem' }}>
        Phrase {currentIndex + 1} of {totalPhrases}
      </div>
    </div>
  );
};

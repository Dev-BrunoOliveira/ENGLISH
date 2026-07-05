export const playSuccessSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    // Função auxiliar para tocar uma nota
    const playNote = (freq: number, startTime: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      // Timbre de 'sino/marimba' (triangle)
      osc.type = 'triangle';
      osc.frequency.value = freq;

      // Envelope de volume com limite de 30%
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.02); 
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    const now = ctx.currentTime;
    
    // Arpejo feliz de videogame (Acorde Maior ascendente rápido)
    playNote(523.25, now, 0.15);         // Dó (C5)
    playNote(659.25, now + 0.08, 0.15);  // Mi (E5)
    playNote(783.99, now + 0.16, 0.15);  // Sol (G5)
    playNote(1046.50, now + 0.24, 0.4);  // Dó agudo (C6) - ecoa mais tempo

  } catch (e) {
    console.error("Áudio bloqueado ou não suportado", e);
  }
};

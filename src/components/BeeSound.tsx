import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BeeSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    let source: AudioBufferSourceNode | null = null;
    let isStarted = false;

    const createBeeSound = () => {
      const duration = 8;
      const bufferSize = audioContext.sampleRate * duration;
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        const t = i / audioContext.sampleRate;
        const buzz1 = Math.sin(2 * Math.PI * 220 * t) * 0.15;
        const buzz2 = Math.sin(2 * Math.PI * 330 * t) * 0.10;
        const buzz3 = Math.sin(2 * Math.PI * 440 * t) * 0.08;
        const variation = Math.sin(2 * Math.PI * 0.5 * t) * 0.3;
        const noise = (Math.random() - 0.5) * 0.05;

        data[i] = (buzz1 + buzz2 + buzz3) * (1 + variation) + noise;
      }

      return buffer;
    };

    const buffer = createBeeSound();
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0.15;
    gainNode.connect(audioContext.destination);

    const startAudio = () => {
      if (isStarted) return;

      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      source.connect(gainNode);
      source.start(0);
      isStarted = true;

      setIsLoaded(true);
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
    };

    document.addEventListener('click', startAudio);
    document.addEventListener('touchstart', startAudio);

    audioRef.current = {
      context: audioContext,
      gainNode
    } as any;

    return () => {
      if (source && isStarted) {
        try {
          source.stop();
        } catch (e) {
          // Ignore error if already stopped
        }
      }
      audioContext.close();
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current && (audioRef.current as any).gainNode) {
      const gainNode = (audioRef.current as any).gainNode;
      if (isMuted) {
        gainNode.gain.value = 0.15;
      } else {
        gainNode.gain.value = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  if (!isLoaded) return null;

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-24 right-6 z-40 p-3 bg-amber-600/90 hover:bg-amber-500 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
    >
      {isMuted ? (
        <VolumeX className="text-black" size={24} />
      ) : (
        <Volume2 className="text-black" size={24} />
      )}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 text-amber-100 px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {isMuted ? 'Som desativado' : 'Som de abelhas'}
      </span>
    </button>
  );
}

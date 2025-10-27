import { useEffect, useState } from 'react';

export default function BeeFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        currentX = targetX;
        currentY = targetY;
      }
    };

    const animate = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * 0.1;
      currentY += dy * 0.1;

      setPosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="relative animate-bounce-slow">
        <div className="text-4xl drop-shadow-lg" style={{
          filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))',
          animation: 'float 2s ease-in-out infinite'
        }}>
          🐝
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/20 rounded-full blur-sm scale-75"></div>
      </div>
    </div>
  );
}

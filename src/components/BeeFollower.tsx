import { useEffect, useState } from 'react';

export default function BeeFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        currentX = targetX;
        currentY = targetY;
        lastX = targetX;
        lastY = targetY;
      }
    };

    const handleClick = () => {
      setIsZooming(true);
      setTimeout(() => {
        setIsZooming(false);
      }, 600);
    };

    const animate = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * 0.08;
      currentY += dy * 0.08;

      // Calcula a direção do movimento para rotacionar a abelha
      const moveX = currentX - lastX;
      const moveY = currentY - lastY;

      if (Math.abs(moveX) > 0.5 || Math.abs(moveY) > 0.5) {
        let angle = Math.atan2(moveY, moveX) * (180 / Math.PI);
        // Limita a rotação entre -45 e 45 graus para evitar que voe de ponta cabeça
        angle = Math.max(-45, Math.min(45, angle));
        setRotation(angle);
      }

      lastX = currentX;
      lastY = currentY;

      setPosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
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
      <div
        className="relative"
        style={{
          transform: `rotate(${rotation}deg) scale(${isZooming ? 1.8 : 1})`,
          transition: isZooming ? 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'transform 0.15s ease-out',
        }}
      >
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

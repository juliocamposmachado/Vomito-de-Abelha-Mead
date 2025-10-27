import { useEffect, useState } from 'react';

interface Bee {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  rotation: number;
  isStinging: boolean;
  wanderAngle: number;
  wanderRadius: number;
  lastX: number;
  lastY: number;
  facingLeft: boolean;
  bobOffset: number;
  bobSpeed: number;
}

export default function BeeFollower() {
  const [bees, setBees] = useState<Bee[]>([]);
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    // Adiciona a primeira abelha imediatamente
    const initialBee: Bee = {
      id: Date.now(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      rotation: 0,
      isStinging: false,
      wanderAngle: Math.random() * Math.PI * 2,
      wanderRadius: 150 + Math.random() * 100,
      lastX: 0,
      lastY: 0,
      facingLeft: Math.random() > 0.5,
      bobOffset: Math.random() * Math.PI * 2,
      bobSpeed: 0.05 + Math.random() * 0.05,
    };
    setBees([initialBee]);

    // Adiciona novas abelhas a cada 15 segundos
    const spawnInterval = setInterval(() => {
      setBees(prev => {
        // Limite de 8 abelhas
        if (prev.length >= 8) return prev;

        const newBee: Bee = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          targetX: Math.random() * window.innerWidth,
          targetY: Math.random() * window.innerHeight,
          rotation: 0,
          isStinging: false,
          wanderAngle: Math.random() * Math.PI * 2,
          wanderRadius: 150 + Math.random() * 100,
          lastX: 0,
          lastY: 0,
          facingLeft: Math.random() > 0.5,
          bobOffset: Math.random() * Math.PI * 2,
          bobSpeed: 0.05 + Math.random() * 0.05,
        };
        return [...prev, newBee];
      });
    }, 15000);

    return () => clearInterval(spawnInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let rafId: number;

    const animate = () => {
      setBees(prevBees => {
        return prevBees.map(bee => {
          const newBee = { ...bee };

          if (newBee.isStinging) {
            // Durante o ataque, persegue o mouse rapidamente
            newBee.targetX = mousePos.x;
            newBee.targetY = mousePos.y;

            const dx = newBee.targetX - newBee.x;
            const dy = newBee.targetY - newBee.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Velocidade rápida durante o ataque
            newBee.x += dx * 0.15;
            newBee.y += dy * 0.15;

            // Se chegou perto do mouse, volta a voar normalmente
            if (distance < 30) {
              newBee.isStinging = false;
              // Define um novo ponto de voo aleatório
              newBee.targetX = Math.random() * window.innerWidth;
              newBee.targetY = Math.random() * window.innerHeight;
              newBee.wanderAngle = Math.random() * Math.PI * 2;
            }
          } else {
            // Comportamento de voo normal - movimento errante
            newBee.wanderAngle += (Math.random() - 0.5) * 0.3;

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            newBee.targetX = centerX + Math.cos(newBee.wanderAngle) * newBee.wanderRadius;
            newBee.targetY = centerY + Math.sin(newBee.wanderAngle) * newBee.wanderRadius;

            // Mantém dentro da tela
            newBee.targetX = Math.max(50, Math.min(window.innerWidth - 50, newBee.targetX));
            newBee.targetY = Math.max(50, Math.min(window.innerHeight - 50, newBee.targetY));

            const dx = newBee.targetX - newBee.x;
            const dy = newBee.targetY - newBee.y;

            // Velocidade lenta durante voo normal
            newBee.x += dx * 0.02;
            newBee.y += dy * 0.02;

            // Chance aleatória de tentar ferroar (2% por frame)
            if (Math.random() < 0.02) {
              const distToMouse = Math.sqrt(
                Math.pow(mousePos.x - newBee.x, 2) +
                Math.pow(mousePos.y - newBee.y, 2)
              );

              // Só ataca se estiver a uma distância razoável (200-500px)
              if (distToMouse > 200 && distToMouse < 500) {
                newBee.isStinging = true;
              }
            }
          }

          // Calcula direção baseada no movimento horizontal
          const moveX = newBee.x - newBee.lastX;
          const moveY = newBee.y - newBee.lastY;

          if (Math.abs(moveX) > 0.5) {
            newBee.facingLeft = moveX < 0;
          }

          // Adiciona movimento de oscilação vertical suave
          newBee.bobOffset += newBee.bobSpeed;
          const verticalBob = Math.sin(newBee.bobOffset) * 3;

          // Rotação suave apenas para cima/baixo (perfil)
          if (Math.abs(moveY) > 0.5) {
            const tiltAngle = Math.max(-15, Math.min(15, moveY * 2));
            newBee.rotation = tiltAngle;
          } else {
            // Retorna suavemente para horizontal
            newBee.rotation *= 0.9;
          }

          newBee.lastX = newBee.x;
          newBee.lastY = newBee.y + verticalBob;

          return newBee;
        });
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [mousePos]);

  return (
    <>
      {bees.map(bee => {
        const verticalBob = Math.sin(bee.bobOffset) * 3;

        return (
          <div
            key={bee.id}
            className="pointer-events-none fixed z-50"
            style={{
              left: `${bee.x}px`,
              top: `${bee.y + verticalBob}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="relative"
              style={{
                transform: `
                  scaleX(${bee.facingLeft ? -1 : 1})
                  rotateZ(${bee.rotation}deg)
                  scale(${bee.isStinging ? 1.3 : 1})
                `,
                transition: 'transform 0.15s ease-out',
              }}
            >
              <div
                className="text-4xl drop-shadow-lg"
                style={{
                  filter: bee.isStinging
                    ? 'drop-shadow(0 0 12px rgba(239, 68, 68, 0.6))'
                    : 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))',
                }}
              >
                🐝
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/20 rounded-full blur-sm scale-75"></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

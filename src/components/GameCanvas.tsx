// src/components/GameCanvas.tsx
import { useEffect, useRef, useState } from 'react';
import { useWebSocketContext } from '../contexts/WebSocketContext';
import '../styles/GameCanvas.css';

// Define game types
interface Tank {
  id: string;
  x: number;
  y: number;
  angle: number;
  color: string;
  health: number;
}

const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { connected, sendMessage, gameState } = useWebSocketContext();
  const [localTank, setLocalTank] = useState<Tank | null>(null);
  
  // Set up game loop
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Game initialization
    const initGame = () => {
      // Set canvas dimensions
      canvas.width = 800;
      canvas.height = 600;
      
      // Create local tank
      const newLocalTank = {
        id: 'local-player',
        x: canvas.width / 2,
        y: canvas.height / 2,
        angle: 0,
        color: '#3b82f6',
        health: 100
      };
      setLocalTank(newLocalTank);
      
      // Inform server about new player
      if (connected) {
        sendMessage('playerJoin', newLocalTank);
      }
    };
    
    // Game render function
    const render = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw local tank
      if (localTank) {
        drawTank(ctx, localTank);
      }
      
      // Draw other tanks from gameState
      if (gameState.tanks) {
        Object.values(gameState.tanks).forEach((tank: any) => {
          if (tank.id !== localTank?.id) {
            drawTank(ctx, tank);
          }
        });
      }
      
      // Continue game loop
      requestAnimationFrame(render);
    };
    
    // Helper to draw a tank
    const drawTank = (ctx: CanvasRenderingContext2D, tank: Tank) => {
      ctx.save();
      ctx.translate(tank.x, tank.y);
      ctx.rotate(tank.angle);
      
      // Tank body
      ctx.fillStyle = tank.color;
      ctx.fillRect(-15, -20, 30, 40);
      
      // Tank turret
      ctx.fillRect(-5, -30, 10, 20);
      
      ctx.restore();
      
      // Health bar
      ctx.fillStyle = '#22c55e';
      ctx.fillRect(tank.x - 20, tank.y + 30, (tank.health / 100) * 40, 5);
    };
    
    // Set up keyboard controls
    const setupControls = () => {
      const keys: {[key: string]: boolean} = {};
      
      window.addEventListener('keydown', (e) => {
        keys[e.key] = true;
      });
      
      window.addEventListener('keyup', (e) => {
        keys[e.key] = false;
      });
      
      const processInput = () => {
        if (!localTank) return;
        
        const newTank = {...localTank};
        
        if (keys['ArrowUp'] || keys['w']) {
          newTank.y -= 2;
        }
        if (keys['ArrowDown'] || keys['s']) {
          newTank.y += 2;
        }
        if (keys['ArrowLeft'] || keys['a']) {
          newTank.x -= 2;
        }
        if (keys['ArrowRight'] || keys['d']) {
          newTank.x += 2;
        }
        
        // Only update if position changed
        if (newTank.x !== localTank.x || newTank.y !== localTank.y) {
          setLocalTank(newTank);
          if (connected) {
            sendMessage('playerMove', {
              id: newTank.id,
              x: newTank.x,
              y: newTank.y,
              angle: newTank.angle
            });
          }
        }
      };
      
      const inputInterval = setInterval(processInput, 1000/60);
      return () => clearInterval(inputInterval);
    };
    
    initGame();
    const cleanupControls = setupControls();
    requestAnimationFrame(render);
    
    return () => {
      cleanupControls();
    };
  }, [canvasRef, connected, sendMessage, gameState, localTank]);
  
  return (
    <div className="game-container">
      <div className="connection-status">
        {connected ? 'Connected ✓' : 'Disconnected ✗'}
      </div>
      <canvas ref={canvasRef} className="game-canvas"></canvas>
      <div className="game-controls">
        <p>Controls: Arrow keys or WASD to move</p>
      </div>
    </div>
  );
};

export default GameCanvas;

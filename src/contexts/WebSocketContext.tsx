// src/contexts/WebSocketContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import { socketService } from '../services/socketService';

type WebSocketContextType = {
  connected: boolean;
  sendMessage: (event: string, data: any) => void;
  gameState: any;
};

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [connected, setConnected] = useState(false);
  const [gameState, setGameState] = useState({});

  useEffect(() => {
    socketService.init();
    
    socketService.onConnect(() => setConnected(true));
    socketService.onDisconnect(() => setConnected(false));
    socketService.onGameState((state) => setGameState(state));

    return () => {
      socketService.disconnect();
    };
  }, []);

  const sendMessage = (event: string, data: any) => {
    socketService.emit(event, data);
  };

  return (
    <WebSocketContext.Provider value={{ connected, sendMessage, gameState }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocketContext must be used within a WebSocketProvider');
  }
  return context;
};
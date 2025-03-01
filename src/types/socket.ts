// src/types/socket.ts
import { GameState, MovementData, Tank } from './game';

/**
 * Socket connection configuration
 */
export interface SocketConfig {
  url: string;
  reconnection: boolean;
  reconnectionAttempts: number;
  reconnectionDelay: number;
}

/**
 * Socket event handlers
 */
export interface SocketEventHandlers {
  onConnect: () => void;
  onDisconnect: () => void;
  onError: (error: Error) => void;
  onGameState: (state: GameState) => void;
}

/**
 * Socket service interface
 */
export interface ISocketService {
  init: () => void;
  disconnect: () => void;
  emit: <T>(event: string, data: T) => void;
  onConnect: (callback: () => void) => void;
  onDisconnect: (callback: () => void) => void;
  onGameState: (callback: (state: GameState) => void) => void;
}

/**
 * WebSocket context value interface
 */
export interface WebSocketContextValue {
  connected: boolean;
  sendMessage: <T>(event: string, data: T) => void;
  gameState: GameState;
}
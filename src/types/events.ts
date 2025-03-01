// src/types/events.ts
import { MovementData, Tank } from './game';

/**
 * All socket event names used in the application
 */
export enum SocketEvent {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  ERROR = 'error',
  PLAYER_JOIN = 'playerJoin',
  PLAYER_MOVE = 'playerMove',
  PLAYER_SHOOT = 'playerShoot',
  GAME_STATE = 'gameState',
}

/**
 * Mapped types for event data
 */
export interface EventDataMap {
  [SocketEvent.PLAYER_JOIN]: Tank;
  [SocketEvent.PLAYER_MOVE]: MovementData;
  [SocketEvent.PLAYER_SHOOT]: {
    id: string;
    angle: number;
  };
  [SocketEvent.GAME_STATE]: Record<string, any>;
}
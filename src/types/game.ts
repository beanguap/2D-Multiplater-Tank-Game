// src/types/game.ts

/**
 * Represents a tank in the game
 */
export interface Tank {
  id: string;
  x: number;
  y: number;
  angle: number;
  color: string;
  health: number;
}

/**
 * Represents a player in the game
 */
export interface Player {
  id: string;
  name?: string;
  score: number;
  tank: Tank;
}

/**
 * Movement data for tank position updates
 */
export interface MovementData {
  id: string;
  x: number;
  y: number;
  angle: number;
}

/**
 * The complete game state
 */
export interface GameState {
  tanks: Record<string, Tank>;
  players: Record<string, Player>;
  projectiles?: Projectile[];
  powerups?: Powerup[];
}

/**
 * Represents a projectile in the game
 */
export interface Projectile {
  id: string;
  x: number;
  y: number;
  angle: number;
  speed: number;
  damage: number;
  ownerId: string;
}

/**
 * Represents a powerup in the game
 */
export interface Powerup {
  id: string;
  type: PowerupType;
  x: number;
  y: number;
}

/**
 * Types of powerups available in the game
 */
export enum PowerupType {
  HEALTH = 'health',
  SPEED = 'speed',
  DAMAGE = 'damage',
  SHIELD = 'shield'
}
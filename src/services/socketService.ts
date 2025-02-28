import { io, Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket | null = null;
  
  init(): void {
    // Connect to your backend server websocket endpoint
    // Use environment variable in production
    const SOCKET_URL = 'http://localhost:3001';
    
    this.socket = io(SOCKET_URL, {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });
    
    this.socket.on('connect', () => {
      console.log('Connected to server with ID:', this.socket?.id);
    });
    
    this.socket.on('error', (error: Error) => {
      console.error('Socket connection error:', error);
    });
  }
  
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
  
  emit(event: string, data: any): void {
    if (this.socket) {
      this.socket.emit(event, data);
    } else {
      console.error('Cannot emit event: Socket not connected');
    }
  }
  
  onConnect(callback: () => void): void {
    if (this.socket) {
      this.socket.on('connect', callback);
    }
  }
  
  onDisconnect(callback: () => void): void {
    if (this.socket) {
      this.socket.on('disconnect', callback);
    }
  }
  
  onGameState(callback: (state: any) => void): void {
    if (this.socket) {
      this.socket.on('gameState', callback);
    }
  }
}

export const socketService = new SocketService();
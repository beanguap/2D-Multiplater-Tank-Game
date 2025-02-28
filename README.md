# 🎮 2D Multiplayer Tank Game

A modern 2D multiplayer tank game built with React, TypeScript, and CSS using Vite. This project provides a solid foundation for real-time gameplay using WebSockets, featuring a dynamic leaderboard, tank customization options, and an engaging landing page.

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8.1-010101?style=flat&logo=socket.io)](https://socket.io/)

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Development](#-development)
- [Testing](#-testing)
- [Additional Recommendations](#-additional-recommendations)
- [Contributing](#-contributing)
- [License](#-license)

## 🔭 Overview

This project serves as a 2D multiplayer tank game. It leverages modern web technologies to ensure a fast, scalable, and maintainable codebase. The design focuses on real-time interactions via WebSockets, and provides modules for leaderboards, tank customization, and an attractive landing page.

## ✨ Features

- **Real-Time Multiplayer:** Powered by WebSocket communication using Socket.IO
- **Live Leaderboard:** Displays current player rankings dynamically
- **Tank Customization:** Offers customizable tank features (color, weapons, etc.)
- **Landing Page:** A user-friendly entry point that highlights game features and navigation
- **Testing:** Integrated testing with Vitest and Testing Library for a robust development workflow
- **Responsive UI:** Designed to work across various devices and screen sizes

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [React](https://reactjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Bundler** | [Vite](https://vitejs.dev/) |
| **Styling** | CSS |
| **WebSockets** | [Socket.IO Client](https://socket.io/docs/v4/client-api/) |
| **Routing** | [React Router](https://reactrouter.com/) |
| **Testing** | [Vitest](https://vitest.dev/), [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) |

## 📂 Project Structure

```plaintext
my-tank-game/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/                # Media files: images, sounds, etc.
│   ├── components/            # Reusable UI components
│   │   ├── TankCustomization.tsx
│   │   ├── Leaderboard.tsx
│   │   ├── LandingPage.tsx
│   │   └── GameCanvas.tsx     # Main game rendering (e.g., using canvas, PixiJS, or react-konva)
│   ├── contexts/              # Context providers (e.g., WebSocket context)
│   │   └── WebSocketContext.tsx
│   ├── hooks/                 # Custom hooks (e.g., useWebSocket)
│   │   └── useWebSocket.ts
│   ├── services/              # External API and WebSocket service logic
│   │   └── socketService.ts
│   ├── styles/                # Global styles and component-specific CSS
│   │   └── main.css
│   ├── tests/                 # Vitest test files
│   │   └── example.test.ts
│   ├── App.tsx                # Main application component with routing
│   └── main.tsx               # Entry point for the React application
├── tsconfig.json
├── vite.config.ts
└── package.json

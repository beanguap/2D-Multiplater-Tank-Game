// src/tests/example.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '../components/LandingPage';

describe('LandingPage Component', () => {
  it('renders landing page title', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/2D Multiplayer Tank Game/i)).toBeInTheDocument();
  });
});

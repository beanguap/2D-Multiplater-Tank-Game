// tests/example.test.ts
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LandingPage from '../components/LandingPage';

describe('LandingPage Component', () => {
  it('renders a welcome message', () => {
    render(<LandingPage />);
    expect(screen.getByText(/welcome/i)).toBeDefined();
  });
});

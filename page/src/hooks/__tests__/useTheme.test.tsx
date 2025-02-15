import '@testing-library/jest-dom';
import { render, act, waitFor } from '@testing-library/react';
import useTheme from '../useTheme';

describe('useTheme Hook', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('light', 'dark');
  });

  const TestComponent = () => {
    const [theme, toggleTheme] = useTheme();
    return <button onClick={toggleTheme}>{theme}</button>;
  };

  it('should return theme saved in localStorage', () => {
    localStorage.setItem('theme', 'dark');

    const { getByText } = render(<TestComponent />);

    expect(getByText('dark')).toBeInTheDocument();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should switch to dark theme correctly', async () => {
    const { getByText } = render(<TestComponent />);
    const button = getByText('light');

    act(() => {
      button.click();
    });

    await waitFor(() => {
      expect(getByText('dark')).toBeInTheDocument();
      expect(localStorage.getItem('theme')).toBe('dark');
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    act(() => {
      button.click();
    });

    await waitFor(() => {
      expect(getByText('light')).toBeInTheDocument();
      expect(localStorage.getItem('theme')).toBe('light');
      expect(document.documentElement.classList.contains('light')).toBe(true);
    });
  });
});

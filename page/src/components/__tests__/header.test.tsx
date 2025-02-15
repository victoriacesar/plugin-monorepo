import { render, fireEvent, screen } from '@testing-library/react';
import { Header } from '../header';
import useTheme from '../../hooks/useTheme';

jest.mock('../../hooks/useTheme');

describe('Header Component', () => {
  const mockToggleTheme = jest.fn();

  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue(['light', mockToggleTheme]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render component correctly with default light theme', () => {
    render(<Header />);

    const toggleBtn = screen.getByTestId('switch-theme');

    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn).toContainElement(screen.getByTestId('moon-icon'));
    expect(screen.getByText('Tema:')).toBeInTheDocument();
  });

  it('should switch to dark theme when button is clicked', () => {
    render(<Header />);

    const toggleButton = screen.getByTestId('switch-theme');
    
    fireEvent.click(toggleButton);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
    expect(toggleButton).toContainElement(screen.getByTestId('moon-icon'));
  });
});
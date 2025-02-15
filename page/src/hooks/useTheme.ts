import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type UseThemeReturnType = [Theme, () => void];

const useTheme = (): UseThemeReturnType => {
  const [theme, setTheme] = useState<Theme>(() => {

    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
};

export default useTheme;
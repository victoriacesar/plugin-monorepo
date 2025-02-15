import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import useTheme from '../hooks/useTheme';

export const Header = () => {
  const [theme, toggleTheme] = useTheme() as [string, () => void];

  return (
    <div className="bg-brand-primary-medium dark:bg-brand-primary-dark h-[80px] flex items-center justify-end gap-3 px-8">
      <div className="flex gap-2 items-center">
        <p className="text-white dark:text-gray-100">Tema:</p>
        <button
          aria-label="Troca de tema"
          onClick={toggleTheme}
          className="bg-brand-secondary-main dark:bg-brand-secondary-dark p-1 rounded-xl hover:bg-brand-secondary-medium dark:hover:bg-brand-secondary-medium transition-colors duration-200"
        >
          {theme === 'light' ? (
            <MoonIcon className="size-6 text-white" />
          ) : (
            <SunIcon className="size-6 text-white" />
          )}
        </button>
      </div>
      <Bars3Icon className="size-6 text-white cursor-pointer hover:text-brand-secondary-light dark:hover:text-brand-secondary-light transition-colors duration-200" />
    </div>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('app-theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      <HeaderMain/>
    </ThemeContext.Provider>
  );
};

function HeaderMain() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="container py-3">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="h4">My App</h1>
        <button
          className={`btn btn-${theme === 'light' ? 'dark' : 'light'}`}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </header>
  );
}

export const useTheme = () => useContext(ThemeContext);

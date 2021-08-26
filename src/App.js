import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes/';

function App() {
  const [theme, setTheme] = useState('dark');
  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function toogleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToogleTheme={toogleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { portfolioTheme } from './theme';
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={portfolioTheme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              
            </Route>
          </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

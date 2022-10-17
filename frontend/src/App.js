import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './Components';
import { Home, About, Events, Gallery, Sermon } from './Pages';
import { createTheme, ThemeProvider} from '@mui/material';

import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D0074 '
    },
    secondary: {
      main: '#AC7F34'
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Event" element={<Events/>} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/Sermon" element={<Sermon/>} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

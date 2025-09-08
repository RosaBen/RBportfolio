import { BrowserRouter } from "react-router-dom"
import AppRouter from "./routes/Router";
import './styles/App.css'
import { useState} from 'react';
// import { keepTheme } from './utils/themes';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prevTheme => !prevTheme);

  console.log('isdark',isDark)
  return (
    <BrowserRouter>
      <div className={isDark? "App theme-dark": "App theme-light" }>
        <Navbar  toggleTheme={toggleTheme} isDark={isDark} />
        <Header />
      </div>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
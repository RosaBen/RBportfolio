import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/Router";
import "./styles/navbar.css";
import './styles/sampleProjects.css';
import './styles/contact.css';
import { useState } from "react";
import Navbar from "./components/Navbar";

function App () {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prevTheme => !prevTheme);

  return (
    <BrowserRouter>
      <body className={ isDark ? "theme-dark" : "theme-light" }>
        <header>
          <Navbar toggleTheme={ toggleTheme } isDark={ isDark } />
        </header>
        <main>
          <AppRouter />
        </main>
      </body>
    </BrowserRouter>
  );
}

export default App;

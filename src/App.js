import { Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Navbar switchTheme={switchTheme} theme={theme} />
      <Routes>hello</Routes>
    </div>
  );
}

export default App;

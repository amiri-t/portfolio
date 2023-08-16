import { Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Navbar switchTheme={switchTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

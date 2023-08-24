import { Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Services from "./routes/Services";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      {/* create the why choose me section in the homapage */}
      <Navbar switchTheme={switchTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer switchTheme={switchTheme} theme={theme} />
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Services from "./routes/Services";
import ProjectsPage from "./routes/ProjectsPage";
import AboutMe from "./routes/AboutMe";
import ContactMe from "./routes/ContactMe";

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
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
      <Footer switchTheme={switchTheme} theme={theme} />
    </div>
  );
}

export default App;

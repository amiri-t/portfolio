import { Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Services from "./routes/Services";
import ProjectsPage from "./routes/ProjectsPage";
import AboutMe from "./routes/AboutMe";
import ContactMe from "./routes/ContactMe";
import SelectedProject from "./routes/SelectedProject";
import WebDesignPage from "./routes/WebDesignPage";
import SEOPage from "./routes/SEOPage";
import SocialMediaMarketing from "./routes/SocialMediaMarketing";
import ContentCreationPage from "./routes/ContentCreationPage";
import BrandingDesign from "./routes/BrandingDesign";

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
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />

        <Route path="/projects/:projectId" element={<SelectedProject />} />

        <Route
          path="/services/web-design"
          element={<WebDesignPage theme={theme} />}
        />
        <Route path="/services/seo" element={<SEOPage />} />

        <Route
          path="/services/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route
          path="/services/content-creation"
          element={<ContentCreationPage />}
        />
        <Route path="/services/branding-design" element={<BrandingDesign />} />

        {/* <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-5467935-4568166.png"
        alt=""
      /> */}
      </Routes>
      <Footer switchTheme={switchTheme} theme={theme} />
    </div>
  );
}

export default App;

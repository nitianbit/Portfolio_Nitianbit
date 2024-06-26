import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import Description from "./components/Description/Description";
import { Experience } from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppTerms from './components/src/TermsApp';
import PrivacyPolicy from './components/src/PrivacyPolicy';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<>
          <div className={`${styles.App} gap-10`}>
            <Navbar />
            <Hero />
            <Description />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </>} />
        <Route path="tnc" element={<AppTerms />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
      </Routes>
      {/* <Footer /> */}

    </Router>
  );
}

export default App;

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

function App() {
  return (
    <div className={`${styles.App} gap-10`}>
      <Navbar />
      <Hero />
      <Description />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;

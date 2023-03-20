import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;

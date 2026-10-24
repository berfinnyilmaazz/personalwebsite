import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';
import { useCleanUrl } from './useCleanUrl';

export default function App() {
  useCleanUrl();

  return (
    <LanguageProvider>
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 sm:gap-32 sm:px-6">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

import { MotionProvider } from './contexts/MotionContext';
import { SoundProvider } from './contexts/SoundContext';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Impact from './components/Impact';
import About from './components/About';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <MotionProvider>
      <SoundProvider>
      <Loader />
      <Header />
      <main>
        <Hero />
        <Work />
        <Impact />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
      </SoundProvider>
    </MotionProvider>
  );
}

export default App;

import { MotionProvider } from './contexts/MotionContext';
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
    </MotionProvider>
  );
}

export default App;

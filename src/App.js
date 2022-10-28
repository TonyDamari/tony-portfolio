import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="container">
      <Hero />
      <TechStack />
      <Projects/>
     <Footer/>
    </div>
  );
}

export default App;

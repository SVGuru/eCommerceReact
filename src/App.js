import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import EmcNavBar from './components/EmcNavBar';
import Home from './components/Home';
import Faqs from './components/Faqs';
import About from './components/About';
import Futer from './components/Footer';
import Contactme from './components/Contactme';
import Gallery from './components/Gallery';
import Topics from './components/Topics';

function App() {
  return (
    <div>
      <EmcNavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Topics" element={<Topics />} />
        <Route path="/Faqs"  element={<Faqs />} />
        <Route path="/Gallery" element={<Gallery />}  />
        <Route path="/Contactme"  element={<Contactme />} />
        <Route path="/Futer" element={<Futer />}  />
      </Routes>

      <Futer/>

    </div>
  );
}

export default App;

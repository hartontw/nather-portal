import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/Main/About/About';
import Projects from './components/Main/Projects/Projects';
import Articles from './components/Main/Articles/Articles';
import Videos from './components/Main/Videos/Videos';
import NotFound from './components/Main/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<About />} />       
            <Route path="/about"
              element={<Navigate to="/" replace />}
            />  
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

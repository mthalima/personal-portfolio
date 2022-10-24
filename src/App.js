import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectInfo from './pages/ProjectInfo';

function App() {
  return (
    <div className="App">
      <Router basename='personal-portfolio'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/projects/:id' element={<ProjectInfo />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from './components/Homepage';
import Projects from './components/Project';
import Achievements from './components/Achievements';
import Awards from './components/Awards';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;

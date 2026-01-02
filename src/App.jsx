
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wish from './pages/Wish';

function App() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', position: 'relative' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wish" element={<Wish />} />
      </Routes>
    </div>
  );
}

export default App;

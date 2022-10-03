import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/me" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

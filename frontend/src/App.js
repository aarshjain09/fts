import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/LoginAndSignup/Loginsignup';
import Whiteboard from './pages/whiteboard/Whiteboard';
import Chatroom from './pages/chatroom/mainchat';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/whiteboard" element={<Whiteboard />} />
          <Route path="/chatroom" element={<Chatroom />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


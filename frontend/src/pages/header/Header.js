// pages/header/Header.js
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">CollabSpace</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login/Register</Link>
        <Link to="/whiteboard">Whiteboard</Link>
        <Link to="/chatroom">Chat</Link>
        <Link to="/chatbot">AI Chat</Link>
      </nav>
    </header>
  );
}

export default Header;

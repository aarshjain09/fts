import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Loginsignup from "./pages/LoginAndSignup/Loginsignup.jsx";
import MainChat from './pages/chatroom/mainchat.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Loginsignup/>}/>
          <Route path="/" element={<MainChat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

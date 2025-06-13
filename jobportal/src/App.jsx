import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import Login from './components/Login';
import Register from './components/Register';
import ReactDOM from 'react-dom';


function ModalPortal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">{children}</div>,
    document.getElementById('modal-root') 
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  const isLoggedIn = Boolean(user);

  function handleLogout() {
    setUser(null);
    alert('Logged out!');
  }

  return (
    <>
      <BrowserRouter>
        <header className="app-header">
          <h1>
            <Link to="/">Job Portal</Link>
          </h1>
          <nav>
            {isLoggedIn ? (
              <>
                <span>Welcome, {user.username}!</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
            <div className="button-group">
  <button onClick={() => setShowLogin(true)}>Login</button>
  <button onClick={() => setShowRegister(true)}>Register</button>
</div>
            )}
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
        </Routes>

        {showLogin && (
          <ModalPortal>
            <Login
              onClose={() => setShowLogin(false)}
              onLoginSuccess={(loggedInUser) => {
                setUser(loggedInUser);
                setShowLogin(false);
              }}
            />
          </ModalPortal>
        )}

        {showRegister && (
          <ModalPortal>
            <Register onClose={() => setShowRegister(false)} />
          </ModalPortal>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;

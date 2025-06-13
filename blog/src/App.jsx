import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import UserPosts from './pages/UserPosts';
import ViewPost from './pages/ViewPost';
import Navbar from './components/Navbar';

function App() {


  return (
    <>
     <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/reetha/posts" />} />
        <Route path="/:username/posts" element={<UserPosts />} />
        <Route path="/post/:slug" element={<ViewPost />} />
      </Routes>
      <div id="portal-root"></div>
    </div>
     </BrowserRouter>
    </>
  )
}

export default App

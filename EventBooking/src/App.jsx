import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import BookingPage from "./pages/BookingPage";
import Navbar from "./components/Navbar";
import withLoginProtection from "./hoc/withLoginProtection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route
            path="/events/:eventId/book"
            element={withLoginProtection(<BookingPage />)}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<RequireAuth />}>
    <Route path="/booking/:eventId" element={<BookingPage />} />
  </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

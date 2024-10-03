import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import CreatePost from './pages/CreatePost';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import axios from "axios";
import { useAppStateStore, useUserStore } from "./global/states";
import { serverURI } from "./config/config";
import Loader from "./components/Loader";



function App() {
  const ready = useAppStateStore((state) => state.ready)
  const setLogin = useAppStateStore((state) => state.setLogin)
  const setReady = useAppStateStore((state) => state.setReady)
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    setReady(true);
    setLogin(true);
    const fetchUserWithCookie = async () => {
      let response = await axios.get(`${serverURI}/api/auth/valid`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
      if (response.data.status) {
        setUser(response.data.user.name, response.data.user.email, response.data.user._id, response.data.user.isAdmin);
      } else throw new Error(response.data.message);
    };
    fetchUserWithCookie();

  })

  if (ready) {
    return (
      <div className="bg-transparent">
        <header className="bg-white shadow-lg w-full p-3">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
        <Footer />
      </div>
    );
  } else  <Loader />
}

export default App;
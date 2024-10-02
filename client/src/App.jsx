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



function App() {
  const ready = useAppStateStore((state) => state.ready)
  const setLogin = useAppStateStore((state) => state.setLogin)
  const setReady = useAppStateStore((state) => state.setReady)
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const fetchUserWithCookie = async () => {
      let response = await axios.get(`${serverURI}/api/auth/valid`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
      if (response.data.status) {
        setUser(response.data.user.name, response.data.user.email, response.data.user._id, response.data.user.isAdmin);
        setLogin(true);
        setReady(true);
      } else throw new Error(response.data.message);
    };
    fetchUserWithCookie();
    
  })

  if (ready) {
    return (
      <div className="App">
        <header className="bg-white shadow-md w-full p-6">
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
  } else {
    return <div className="h-[100vh]">
      <div className="flex-col gap-4 w-full h-full flex items-center justify-center">
        <div
          className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
        >
          <div
            className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
          ></div>
        </div>
        <div className="text-red-400 text-xl animate-pulse">Loading....</div>
      </div>
    </div>
  }
}

export default App;
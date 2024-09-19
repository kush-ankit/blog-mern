import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md w-full p-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-800">My Blog</h1>
          <nav>
            <Link to="/login" className="text-blue-500 hover:underline mr-4">Login</Link>
            <Link to="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
            <Link to="/admin" className="text-blue-500 hover:underline ml-4">Admin</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Blog</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover and share your thoughts with the world. Sign in to start creating or managing your blogs.
        </p>
        <div className="flex gap-4">
          <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Sign In
          </Link>
          <Link to="/dashboard" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
            Dashboard
          </Link>
        </div>
      </main>
      <footer className="bg-gray-200 w-full p-4 text-center">
        <p className="text-gray-600">&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

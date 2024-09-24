import { Link } from "react-router-dom";
import BlogCard from "../components/Blog";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md w-full p-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-800">My Blog</h1>
          <nav>
            <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
              Sign In
            </Link>
            <Link to="/dashboard" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex flex-row justify-center text-center p-4">
        <section className="w-[25%] p-2">
          <div className="w-[70%] rounded-md border-black border flex flex-col justify-center items-center ml-auto bg-white p-3 gap-4">
            <h2 className="text-lg font-bold text-left">Our Community is a community of 2,097,187 amazing people</h2>
            <p className="text-left">We&apos;re a place where coders share, stay up-to-date and grow their careers.</p>
            <button className="rounded-md w-full border border-black py-2 hover:bg-blue-500 hover:text-white">Login</button>
            <button className="rounded-md w-full border border-black py-2 hover:bg-green-500 hover:text-white">Signup</button>
          </div>
        </section>
        <section className="w-[50%] px-6 flex flex-col gap-6">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        </section>
        <section className="w-[25%]">
          <h2 className="text-2xl font-bold text-left">Popular Topics</h2>
          <ul className="list-disc list-inside text-left">
            <li>AI</li>
            <li>Cloud Computing</li>
            <li>Frontend Development</li>
            <li>Web Development</li>
            <li>Python</li>
          </ul>
          <h2 className="text-2xl font-bold text-left">About Us</h2>
          <p className="text-left">We are a blog platform that focuses on sharing knowledge and resources for developers.</p>
          <Link to="/about" className="text-blue-500 hover:text-blue-600">Learn More</Link>
        </section>
      </main>
      <footer className="bg-gray-200 w-full p-4 text-center">
        <p className="text-gray-600">&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

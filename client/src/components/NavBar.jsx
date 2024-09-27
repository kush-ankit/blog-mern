import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="container mx-auto flex items-center justify-between">
    <h1 className="text-4xl font-bold text-gray-800">Blog App</h1>
    <input type="placeholder" placeholder='search' name='search' className='border-2 border-black border-solid rounded-lg w-1/4 h-8 outline-blue-500 ring-blue-500 text-black p-2 py-2' id="" />
    <nav className="flex gap-4">
      <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
        Create account
      </Link>
      <Link to="/dashboard" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
        Log in
      </Link>
    </nav>
  </div>
  )
}

export default NavBar;
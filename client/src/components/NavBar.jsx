import { Link } from 'react-router-dom'
import { useAppStateStore, useUserStore } from '../global/states';

function NavBar() {
  const login = useAppStateStore((state) => state.login);


  return (
    <div className="container mx-auto flex items-center justify-between">
      <h1 className="text-4xl font-bold text-gray-800">Blog App</h1>
      <div className='flex flex-grow justify-around'>
        <input type="text" placeholder='Search' name='Search' className='border w-1/2 border-black rounded-md outline-none py-2 px-3 justify-center' id="" />
      </div>
      {login ? <UserLoginIcon /> : <nav className="flex gap-4">
        <Link to="/auth?state=create-account" className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Create account
        </Link>
        <Link to="/auth?state=login" className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          Log in
        </Link>
      </nav>}
    </div>
  )
}

export default NavBar;

import { FaRegUser } from "react-icons/fa";



function UserLoginIcon() {
  const name = useUserStore((state) => state.name);
  const email = useUserStore((state) => state.email);
  return (
    <div>
      <span>{name}</span>
      <span><FaRegUser /></span>
    </div>
  )
}
import { Link } from 'react-router-dom'
import { useAppStateStore, useUserStore } from '../global/states';
import { MdOutlineDashboard } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import {
  Popover,
  Typography,
  Avatar,
  List,
} from "@material-tailwind/react";
import { FaRegEdit } from 'react-icons/fa';


function NavBar() {
  const login = useAppStateStore((state) => state.login);


  return (
    <div className="container mx-auto flex items-center justify-between " >
      <Link to='/' className='flex items-center' >
        <img className='w-12 h-12' src="https://i.ibb.co/S0dWnZC/file.png" alt="Logo image" />
        <h1 className="text-3xl font-bold text-gray-800">Blog App</h1>
      </Link>
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


const profie_picture = <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className='w-8 h-8' />; // declaring profile_picture for later use

function UserLoginIcon() {
  const name = useUserStore((state) => state.name);
  const email = useUserStore((state) => state.email);
  const setLogin = useAppStateStore((state) => state.setLogin);
  const setUser = useUserStore((state) => state.setUser);

  function logout() {
    document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    setUser(null, null, null, null, null, null, null);
    setLogin(false);
  }

  return (
    <Popover>
      <Popover.Trigger className='text-sm'><List.Item>
        <List.ItemStart>
          {profie_picture}
        </List.ItemStart>
        <div>
          <Typography color="default" className="font-semibold" >
            {name && name}
          </Typography>
          <Typography type="small" className="text-foreground">
            {name && email}
          </Typography>
        </div>
      </List.Item></Popover.Trigger>
      <Popover.Content className="max-w-sm p-1 border shadow-2xl">
        <List>
          <Link to='/dashboard'>
            <List.Item>
              <List.ItemStart>
                <MdOutlineDashboard />
              </List.ItemStart>
              Dashboard
            </List.Item>
          </Link>
          <Link to='/createpost'>
            <List.Item>
              <List.ItemStart>
                <FaRegEdit />
              </List.ItemStart>
              Create Blog
            </List.Item>
          </Link>
          <Link to='/theme'>
            <List.Item>
              <List.ItemStart>
                <MdDarkMode />
              </List.ItemStart>
              Theme
            </List.Item>
          </Link>
          <List.Item onClick={logout}>
            <List.ItemStart>
              <IoLogOutOutline />
            </List.ItemStart>
            Logout
          </List.Item>
        </List>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  )
}
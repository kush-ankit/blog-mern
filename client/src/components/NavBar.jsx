import { Link } from 'react-router-dom'
import { useAppStateStore, useUserStore } from '../global/states';
import { MdOutlineDashboard } from "react-icons/md";
import { IoLogOutOutline, IoMenu, IoSearch } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import {
  Popover,
  Typography,
  Avatar,
  List,
  Button,
} from "@material-tailwind/react";
import { FaRegEdit } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";



function NavBar() {
  const login = useAppStateStore((state) => state.login);
  const [isMenu, setIsMenu] = useState(false);

  function closeMenuClickHandler() {
    setTimeout(() => {
      setIsMenu(false);
    }, 10)
  }


  return (
    <>
      {isMenu && <div className='absolute z-10 w-full h-[95vh] bg-black bg-opacity-85 grid place-content-center'>
        <ul className='text-xl text-center font-bold flex flex-col gap-4 items-center'>
          <li className="flex gap-4 ">
            <Button variant='ghost' size='md' color='success' onClick={closeMenuClickHandler}><Link to="/" className='text-lg'>Home</Link></Button>
          </li>
          <li className="flex gap-4">
            <Button variant='ghost' size='md' color='success' onClick={closeMenuClickHandler}><Link to="/auth?state=login" className='text-lg'>Login</Link></Button>
          </li>
          <li className="flex gap-4">
            <Button variant='ghost' color='success' onClick={closeMenuClickHandler}><Link to="/auth?state=create-account" className='text-lg'>Create account</Link></Button>
          </li>
          <li className="flex gap-4">
            <Button variant='outline' color='warning' onClick={() => setIsMenu(!isMenu)} className="">Close</Button>
          </li>
        </ul>
      </div>}
      <div className="container mx-auto flex items-center justify-between p-1 relative" >
        <Link to='/' className='flex items-center' >
          <img className='w-12 h-12' src="https://i.ibb.co/S0dWnZC/file.png" alt="Logo image" />
          <h1 className="text-xl md:text-3xl  font-bold text-gray-800">Blog App</h1>
        </Link>
        <div className='hidden md:flex flex-grow justify-around'>
          <input type="text" placeholder='Search' name='Search' className='border w-1/2 border-black rounded-md outline-none py-2 px-3 justify-center' id="" />
        </div>

        {login ? <UserLoginIcon /> : <><nav className="flex gap-4 px-4">
          <Link to="/auth?state=create-account" className="hidden md:flex bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Create account
          </Link>
          <div className='md:hidden flex flex-grow justify-around'>
            <IoSearch size={25} />
          </div>
          <Link to="/auth?state=login" className="hidden md:flex bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition duration-300">
            Log in
          </Link>
          <button onClick={() => setIsMenu(!isMenu)} className='md:hidden'>{isMenu ? <IoMdClose size={25} /> : <IoMenu size={25} />}</button>
        </nav> </>}
      </div>
    </>
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
    toast.warning("You are logged out successfully", {
      position: "bottom-right",
    })
  }

  return (
    <Popover>
      <Popover.Trigger className='text-sm'><List.Item>
        <List.ItemStart>
          {profie_picture}
        </List.ItemStart>
        <div className='hidden md:block'>
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
import { FaBirthdayCake, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import DashboardBlogCard from '../components/DashboardBlogCard';
import { useAppStateStore, useUserStore } from '../global/states';
import { Avatar } from '@material-tailwind/react';
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { serverURI } from '../config/config';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const nav = useNavigate();

  const name = useUserStore((state) => state.name);
  const email = useUserStore((state) => state.email);
  const userName = useUserStore((state) => state.userName);
  const bio = useUserStore((state) => state.bio);
  const createdAt = useUserStore((state) => state.createdAt);
  const login = useAppStateStore((state) => state.login);

  const [blogs, setBlogs] = useState([])
  const [refreshBlogData, setRefreshBlogData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`${serverURI}/api/blog/userAllBlogs`, { Headers: { 'Content-Type': 'application/json' }, withCredentials: true });
      if (response.data.status) {
        setBlogs(response.data.blogs)
      } else throw new Error(response.data.message);
    }
    if (login) {
      fetchData();
    } else {
      setBlogs([]);
      nav('/')
    }
  }, [login, refreshBlogData]);

  function refreshHandler() {
    setRefreshBlogData(!refreshBlogData);
  }

  return (
    <div className=''>
      <header className='h-[22rem] md:w-[calc(100vw-18px)] flex-col justify-center items-center'>
        <div className='w-full bg-gray-700 h-[12rem] flex justify-center items-center'>
          <div className='bg-blue-500 h-[150px] w-[145px] px-1 py-1 rounded-full mt-4 text-black text-center flex justify-center items-center border-blue-400 border-4'>
            <Avatar src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png?f=webp&w=256" alt="profile-picture" className='w-full h-full' />
          </div>
        </div>
        <div className='bg-white md:w-[60%] w-[96%] h-auto mx-auto -mt-14 text-center z-10 p-4 pt-12 rounded-md shadow-xl flex flex-col md:gap-2 gap-1'>
          <p className='font-bold text-3xl'>{name && name}</p>
          <p className='flex gap-4 justify-center'><span>{email && email}</span> • <span>{userName && userName}</span></p>
          <p className='font-bold'>{bio && bio}</p>
          <p className='flex justify-center gap-2 items-center'><FaBirthdayCake /><span>Joined on </span><span>{createdAt && createdAt.slice(0, 10)}</span></p>
        </div>
      </header>
      <main className='md:p-8'>
        <div className='md:p-8 bg-white shadow-xl flex justify-center items-center rounded-lg'>
          <div className='grid md:grid-cols-2 grid-cols-1 md:p-4 p-2 md:w-10/12 md:gap-6 gap-2 w-full'>
            {blogs.map((blog) => {
              return <DashboardBlogCard refreshHandler={refreshHandler} key={blog._id} likes={blog.likes} tags={blog.tags} title={blog.title} content={blog.content} createdAt={blog.createdAt} authorName={blog.authorName} authorid={blog.authorid} id={blog._id} />
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

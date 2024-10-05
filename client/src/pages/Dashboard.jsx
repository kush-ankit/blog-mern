import { FaBirthdayCake, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import DashboardBlogCard from '../components/DashboardBlogCard';
import { useUserStore } from '../global/states';
import { Avatar } from '@material-tailwind/react';
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';


function Dashboard() {
  const name = useUserStore((state) => state.name);
  const email = useUserStore((state) => state.email);
  const userName = useUserStore((state) => state.userName);
  const bio = useUserStore((state) => state.bio);
  const createdAt = useUserStore((state) => state.createdAt);


  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get('http://localhost:4000/api/blog/all', { Headers: { 'Content-Type': 'application/json' } });
      if (response.data.status) {
        setBlogs(response.data.posts)
      } else throw new Error(response.data.message);
    }
    fetchData();
  }, []);

  return (
    <div className=''>
      <header className='h-[25rem] w-[calc(100vw-18px)] flex-col justify-center items-center'>
        <div className='w-full bg-green-400 h-[10rem] flex justify-center items-center z-10'>
          <div className='bg-blue-500 h-[150px] w-[145px] px-1 py-1 rounded-full mt-4 text-black text-center flex justify-center items-center z-20 border-blue-400 border-4'>
            <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className='w-full h-full' />
          </div>
        </div>
        <div className='bg-white w-[60%] h-auto mx-auto -mt-8 text-center z-10 p-4 pt-12 rounded-md shadow-xl flex flex-col gap-2'>
          <p className='font-bold text-3xl'>{name && name}</p>
          <p className='flex gap-4 justify-center'><span>{email && email}</span> • <span>{userName && userName}</span></p>
          <p className='font-bold'>{bio && bio}</p>
          <p className='flex justify-center gap-2 items-center'><FaBirthdayCake /><span>Joined on </span><span>{createdAt && createdAt.slice(0,10)}</span></p>
          <div className='flex justify-evenly font-medium text-2xl py-2'>
            <span><FaXTwitter /></span> <span><FaFacebook /></span> <span><FaInstagram /></span><span><FaGithub /></span>
          </div>
        </div>
      </header>
      <main className='p-8'>
        <div className='p-8 bg-white shadow-xl flex justify-center items-center rounded-lg'>
          <div className='grid grid-cols-2 p-4 w-10/12 gap-6 '>
            {blogs.map((blog) => {
              return <DashboardBlogCard key={blog._id} likes={blog.likes}  title={blog.title} content={blog.content} createdAt={blog.createdAt} AuthorName={blog.authorName} />
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

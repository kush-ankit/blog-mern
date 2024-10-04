import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/Blog';
import { useUserStore } from '../global/states';
import { Avatar } from '@material-tailwind/react';


function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  let likes=0;
  let posts=0;
  let comments=0;
  const username = useUserStore((state) => state.name);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        setBlogs(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className=''>
      <header className='h-[25rem] w-[calc(100vw-18px)] flex-col justify-center items-center'>
      <div className='w-full bg-black h-[10rem] flex justify-center items-center z-10'>
        <div className='bg-black h-[150px] w-[145px] px-1 py-1 rounded-full mt-4 text-black text-center flex justify-center items-center z-20 border-black border-4'>
        <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className='w-full h-full' />
        </div>
      </div>
        <div className='bg-slate-200 w-[40%] h-auto translate-x-[76%] -mt-4 text-center z-10 p-2 rounded-md '>
        <p className='mt-4 py-2 font-bold text-2xl'>{username}</p>
        <p className='p-2 font-bold'>bio- i am feeling good. </p>
        <p>date of joining - dd/mm/yyyy</p>
        <div className='flex justify-evenly p-2 font-medium mt-1 '>
          <span>{posts} posts</span> <span>{comments}commments</span> <span>{likes} likes</span>
        </div>
        </div>
      </header>
      <main>
        <div className='grid grid-cols-4 p-2 w-full gap-x-2 gap-y-4 '>
          {/* <h2>Your Blogs</h2>
          {blogs.map(blog => (
            <div key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.status}</p>
            </div>
          ))} */}
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

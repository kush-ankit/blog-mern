import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/Blog';

function Dashboard() {
  const [blogs, setBlogs] = useState([]);

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
      <header className='h-[80vh] w-[calc(100vw-18px)] flex-col justify-center items-center'>
      <div className='w-[full] bg-black h-[30%] flex justify-center items-center z-10'>
        <div className='bg-orange-300 h-[180px] w-[180px] px-1 py-1 rounded-full text-black text-center flex justify-center items-center z-20 border-black outline-[10px] outline'>
        user-image
        </div>
      </div>
        <div className='bg-slate-200 w-1/2 h-[35%] translate-x-[50%] text-center -mt-10 z-10 p-2 rounded-md '>
        <p className='mt-5 font-bold text-2xl'>UserName</p>
        <p className='p-2 font-bold'>bio- i am feeling good. </p>
        <p>date of joining - dd/mm/yyyy</p>
        <div className='flex justify-evenly p-2 '>
          <span>0 posts</span> <span>0 commments</span> <span>0 likes</span>
        </div>
        </div>
      </header>
      <main>
        <div className='grid p-4'>
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
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

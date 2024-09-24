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
    <div className='grid grid-flow-col p-4'>
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
  );
}

export default Dashboard;

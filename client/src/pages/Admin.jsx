import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
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

  const handleApprove = async (id) => {
    try {
      await axios.patch(`/api/blogs/approve/${id}`);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.patch(`/api/blogs/reject/${id}`, { adminComments: 'Rejected for review' });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <button onClick={() => handleApprove(blog._id)}>Approve</button>
          <button onClick={() => handleReject(blog._id)}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default Admin;

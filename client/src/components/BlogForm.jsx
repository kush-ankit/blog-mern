import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = ({ token }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/blogs', { title, content }, {
            headers: { Authorization: `Bearer ${token}` }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <textarea onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
            <button type="submit">Create Blog</button>
        </form>
    );
};

export default BlogForm;
import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-tailwind/react'
import { serverURI } from '../../config/config';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
function BloggerDetail() {

    const [blog, setBlog] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    const [queryParameters] = useSearchParams();


    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${serverURI}/api/blog/getOneBlog/67057278a3dc4858f75c8a90`)
                console.log(response);
                const data = response.data;
                if (data.status) {
                    setBlog(data.blog)
                    setLoading(false)
                } else {
                    setError(data.message)
                }
            } catch (error) {
                setError(error.message)
            }
        }
        fetchBlog();
    }, [])


    return (
        <main className="p-6 w-full bg-white rounded-lg ">
            <div className="flex items-center gap-2 text-xs ">
                <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" />
                <p className="flex flex-col items-start"><span className="text-sm">{blog?.authorName}</span><span className="">{blog?.createdAt.slice(0, 10)}</span></p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="text-5xl mt-2 text-left">
                    <p className='p-2 font-black'>{blog?.title}</p>
                </span>
                <p className="list-none flex gap-6 p-2 w-full font-semibold text-sm">
                    <li>#tech</li>
                    <li>#Gadgets</li>
                    <li>#news</li>
                    <li>#students</li>
                    <li>#react</li>
                </p>
                <p className='p-3 font-semibold text-2xl ' >sample subheading</p>
                <p className="text-left text-lg p-2">
                    {blog?.content}
                </p>
            </div>
        </main>
    )
}

export default BloggerDetail
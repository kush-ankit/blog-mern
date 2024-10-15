
import { useEffect, useState } from 'react';
import AdsSection from '../components/readBlogComponents/AdsSection';
import BloggerDetail from '../components/readBlogComponents/BloggerDetail';
import CommentSection from '../components/readBlogComponents/CommentSection';
import FollowSection from '../components/readBlogComponents/FollowSection';
import MorePosts from '../components/readBlogComponents/MorePosts';
import { serverURI } from '../config/config';
import axios from 'axios';
import Loader from '../components/Loader'
import { useSearchParams } from 'react-router-dom';

function ReadBlog() {

    const [Parameters] = useSearchParams();
    const [blog, setBlog] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    function handleScroll() {
        const element = document.getElementById('comment');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${serverURI}/api/blog/getOneBlog/${Parameters.get('id')}`);
                const data = response.data;
                console.log(data.blog)
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

    if (loading) { return (<div className='h-[100vh]'><Loader /></div>) }
    else {
        return (
            <div className='flex'>
                <div className='min-w-[70%] space-y-4 p-6'>
                    <BloggerDetail id={blog?._id} createdAt={blog?.createdAt} tags={blog?.tags} authorName={blog?.authorName} title={blog?.title} content={blog?.content} likes={blog.likes} />
                    <CommentSection blogid={blog?._id} />
                </div>
                <div className=' min-w-[30%] p-6'>
                    <FollowSection userid={blog?.authorid} />
                    <MorePosts />
                    <AdsSection />
                </div>
            </div>
        )
    }
}

export default ReadBlog;
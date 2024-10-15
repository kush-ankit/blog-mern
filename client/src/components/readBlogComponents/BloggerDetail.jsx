import { Avatar } from '@material-tailwind/react'
import { BiLike, BiShareAlt, BiSolidLike } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { serverURI } from '../../config/config';
import axios from 'axios';
import { useAppStateStore, useUserStore } from '../../global/states';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BloggerDetail({ id, tags, createdAt, authorName, title, content, likes }) {

    const login = useAppStateStore((state) => state.login);
    const userid = useUserStore((state) => state.id);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        function handleUserLoginStatusForLike() {
            if (login && likes.includes(userid)) {
                setIsLiked(true);
            } else {
                setIsLiked(false);
            }
        }
        handleUserLoginStatusForLike();
    }, []);

    async function handleShare() {
        await navigator.share({
            title: title,
            url: window.location
        });
    }

    async function handleLikeButton() {
        if (login) {
            try {
                if (!isLiked) {
                    let response = await axios.get(`${serverURI}/api/blog/likePost/${id}`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
                    if (response.data.status) {
                        setIsLiked(true);
                        toast.success(response.data.message, {
                            style: { color: "black" },
                            position: "bottom-right"
                        })
                    } else {
                        toast.error(response.data.message, {
                            style: { color: "black" },
                            position: "bottom-right"
                        })
                    }
                } else {
                    let response = await axios.get(`${serverURI}/api/blog/unlikeBlog/${id}`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
                    if (response.data.status) {
                        setIsLiked(false);
                        toast.warning(response.data.message, {
                            style: { color: "black" },
                            position: "bottom-right"
                        })

                    } else {
                        toast.error(response.data.message, {
                            style: { color: "black" },
                            position: "bottom-right"
                        })
                    }
                }
            } catch (error) {
                toast.error(error.message, {
                    style: { color: "black" },
                    position: "bottom-right"
                })
            }
        } else {
            toast.warning("You Are not Logged in. Please ensure your Login", {
                style: { color: "black" },
                position: "bottom-right"
            })
        }
    }

    return (
        <main className="p-12 w-full bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between gap-2 text-xs mb-6">
                <div className='flex left-0 space-x-1 '>
                    <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" />
                    <p className="flex flex-col items-start"><span className="text-sm">{authorName}</span><span>{createdAt.slice(0, 10)}</span></p>
                </div>
                <div className=" items-center flex gap-4">
                    <button className='outline-none flex gap-2 items-center' onClick={handleLikeButton}>{isLiked ? <BiSolidLike size={25} color='red' /> : <BiLike size={25} />}</button>
                    <button className='outline-none' onClick={handleShare}><BiShareAlt size={25} /> </button>
                </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2 w-full">
                <h1 className="text-5xl mt-2 text-left">
                    <p className='p-2 font-black'>{title}</p>
                </h1>
                <p className="list-none flex gap-6 p-2 w-full font-semibold text-sm">
                    {tags.map((tag, index) => {
                        let code = Math.floor(Math.random() * 16777215).toString(16);
                        return <li key={index} ><span style={{ color: `#${code}` }}>#</span>{tag}</li>
                    })}
                </p>
                <p id='abc' dangerouslySetInnerHTML={{ __html: content }} className="text-left p-2">
                </p>
            </div>
            <ToastContainer />
        </main>
    )
}

export default BloggerDetail
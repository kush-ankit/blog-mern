import { Avatar } from "@material-tailwind/react";
import { BiLike, BiShareAlt, BiSolidLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { useEffect, useState } from "react";
import { serverURI } from "../config/config";
import axios from "axios";
import { useAppStateStore, useUserStore } from "../global/states";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';



function HomeBlogCard({ id, authorid, authorName, createdAt, likes, title, content, tags }) {

    const login = useAppStateStore((state) => state.login);
    const userid = useUserStore((state) => state.id);
    const [likeCount, setLikeCount] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {

        if (likes.includes(userid)) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [userid])


    async function handleLikeButton() {
        if (login) {
            try {
                if (!isLiked) {
                    let response = await axios.get(`${serverURI}/api/blog/likePost/${id}`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
                    if (response.data.status) {
                        setIsLiked(true);
                        setLikeCount(response.data.post.likes);
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
                        setLikeCount(response.data.blog.likes);
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

    async function handleShare() {
        await navigator.share({
            title: title,
            url: `${window.location.origin}/#/readblog?id=${id}`
        });
    }


    return (
        <div className="bg-white rounded-lg border border-neutral-500 p-6 flex flex-col gap-3 shadow-md">
            <header className="flex items-center gap-2 text-xs">
                <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" />
                <p className="flex flex-col items-start"><span className="text-sm">{authorName}</span><span className="">{createdAt.slice(0, 10)}</span></p>
            </header>
            <main className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-left">
                    <Link to={`/readblog?id=${id}`} className="hover:text-blue-800">{title}</Link>
                </h2>
                <p className="list-none flex gap-6 w-full text-sm">
                    {tags.map((tag, index) => {
                        let code = Math.floor(Math.random() * 16777215).toString(16);
                        return <li key={index} ><span style={{ color: `#${code}` }}>#</span>{tag}</li>
                    })}
                </p>
            </main>
            <hr />
            <footer className="flex justify-between">
                <span className="flex justify-center items-center"><button onClick={handleLikeButton} className="flex">{isLiked ? <BiSolidLike size={20} className="text-red-500" /> : <BiLike size={20} />} </button> <p className=" pl-2 pr-1">{likeCount.length}</p><p>likes</p> </span>
                <HashLink to={`/readblog?id=${id}#comment`} smooth className="flex gap-2 items-center"><GoComment size={20} /><p>comment</p></HashLink>
                <span className="flex justify-center items-center"><button onClick={handleShare} className="flex pr-2 gap-2 items-center"><BiShareAlt size={20} /><p>share</p> </button> </span>
            </footer>
        </div>
    );
};

export default HomeBlogCard;

import { Avatar } from "@material-tailwind/react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import LimitedDisplay from "./LimitedDisplay";
import { useEffect, useState } from "react";
import { serverURI } from "../config/config";
import axios from "axios";
import { useUserStore } from "../global/states";


function HomeBlogCard({ id, authorid, authorName, createdAt, likes, title, content }) {

    const userid = useUserStore((state) => state.id)
    const [likeCount, setLikeCount] = useState(likes)
    const [isLiked, setIsLiked] = useState(false)

    console.log(likes)
    useEffect(() => {
        if (likes.includes(userid)) {
            console.log(isLiked)
            setIsLiked(true);
        }
    }, [])


    async function handleLikeButton() {
        try {
            let response = await axios.get(`${serverURI}/api/blog/likePost/${id}`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
            console.log(response);
            if (response.data.status) {
                console.log(isLiked);
                setIsLiked(true);
                setLikeCount(response.data.post.likes);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className="bg-white  rounded-lg border border-black p-6 flex flex-col gap-3 shadow-md">
            <header className="flex items-center gap-2 text-xs">
                <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" />
                <p className="flex flex-col items-start"><span className="text-sm">{authorName}</span><span className="">{createdAt.slice(0, 10)}</span></p>
            </header>
            <main className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-left">
                    <a href="##" className="hover:text-blue-800">{title}</a>
                </h2>
                <p className="list-none flex gap-6 w-full text-sm">
                    <li>#tech</li>
                    <li>#Gadgets</li>
                    <li>#news</li>
                    <li>#students</li>
                    <li>#react</li>
                </p>
                <p className="text-left ">
                    <LimitedDisplay text={content} />
                    <a href="##" className="hover:text-blue-700 font-semibold"> Read more...</a>
                </p>
            </main>
            <hr />
            <footer className="flex justify-between">
                <span className="flex justify-center items-center"><button onClick={handleLikeButton} className="flex">{isLiked ? <BiSolidLike size={20} className="text-red-500" /> : <BiLike size={20} />} </button> <p className=" pl-2 pr-1">{likeCount.length}</p><p>likes</p> </span>
                <span className="flex justify-center items-center"><button className="flex pr-2"><FaRegComment size={20} /> </button><p>comment</p> </span>
                <span className="flex justify-center items-center"><button className="flex pr-2"><RiShareForwardLine size={20} /> </button><p>share</p> </span>
            </footer>
        </div>
    );
};

export default HomeBlogCard;

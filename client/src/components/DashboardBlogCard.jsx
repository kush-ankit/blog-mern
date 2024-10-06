import { Avatar } from "@material-tailwind/react";
import LimitedDisplay from "./LimitedDisplay";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { serverURI } from "../config/config";


function DashboardBlogCard({ id, refreshHandler, authorid, authorName, createdAt, likes, title, content }) {

    async function handleDeleteButton() {
        await axios.delete(`${serverURI}/api/blog/delete/${id}`, { withCredentials: true })
            .then((response) => {
                if (response.data.status) {
                    refreshHandler()
                }
            });
    };

    return (
        <div className="bg-white rounded-lg border border-black p-4 flex flex-col justify-between gap-2 shadow-xl">
            <header className="flex items-center justify-between gap-2 text-xs">
                <div className="flex gap-2">
                    <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" />
                    <p className="flex flex-col items-start"><span className="text-sm">{authorName}</span><span className="">{createdAt.slice(0, 10)}</span></p>
                </div>
                <div className="flex gap-4">
                    <Link to={`/createpost?state=edit&id=${id}`}><FaEdit className="cursor-pointer hover:text-blue-700" size={20} /></Link>
                    <button onClick={handleDeleteButton}><MdDelete className="cursor-pointer hover:text-red-700" size={20} /></button>
                </div>
            </header>
            <main className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-left">
                    <a href="##" className="hover:text-blue-800">{title}</a>
                </h2>
                <p className="list-none flex gap-6 w-full">
                    <li>#tech</li>
                    <li>#Gadgets</li>
                    <li>#news</li>
                    <li>#students</li>
                    <li>#react</li>
                </p>
                <p className="text-left">
                    <LimitedDisplay text={content} limit={100} /> <a href="##" className="hover:text-blue-800"> Read more...</a>
                </p>
            </main>
            <footer className="flex justify-between text-center items-end">
                <div className="flex text-center items-center text-sm h-full">
                    <p><LimitedDisplay text={createdAt} limit={10} /> </p>
                </div>
                <div className="flex gap-2 text-sm">
                    <span className="flex justify-end items-center">{likes.length} likes</span>
                    <span>•</span>
                    <span className="flex justify-end items-center">{0} comments</span>
                </div>
            </footer>
        </div>
    );
};

export default DashboardBlogCard;
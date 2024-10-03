import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";


function BlogCard({ likes, title, content }) {
    return (
        <div className="bg-white  rounded-lg border border-black p-8 flex flex-col gap-4">
            <header className="flex justify-between items-center">
                <p>Ankit Kushwaha</p>
            </header>
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="blog image" />
            </div>
            <main className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-left">
                    {title}
                </h2>
                <p className="list-none flex gap-6 w-full">
                    <li>#tech</li>
                    <li>#Gadgets</li>
                    <li>#news</li>
                    <li>#students</li>
                    <li>#react</li>
                </p>
                <p className="text-left">
                    {content}
                </p>
            </main>
            <hr />
            <footer className="flex justify-between">
                <span className="flex justify-center items-center"><button className="flex"><BiLike size={25} /> </button> <p className="text-lg pl-2 pr-1">{likes}</p><p>likes</p> </span>
                <span className="flex justify-center items-center"><button className="flex pr-2"><FaRegComment size={25} /> </button><p>comments</p> </span>
                <span className="flex justify-center items-center"><button className="flex pr-2"><RiShareForwardLine size={25} /> </button><p>comments</p> </span>

            </footer>
        </div>
    );
};

export default BlogCard;

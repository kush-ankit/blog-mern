import LimitedDisplay from "./LimitedDisplay";

function DashboardBlogCard({likes, comment, title, content, createdAt, AuthorName}) {

    return (
        <div className="bg-white rounded-lg border border-black p-6 flex flex-col justify-between gap-2 shadow-xl">
            <header className="flex justify-between items-center">
                <p>{AuthorName}</p>
            </header>

            <main className="flex flex-col gap-2">
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
                <LimitedDisplay text={content} limit={100} /> <a href="##">Read more...</a>
                </p>
            </main>
            <footer className="flex justify-between text-center items-end">
                <div className="flex text-center items-center text-sm h-full">
                    <p><LimitedDisplay text={createdAt} limit={10} /> </p>
                </div>
                <div className="flex gap-2 text-sm">
                    <span className="flex justify-end items-center">{likes} likes</span>
                    <span>•</span>
                    <span className="flex justify-end items-center">{0} comments</span>
                </div>
            </footer>
        </div>
    );
};

export default DashboardBlogCard;
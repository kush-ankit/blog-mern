const BlogCard = () => {
    return (
        <div className="bg-white mx-auto rounded-lg border border-black p-8 flex flex-col gap-4">
            <header className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-yellow-900">DEV Community</h1>
                <div className="rounded-full bg-yellow-600 p-2 flex items-center justify-center">DEV</div>
            </header>
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="blog image" />
            </div>
            <main className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-left">
                    Need to stay up-to-date with the most relevant trends in software, such as AI, cloud computing, and all things frontend?
                </h2>
                <p className="text-left">
                    You can do so much more once you create your account. Follow the devs and topics you care about, and keep up-to-date.
                </p>
            </main>
            <footer className="flex justify-between">
                <button>like</button>
                <button>comment</button>
                <button>share</button>
            </footer>
        </div>
    );
};

export default BlogCard;

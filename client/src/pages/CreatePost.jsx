import axios from "axios";
import { serverURI } from "../config/config";
import { useEffect, useState } from "react";


function CreatePost() {

    const [isDraft, setIsDraft] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    useEffect(() => {
        const title = window.localStorage.getItem("title");
        const content = window.localStorage.getItem("content");
        if (title && content) {
            setIsDraft(true);
            setTitle(JSON.parse(title));
            setContent(JSON.parse(content));
        }
    }, [])



    function handlePublish() {
        axios.post(`${serverURI}/api/blog/create`, { title, content }, { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
            .then((response) => {
                if (response.data.status) {
                    if (isDraft) {
                        window.localStorage.removeItem('title');
                        window.localStorage.removeItem('content');
                        setIsDraft(false);
                    }
                    setTitle("");
                    setContent("");
                    alert("Post published successfully!");
                } else {
                    alert("Failed to publish the post.");
                }
            })
            .catch((error) => {
                console.error("Error publishing the post:", error);
                alert("Failed to publish the post.");
            });

    }

    async function handleSaveDraft() {
        try {
            await window.localStorage.setItem("title", JSON.stringify(title));
            await window.localStorage.setItem("content", JSON.stringify(content));
            setIsDraft(true);
            alert("Draft saved successfully!");
        } catch (e) {
            console.error("Failed to save draft:", e);
            alert("Failed to save draft.");
        }
    }

    function handleReset() {
        window.localStorage.removeItem('title');
        window.localStorage.removeItem('content');
        setIsDraft(false);
        setTitle("");
        setContent("");
    }


    return (
        <div className="h-[80vh]">
            <main className='flex justify-around p-8 h-full'>
                <div className='flex flex-col ju gap-4 w-1/2 bg-white p-6 rounded-md shadow-xl'>
                    <div className="">
                        <input type="text" id="large-input" value={title} className="block w-full p-4 text-gray-900 border border-gray-500 rounded-lg bg-white text-4xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-500" placeholder="Title goes here..." onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="w-full text-black">
                        <textarea id="content" rows="10" value={content} className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Write your content here..." onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <div className="flex gap-4">
                        <button type="button" onClick={handlePublish} className="text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-500">Publish</button>
                        <button type="button" onClick={handleSaveDraft} className="text-green-500 hover:text-white border border-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">{isDraft ? "Drafted data" : "Save Draft"}</button>
                        <button type="button" onClick={handleReset} className="text-red-500 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Reset</button>
                    </div>
                </div>
                <div className="w-2/6 grid place-content-center">
                    <p>
                        Writing a Great Post Title
                        <li>Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                        <li>Use keywords where appropriate to help ensure people can find your post by search.</li>
                    </p>
                </div>
            </main>

        </div>
    )
}

export default CreatePost;
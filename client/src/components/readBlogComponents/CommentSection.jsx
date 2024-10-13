import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-tailwind/react'
import axios from 'axios';
import { serverURI } from '../../config/config';

function CommentSection({ blogid }) {

    //This is to store comment wirtten by user
    const [content, setContent] = useState("");
    //This is to store all comments from server on this blog
    const [comments, setComments] = useState([]);


    useEffect(() => {
        //Here you would make an API call to server to get all comments from blog
        const fetchAllComments = async () => {
            try {
                const response = await axios.get(`${serverURI}/api/comment/getAllComments/${blogid}`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
                if (response.data.status) {
                    setComments(response.data.comments);
                } else {
                    console.log("Failed to load comments");
                }
            } catch (e) {
                console.log(e)
                alert("Failed to load comments try")
            }
        }
        fetchAllComments();
    }, [])

    //This function is called when user submits a comment
    const handleSubmit = async () => {
        if (content.trim() === "") {
            alert("Comment should not be empty");
            return;
        }
        //Here you would make an API call to server to add comment to blog
        try {
            const response = await axios.post(`${serverURI}/api/comment/addComment/${blogid}`, { content }, { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
            console.log(response.data);

            if (response.data.status) {
                //Add new comment to comments array
                setComments([...comments, response.data.comment]);
                setContent("");
            } else {
                alert("Failed to add comment else")
            }
        } catch (e) {
            console.log(e)
            alert("Failed to add comment try")
        }
    }

    return (
        <section className='grid grid-row-2 gap-y-5 bg-white rounded-md shadow-lg' >
            <div className='rounded-md flex flex-col gap-y-5 px-8 py-4'>
                <p className='p-2 font-black text-2xl'>Blog Comments</p>
                <hr />
                <div className='p-3 flex gap-4 items-center'>
                    <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" />
                    <textarea name="commments" value={content} placeholder="Add Your Comment" className='w-full p-2 border-gray-400 outline-gray-600 h-28 overflow-hidden text-lg font-medium border shadow-md rounded-sm' onChange={e => setContent(e.target.value)} ></textarea>
                </div>
                <div className='px-4 p-2 flex justify-end'>
                    <button type="button" onClick={handleSubmit} className=' h-10 px-4 text-white rounded-md bg-blue-500 hover:bg-blue-400 border hover:shadow-lg '>SUBMIT</button>
                </div>
                <hr />
            {
                comments.map((comment, index) => {
                    return (
                        <div key={index} className='rounded-md flex px-12' >
                            <span className='p-3 text-center ' ><Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" /> <p className='p-2 font-light ' >{comment?.authorName}</p> </span>
                            <p className='p-3 text-start ' >{comment?.content}</p>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}

export default CommentSection;
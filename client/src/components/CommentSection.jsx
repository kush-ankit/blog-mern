import React from 'react'
import { Avatar } from '@material-tailwind/react'

function CommentSection() {
  return (
    <section className='grid grid-row-2 gap-y-5 ' >
                <div className='rounded-md gap-y-5 bg-white '>
                <p className='p-3 font-black text-2xl '>Top Comments(2) </p>
                <div className='p-3 flex gap-2 items-center'>
                <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" />
                <textarea name="commments" placeholder="Add Your Comment" className='w-full p-2 border-black outline-indigo-200 h-28 overflow-hidden text-lg font-medium border shadow-md ' ></textarea>
                </div>
                <div className='pl-4 p-2'>
                <button type="button" className=' h-10 px-4 bg-[#9370DB] hover:bg-[#6a5acd] border hover:shadow-lg '>SUBMIT</button>
                </div>
                </div>
                <div className='bg-white rounded-md flex' >
                    <span className='p-3 text-center ' ><Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" /> <p className='p-2 font-light ' >Authorname</p> </span>
                    <p className='p-3 text-start ' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima delectus odio odit, nam facilis aperiam omnis libero quos perspiciatis!</p>
                </div>
                <div className='bg-white rounded-md flex' >
                    <span className='p-3 text-center ' ><Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" /> <p className='p-2 font-light ' >Authorname</p> </span>
                    <p className='p-3 text-start ' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima delectus odio odit, nam facilis aperiam omnis libero quos perspiciatis!</p>
                </div>
                <div className='bg-white rounded-md flex' >
                    <span className='p-3 text-center ' ><Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" /> <p className='p-2 font-light ' >Authorname</p> </span>
                    <p className='p-3 text-start ' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima delectus odio odit, nam facilis aperiam omnis libero quos perspiciatis!</p>
                </div>
                <div className='bg-white rounded-md flex' >
                    <span className='p-3 text-center ' ><Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-8 h-8" /> <p className='p-2 font-light ' >Authorname</p> </span>
                    <p className='p-3 text-start ' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima delectus odio odit, nam facilis aperiam omnis libero quos perspiciatis!</p>
                </div>
            </section>
  )
}

export default CommentSection
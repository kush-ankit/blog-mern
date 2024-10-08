
import BloggerDetail from '../components/BloggerDetail';
import CommentSection from '../components/CommentSection';
import FollowSection from '../components/FollowSection';

function ReadBlog() {
return (
    <>
        <div className='bg-gray-200 w-screen flex justify-center'>
        <div className='bg-gray-200 flex justify-around gap-2 w-[90%]'>
        <div className='max-w-[65%] p-6 flex flex-col gap-y-4'>
            <BloggerDetail />
            <CommentSection />
        </div>
        <div className='bg-gray-200 min-w-[30%] p-6'>
            <FollowSection />
               
        <div className='bg-white mt-5 border-black rounded-xl'>
        <p className='text-lg p-2 font-semibold '>more posts from author  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla beatae tempora officia sit quo aliquam ullam minima cumque officiis est. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, exercitationem fugit iure porro odit harum ducimus cumque quia temporibus repudiandae delectus. Nesciunt possimus illo enim repudiandae, asperiores consequatur nulla veritatis. </p>
        </div>
        <div className='border-black rounded-lg mt-5 bg-white font-medium w-full h-1/4 text-center'>
        <p className='p-2 '>from our blog</p>
        <p>space for extra use e.g, new blogs recommendations </p>
        </div>


        </div>
        </div>
        </div>
    </>
)
}

export default ReadBlog
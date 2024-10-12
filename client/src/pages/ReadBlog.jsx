
import AdsSection from '../components/readBlogComponents/AdsSection';
import BloggerDetail from '../components/readBlogComponents/BloggerDetail';
import CommentSection from '../components/readBlogComponents/CommentSection';
import FollowSection from '../components/readBlogComponents/FollowSection';
import MorePosts from '../components/readBlogComponents/MorePosts';

function ReadBlog() {
    return (
        <div className='flex'>
            <div className='min-w-[70%] space-y-4 p-6'>
                <BloggerDetail />
                <CommentSection />
            </div>
            <div className=' min-w-[30%] p-6'>
                <FollowSection />
                <MorePosts />
                <AdsSection />
            </div>
        </div>
    )
}

export default ReadBlog
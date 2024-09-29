
function CreatePost() {
  return (
    <div className="h-[100vh] w-[calc(100vw-1rem)]">
        <nav className='flex p-2 justify-between items-center'>
        <div className='w-1/2 flex gap-8 items-center p-2'>
        <h1 className="text-4xl font-bold text-gray-800">Blog App</h1>
        <p className='font-bold text-lg mt-[7px]'>Create Post</p>
        </div>
        <div className='px-2 py-4 flex gap-5 items-center text-center'>
        <button className="hover:bg-indigo-100 hover:text-violet-800 p-1">
            edit
        </button>
        <button className="hover:bg-indigo-100 hover:text-violet-800 p-1">
            preview
        </button>
        </div>
        </nav>
        {/* blog post title */}
        <main className='bg-blue-200 flex justify-around p-3 h-3/4'>
            <div className='grid justify-center items-center w-1/2 bg-white p-1'>
            <div>
            <button className="p-2 outline-2 border pl-1">add cover image</button>
            </div>
            <input type="text" placeholder="Enter title of your post..." className='w-full p-2 text-4xl font-extrabold rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder:font-extrabold placeholder:text-4xl' />
            <div>
                ?add upto 4 tags?
            </div>
            <div>
                ?add font styles?
            </div>
            <input type="text" placeholder="Write your post content here..." className="w-full h-32 border rounded-md"/>
            </div>
            <div className="w-2/6">
                <footer>
                Writing a Great Post Title
                <li>Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                <li>Use keywords where appropriate to help ensure people can find your post by search.</li>
                </footer>
            </div>
        </main>
        {/*publish section */ }
        <div className="flex justify-start gap-4 px-5 py-5">
            <button className="bg-[#5fa5d7] p-2">Publish</button>
            <button className="hover:bg-indigo-100 hover:text-violet-800 p-2">Save draft</button>
            <button className="hover:bg-indigo-100 hover:text-violet-800 p-2">Settings</button>
            <button className="hover:bg-indigo-100 hover:text-violet-800 p-2">Revert New Change</button>
        </div>

    </div>
  )
}

export default CreatePost;
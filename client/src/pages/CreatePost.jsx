
function CreatePost() {
  return (
    <div>
        <nav className='flex p-2 justify-between items-center'>
        <div className='w-1/2 flex gap-8 items-center p-2'>
        <h1 className="text-4xl font-bold text-gray-800">Blog App</h1>
        <p className='font-bold text-lg mt-[7px]'>Create Post</p>
        </div>
        <div className='px-2 py-4 flex gap-5 items-center text-center'>
        <button>
            edit
        </button>
        <button>
            preview
        </button>
        </div>
        </nav>
        {/* blog post title */}
        <main className='bg-red-500 flex justify-center items-center gap-7'>
            <div className='justify-center'>
            <button>add cover image</button>
            <input type="text" placeholder="Enter title of your post" className='w-full px-5 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500' />
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, asperiores!
                <li>lp</li>
                <li>lp</li>
                <li>lp</li>
                <li>lp</li>
            </div>
        </main>

    </div>
  )
}

export default CreatePost;
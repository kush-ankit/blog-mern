import React from 'react'

function Daily_Topics() {
  return (
    <div className='flex justify-center p-4'>
        <section className='w-full rounded-xl shadow-lg ' >
            <div className='text-center font-bold text-2xl ' >
                <p>Daily Topics</p>
            </div>
            <div className='flex flex-col justify-start items-start text-start p-4 ' >
                <span className='hover:bg-blue-200 w-full rounded-md hover:p-2 ' >Movies</span>
                <span className='hover:bg-blue-200 w-full rounded-md hover:p-2'>Games</span>
                <span className='hover:bg-blue-200 w-full rounded-md hover:p-2'>Science</span>
                <span className='hover:bg-blue-200 w-full rounded-md hover:p-2'>Fiction</span>
                <span className='hover:bg-blue-200 w-full rounded-md hover:p-2'>News</span>
                <span className='hover:bg-blue-200 w-full rounded-md hover:p-2'>Comedy</span>
                <span className='hover:bg-blue-200 w-full rounded-md hover:p-2'>Music</span>
            </div>
        </section>
    </div>
  )
}

export default Daily_Topics
import React from 'react'
import './Discuss_Card.css'

function Discuss_Card() {
  return (
    <section className="border border-black rounded-md bg-white ">
        <header className="text-left p-4 ">
        <p className='text-2xl font-bold '>#Discuss</p>
        <p className='text-start font-thin text-sm '>Discussion threads targetting the whole community</p>
        </header>
        <main className='flex flex-col space-y-2 text-start ' >
            <span className='p-2 border outline-1 hover:shadow-md hover:p-3 hover:cursor-pointer new '>
                <p className='p-2' >Lorem ipsum dolor sit amet consectetur adipis</p>
            </span>
            <span className='p-2 border outline-1 hover:shadow-md hover:p-3 hover:cursor-pointer '>
                <p className='p-2 '>Lorem ipsum dolor sit amet consectetur adipis</p>
            </span>
            <span className='p-2 border outline-1 hover:shadow-md hover:p-3 hover:cursor-pointer new '>
                <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipis</p>
            </span>
            <span className='p-2 border outline-1 hover:shadow-md hover:p-3 hover:cursor-pointer '>
                <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipis</p>
            </span>
            <span className='p-2 border outline-1 hover:shadow-md hover:p-3 hover:cursor-pointer '>
                <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipis</p>
            </span>
        </main>
    </section>
  )
}

export default Discuss_Card
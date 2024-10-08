import React from 'react'
import { UserCircle } from 'lucide-react';
import { Avatar } from '@material-tailwind/react';

function FollowSection() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="bg-indigo-900 p-6 h-14"></div>
        <div className="px-6 py-4">
        <div className="flex items-center mb-4">
        <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-16 h-16 text-gray-300 -mt-12 mr-4" />
        <h2 className="text-2xl font-bold text-gray-800">Bobby Iliev</h2>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Follow
        </button>
        <p className="text-gray-700 text-base mt-4">
        I am a professional DevOps Engineer with a demonstrated history of working in the internet industry. I am an avid Linux lover and supporter of the open-source movement philosophy.
        </p>
        <div className="mt-4">
        <p className="text-gray-600 text-sm">
            <strong>LOCATION</strong>
        </p>
        <p className="text-gray-800">Sofia, Bulgaria</p>
        </div>
        <div className="mt-4">
        <p className="text-gray-600 text-sm">
            <strong>WORK</strong>
        </p>
        <p className="text-gray-800">DevEx @ Materialize | Community Manager @ DigitalOcean | Co-Founder @ DevDojo | Docker Captain</p>
        </div>
        <div className="mt-4">
        <p className="text-gray-600 text-sm">
            <strong>JOINED</strong>
        </p>
        <p className="text-gray-800">Jul 7, 2019</p>
        </div>
        </div>
        </div>
  )
}

export default FollowSection
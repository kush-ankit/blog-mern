import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-tailwind/react';
import axios from 'axios';
import { serverURI } from '../../config/config';
import Loader from '../Loader'

function FollowSection({ userid }) {

    const [user, setUser] = useState();
    const [following, setFollowing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${serverURI}/api/user/authorDetails/${userid}`);
                console.log(response, userid);
                if (response.data.status) {
                    setUser(response.data.author);
                    setLoading(false);
                } else throw new Error(response.data.message);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchUser();
    }, []);

    return (
        <div className="hidden md:block max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            {loading ? <div className='min-h-[30rem] grid place-content-center'><Loader /></div> :
                <>
                    <div className="bg-indigo-900 p-6 h-14"></div>
                    <div className="px-6 py-4">
                        <div className="flex items-center mb-4">
                            <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" className="w-16 h-16 text-gray-300 -mt-12 mr-4" />
                            <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
                        </div>
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Follow
                        </button>
                        <p className="text-gray-700 text-base mt-4">
                            {user?.bio}
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
                            <p className="text-gray-800">{user?.createdAt.slice(0, 10)}</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default FollowSection;
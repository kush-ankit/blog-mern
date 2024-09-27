// import { useState, useEffect } from 'react';
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import CreateAccountCard from '../components/CreateAccountCard';
import { LoginCard } from '../components/LoginCard';

function Auth() {

    const [queryParameters] = useSearchParams()
    // const [user, setUser] = useState([]);
    // const [profile, setProfile] = useState(null);

    // const login = useGoogleLogin({
    //     onSuccess: (codeResponse) => { setUser(codeResponse); window.localStorage.setItem('user', JSON.stringify(codeResponse)) },
    //     onError: (error) => console.log('Login Failed:', error)
    // });

    // console.log(user, profile);


    // useEffect(
    //     () => {
    //         if (user) {
    //             axios
    //                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    //                     headers: {
    //                         Authorization: `Bearer ${user.access_token}`,
    //                         Accept: 'application/json'
    //                     }
    //                 })
    //                 .then((res) => {
    //                     setProfile(res.data);
    //                 })
    //                 .catch((err) => console.log(err));
    //         }
    //     },
    //     [user]
    // );

    // // log out function to log the user out of google and set the profile array to null
    // const logOut = () => {
    //     googleLogout();
    //     setProfile(null);
    // };

    // return (
    //     <div className='grid place-items-center w-full h-[100vh]'>
    //         <div>{queryParameters.get('state')}</div>

    //     </div>
    // );
    
    if (queryParameters.get('state') === "create-account") {
        return (
            < div className='grid place-items-center w-full h-[100vh]' >
                <CreateAccountCard />
            </div>
        )
    } else if (queryParameters.get('state') === "login") {
        return (
            < div className='grid place-items-center w-full h-[100vh]' >
                <LoginCard />
            </div>
        )
    }
}
export default Auth;


import { useSearchParams } from 'react-router-dom';
import CreateAccountCard from '../components/CreateAccountCard';
import { LoginCard } from '../components/LoginCard';

function Auth() {

    const [queryParameters] = useSearchParams();

    if (queryParameters.get('state') === "create-account") {
        return (
            < div className='grid md:place-items-center w-full py-4 md:h-[100vh] '>
                <CreateAccountCard />
            </div>
        )
    } else if (queryParameters.get('state') === "login") {
        return (
            <div className='grid md:place-items-center w-full py-4 md:h-[100vh] h-[80vh] '>
                <LoginCard />
            </div>
        )
    }
}
export default Auth;


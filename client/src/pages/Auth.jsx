import { useSearchParams } from 'react-router-dom';
import CreateAccountCard from '../components/CreateAccountCard';
import { LoginCard } from '../components/LoginCard';

function Auth() {

    const [queryParameters] = useSearchParams();

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


import { Link } from "react-router-dom";

function Left_Box() {
  return (
    <div className="w-[70%] rounded-md shadow-lg flex flex-col items-center ml-auto bg-white p-4 gap-4 sticky top-20 ">
      <h2 className="text-lg font-bold text-left">Our Community is a community of 2,097,187 amazing people</h2>
      <p className="text-left">We&apos;re a place where coders share, stay up-to-date and grow their careers.</p>
      <Link to='/auth?state=login' className="rounded-md w-full border border-black py-2 hover:bg-blue-500 hover:text-white">Login</Link>
      <Link to='/auth?state=create-account' className="rounded-md w-full border border-black py-2 bg-green-500 text-white">Create account</Link>
    </div>
  )
}

export default Left_Box;
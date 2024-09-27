
function Left_Box() {
  return (
          <div className="w-[70%] rounded-md border-black border flex flex-col justify-center items-center ml-auto bg-white p-3 gap-4">
            <h2 className="text-lg font-bold text-left">Our Community is a community of 2,097,187 amazing people</h2>
            <p className="text-left">We&apos;re a place where coders share, stay up-to-date and grow their careers.</p>
            <button className="rounded-md w-full border border-black py-2 hover:bg-blue-500 hover:text-white">Login</button>
            <button className="rounded-md w-full border border-black py-2 hover:bg-green-500 hover:text-white">Create account</button>
          </div>
  )
}

export default Left_Box;
import { Link } from "react-router-dom";
function Right_Box() {
  return (
          <div className="shadow-lg py-4 px-8 rounded-md bg-white w-fit flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-left">Popular Topics</h2>
            <hr />
            <ul className="list-disc list-inside text-left">
              <li>AI</li>
              <li>Cloud Computing</li>
              <li>Frontend Development</li>
              <li>Web Development</li>
              <li>Python</li>
            </ul>
            <h2 className="text-2xl font-bold text-left">About Us</h2>
            <p className="text-left">We are a blog platform that focuses on sharing knowledge and resources for developers.</p>
            <Link to="/about" className="text-blue-500 hover:text-blue-600">Learn More</Link>
          </div>
  )
}

export default Right_Box;
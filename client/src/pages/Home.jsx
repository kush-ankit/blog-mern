import { useEffect, useState } from "react";
import Left_Box from "../components/Left_Box";
import Right_Box from "../components/Right_Box";
import axios from "axios";
import { serverURI } from "../config/config";
import HomeBlogCard from "../components/Blog";
import Loader from "../components/Loader";
import { useAppStateStore } from "../global/states";

function Home() {

  const login = useAppStateStore((state) => state.login)
  const ready = useAppStateStore((state) => state.ready)

  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverURI}/api/blog/all`)
        const { status, posts } = await response.data;
        if (status) {
          setBlogs(posts);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message)
      }
    };
    fetchData();
  }, [ready]);


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-row justify-center text-center p-4">
        <section className="w-[25%]">
          {login ? <div>Logged in</div> : <Left_Box />}
        </section>
        <section className="w-[50%] px-6 flex flex-col gap-6">
          {loading ? <div className="h-[100vh]"><Loader /></div> : blogs.map((blog) => {
            return <HomeBlogCard id={blog._id} key={blog._id} tags={blog.tags} authorid={blog.authorid} authorName={blog.authorName} createdAt={blog.createdAt} likes={blog.likes} title={blog.title} content={blog.content} />
          })}
        </section>
        <section className="w-[25%]">
          <Right_Box />
        </section>
      </main>
    </div>
  );
};

export default Home;

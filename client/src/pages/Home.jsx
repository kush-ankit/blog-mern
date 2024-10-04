import { useEffect, useState } from "react";
import Left_Box from "../components/Left_Box";
import Right_Box from "../components/Right_Box";
import axios from "axios";
import { serverURI } from "../config/config";
import HomeBlogCard from "../components/Blog";

function Home() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverURI}/api/blog/all`)
        const { status, posts } = await response.data;
        if (status) {
          setBlogs(posts)
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-row justify-center text-center p-4">
        <section className="w-[25%]">
          <Left_Box />
        </section>
        <section className="w-[50%] px-6 flex flex-col gap-6">
          {blogs.map((blog) => {
            return <HomeBlogCard key={blog._id} likes={blog.likes} title={blog.title} content={blog.content} AuthorName={blog.authorName} />
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

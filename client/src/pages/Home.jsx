import BlogCard from "../components/Blog";
import NavBar from "../components/NavBar";
import Left_Box from "../components/Left_Box";
import Right_Box from "../components/Right_Box";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md w-full p-6">
        <NavBar />
      </header>
      <main className="flex-grow flex flex-row justify-center text-center p-4">
      <section className="w-[25%]">
          <Left_Box />
      </section>
        <section className="w-[50%] px-6 flex flex-col gap-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
        <section className="w-[25%]">
        <Right_Box />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

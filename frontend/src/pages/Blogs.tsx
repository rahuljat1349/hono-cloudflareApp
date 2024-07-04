import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <>
    <AppBar/>
      <div className="flex flex-col  items-center">
        <div className="max-w-3xl">

        <BlogCard
          authorName="Rahul dudi"
          title="How an ugly single page looks like.."
          content="this is my first blog"
          publishedDate="2 feb 2024"
          />
       
        
          </div>
      </div>
    </>
  );
};

export default Blogs;

import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks/useBlog";

const Blogs = () => {
  const { blogs, loading } = useBlogs();
  return (
    <>
      <AppBar />
      <div className="flex flex-col items-center">
        {loading ? (
          "loading..."
        ) : (
          <div>
            {blogs?.map((blog) => (
              <BlogCard
                key={blog.id}
                authorName={`${blog.author.name || "Anonymous"}`}
                title={blog.title}
                content={blog.content}
                publishedDate={blog.date}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;

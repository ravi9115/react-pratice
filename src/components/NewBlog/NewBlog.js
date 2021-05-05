import BlogForm from "./BlogForm";
import "./NewBlog.css";

const NewBlog = (props) => {
  const saveBlogDataHandler = (enteredBlogData) => {
    const blogData = {
      ...enteredBlogData,
      id: Math.random().toString(),
      createdAt: new Date(),
    };
    props.onAddBlog(blogData);
  };

  return (
    <div className="new-blog">
      <BlogForm onSaveExpenseData={saveBlogDataHandler} />
    </div>
  );
};

export default NewBlog;

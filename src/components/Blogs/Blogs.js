import BlogItem from "./BlogItem";
import Card from "../UI/Card";
import "./Blogs.css";

const Blogs = (props) => {
  return (
    <div>
      <Card className="blogs">
        {props.items.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            likeItems={blog.likeItems}
            description={blog.description}
            content={blog.content}
            date={new Date(blog.createdAt)}
          />
        ))}
      </Card>
    </div>
  );
};

export default Blogs;

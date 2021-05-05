import Card from "../UI/Card";
import BlogDate from "./BlogDate";
import "./BlogItem.css";

const BlogItem = (props) => {
  return (
    <Card className="blog-item">
      <BlogDate date={props.date} />
      <div className="blog-item__description">
        <h2>{props.title}</h2>
        <div className="blog-item__blog-description">{props.description}</div>
        <div className="blog-item__blog-content">{props.content}</div>
      </div>
    </Card>
  );
};

export default BlogItem;

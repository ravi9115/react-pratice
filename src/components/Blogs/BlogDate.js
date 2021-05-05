import "./BlogDate.css";

const BlogDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="blog-date">
      <div className="blog-date__month">{month}</div>
      <div className="blog-date__year">{year}</div>
      <div className="blog-date__day">{day}</div>
    </div>
  );
};

export default BlogDate;

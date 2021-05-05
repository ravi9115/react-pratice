import { useState } from "react";

import Blogs from "./components/Blogs/Blogs";
import NewBlog from "./components/NewBlog/NewBlog";
import "./App.css";

const DUMMY_BLOGS = [
  {
    id: 7,
    title: 2,
    description: "2",
    content: "a b c d\n",
    createdAt: "2021-04-27T05:06:03.216Z",
    user: {
      userId: 5,
      firstName: "Ravi",
      lastName: "Jain",
    },
    commentItems: [],
    mediaItems: [],
    likeItems: [
      {
        id: 12,
        user: {
          userId: 5,
          firstName: "Ravi",
          lastName: "Jain",
        },
      },
    ],
  },
  {
    id: 6,
    title: "1st",
    description: "1st",
    content: "aaaa",
    createdAt: "2021-04-12T05:09:23.931Z",
    user: {
      userId: 4,
      firstName: "Ravi",
      lastName: "Jain",
    },
    commentItems: [
      {
        id: 1,
        comment: "111111111111",
        createdAt: "2021-04-14T06:51:56.755Z",
        updatedAt: "2021-04-14T06:51:56.755Z",
        user: {
          userId: 4,
          firstName: "Ravi",
          lastName: "Jain",
        },
      },
    ],
    mediaItems: [],
    likeItems: [
      {
        id: 4,
        user: {
          userId: 4,
          firstName: "Ravi",
          lastName: "Jain",
        },
      },
    ],
  },
  {
    id: 5,
    title: "1st",
    description: "1st",
    content: "1st",
    createdAt: "2021-04-12T04:57:51.758Z",
    user: {
      userId: 5,
      firstName: "Ravi",
      lastName: "Jain",
    },
    commentItems: [],
    mediaItems: [],
    likeItems: [],
  },
  {
    id: 4,
    title: "11",
    description: "111",
    content: "111",
    createdAt: "2021-04-09T05:14:16.364Z",
    user: {
      userId: 4,
      firstName: "Ravi",
      lastName: "Jain",
    },
    commentItems: [],
    mediaItems: [],
    likeItems: [
      {
        id: 6,
        user: {
          userId: 5,
          firstName: "Ravi",
          lastName: "Jain",
        },
      },
    ],
  },
  {
    id: 3,
    title: "aa",
    description: "aaa",
    content: "aaaa",
    createdAt: "2021-04-09T05:13:50.459Z",
    user: {
      userId: 4,
      firstName: "Ravi",
      lastName: "Jain",
    },
    commentItems: [],
    mediaItems: [],
    likeItems: [],
  },
  {
    id: 2,
    title: "11",
    description: "qq",
    content: "qqqqq",
    createdAt: "2021-04-06T10:57:29.933Z",
    user: {
      userId: 3,
      firstName: "aa",
      lastName: "aa",
    },
    commentItems: [],
    mediaItems: [],
    likeItems: [],
  },
];

const App = () => {
  const [blogs, setBlogs] = useState(DUMMY_BLOGS);

  const addBlogHandler = (blog) => {
    setBlogs((prevBlogs) => {
      return [blog, ...prevBlogs];
    });
  };

  return (
    <div>
      <NewBlog onAddBlog={addBlogHandler} />
      <Blogs items={blogs} />
    </div>
  );
};

export default App;

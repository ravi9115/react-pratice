import { useState } from "react";

import "./BlogForm.css";

const BlogForm = (props) => {
  const initialState = {
    enteredTitle: "",
    enteredDescription: "",
    enteredContent: "",
  };

  const [userInput, setUserInput] = useState({ ...initialState });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const descriptionChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDescription: event.target.value,
      };
    });
  };

  const contentChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredContent: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const blogData = {
      title: userInput.enteredTitle,
      description: userInput.enteredDescription,
      content: userInput.enteredContent,
    };

    props.onSaveExpenseData(blogData);

    setUserInput({ ...initialState });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-blog__controls">
        <div className="new-blog__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-blog__control">
          <label>Description</label>
          <input
            type="text"
            value={userInput.enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-blog__control">
          <label>Content</label>
          <input
            type="text"
            value={userInput.enteredContent}
            onChange={contentChangeHandler}
          />
        </div>
      </div>
      <div className="new-blog__actions">
        <button type="submit">Add Blog</button>
      </div>
    </form>
  );
};

export default BlogForm;

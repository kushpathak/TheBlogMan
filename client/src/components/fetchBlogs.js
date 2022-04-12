import React from "react";
import { TagContainer } from "./styles/HomeStyle";
import { Blog, BlogBox } from "./styles/SearchBlogStyle";
import Person from "../images/person.png";
import { useNavigate } from "react-router";

function FetchBlogs({ blogs, change }) {
  const navigate = useNavigate();
  const convertToTags = (s) => {
    if (s === null || s === "") return "";
    var l = s.split(" ");
    const tags = l.map((item, idx) => {
      if (item != "") return <div className="tag">{`#${item}`}</div>;
    });
    return (
      <TagContainer marginLeft="10px" marginBottom="10px" fontWeight="500">
        {tags}
      </TagContainer>
    );
  };
  const fetchImage = (img) => {
    console.log("here");
    if (img === "null" || img === null) return Person;
    return `http://localhost:9000/images/${img}`;
  };
  const fetchImg = (blog) => {
    const url = blog.user_details[0].image;
    if (url === "null") {
      return Person;
    }
    return `http://localhost:9000/images/users/${url}`;
  };

  const fetchBlogHelper = () => {
    const allBlogs = blogs.map((blog, idx) => {
      console.log(blog);
      return (
        <Blog
          change={change}
          key={idx}
          onClick={() => {
            navigate(`/blog`, {
              state: {
                title: blog.title,
                image: fetchImg(blog),
              },
            });
          }}
        >
          <img className="blog-img" src={fetchImage(blog.image)} />
          <h5 className="title">{blog.title}</h5>
          {convertToTags(blog.tags)}
        </Blog>
      );
    });
    return <BlogBox>{allBlogs}</BlogBox>;
  };
  return fetchBlogHelper();
}

export default FetchBlogs;

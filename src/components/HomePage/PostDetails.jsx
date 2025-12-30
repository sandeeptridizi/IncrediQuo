// src/components/HomePage/PostDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../appStyles/HomePageStyles/PostDetails.css";

import post1 from "../../assets/posts/post-1.jpg";
import post2 from "../../assets/posts/post-2.jpg";
import post3 from "../../assets/posts/post-3.jpg";
import ranoldAvatar from "../../assets/authors/ranold.jpg";
import patriciaAvatar from "../../assets/authors/patricia.jpg";
import elaineAvatar from "../../assets/authors/elaine.jpg";

const posts = [
  {
    id: 1,
    title: "The most Popular Business Of the Year",
    author: "Ranold Jeff.",
    date: "May 4th, 2022",
    image: post1,
    avatar: ranoldAvatar,
    description:
      "Full article content for post 1 goes here...",
  },
  {
    id: 2,
    title: "The most Popular Business Of the Year",
    author: "Patricia Anderson",
    date: "Apr 27th, 2022",
    image: post2,
    avatar: patriciaAvatar,
    description:
      "Full article content for post 2 goes here...",
  },
  {
    id: 3,
    title: "The most Popular Business Of the Year",
    author: "Elaine Luna",
    date: "Apr 20th, 2022",
    image: post3,
    avatar: elaineAvatar,
    description:
      "Full article content for post 3 goes here...",
  },
];

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <h2 style={{ marginTop: "120px", textAlign: "center" }}>Post not found</h2>;

  return (
    <section className="post-details">
      <button className="post-details__back" onClick={() => navigate(-1)}>
        ← Back to posts
      </button>

      <img
        src={post.image}
        alt={post.title}
        className="post-details__image"
      />

      <h1 className="post-details__title">{post.title}</h1>

      <div className="post-details__meta">
        <div className="post-details__author">
          <div className="post-details__avatar">
            <img src={post.avatar} alt={post.author} />
          </div>
          <div>
            <div className="post-details__author-name">{post.author}</div>
            <div className="post-details__date">{post.date}</div>
          </div>
        </div>
      </div>

      <p className="post-details__body">{post.description}</p>
    </section>
  );
};

export default PostDetails;

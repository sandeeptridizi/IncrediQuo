// src/components/HomePage/LatestPosts.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../appStyles/HomePageStyles/LatestPosts.css";

import { database, ref, get } from "../../Firebase/firebase";

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // ---- FETCH LATEST 3 BLOGS FROM FIREBASE ----
  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const blogRef = ref(database, "blogs");
        const snapshot = await get(blogRef);

        if (!snapshot.exists()) {
          setPosts([]);
          return;
        }

        const data = snapshot.val();

        // object -> array
        const allBlogs = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
          imageUrl: data[key].image_url || data[key].imageUrl || "",
        }));

        // sort by date (newest first)
        const getTime = (blog) => {
          const raw =
            blog.createdAt ||
            blog.created_at ||
            blog.date ||
            blog.publishedAt;

          if (!raw) return 0;
          const d = new Date(raw);
          return Number.isNaN(d.getTime()) ? 0 : d.getTime();
        };

        const sorted = allBlogs.sort((a, b) => getTime(b) - getTime(a));

        // keep only latest 3
        setPosts(sorted.slice(0, 3));
      } catch (err) {
        console.error("Error fetching latest blogs:", err);
        setPosts([]);
      }
    };

    fetchLatestBlogs();
  }, []);

  // ---- FORMAT DATE ----
  const formatDate = (blog) => {
    const raw =
      blog.createdAt ||
      blog.created_at ||
      blog.date ||
      blog.publishedAt;

    if (!raw) return "";
    const d = new Date(raw);
    if (Number.isNaN(d.getTime())) return "";

    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section id="blogs" className="section latest-posts">
      <div className="latest-container">
        <h2 className="section__title latest-title">Latest Post</h2>

        <div className="latest-grid">
          {posts.map((post) => (
            <article
              key={post.id}
              className="latest-card"
              onClick={() => navigate(`/blogs/${post.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="latest-card__image-wrap">
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="latest-card__image"
                  />
                )}
              </div>

              <div className="latest-card__content">
                <h3 className="latest-card__title">{post.title}</h3>

                <div className="latest-card__meta">
                  <div className="latest-card__author">
                    <div className="latest-card__avatar"></div>
                    {/* 🔥 Always show brand instead of author name */}
                    <span>@IncrediQuoSolutions</span>
                  </div>

                  <span className="latest-card__date">
                    {formatDate(post)}
                  </span>
                </div>
              </div>
            </article>
          ))}

          {posts.length === 0 && (
            <p className="latest-empty">No posts found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;

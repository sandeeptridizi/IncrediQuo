// src/components/Blogs/BlogsListPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../appStyles/blogs/BlogsListPage.css";
import { database, ref, get } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";

const BlogsListPage = () => {
  const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
  // ---- FETCH BLOGS FROM FIREBASE ----
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogRef = ref(database, "blogs");

      try {
        const snapshot = await get(blogRef);
        if (snapshot.exists()) {
          const data = snapshot.val();

          const blogList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            imageUrl: data[key].image_url || "",
          }));

          setBlogs(blogList);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogs();
  }, []);

  // ---- DATE HELPERS (for 27 / MAY) ----
  const getDateParts = (blog) => {
    const raw =
      blog.createdAt || blog.created_at || blog.date || blog.publishedAt;

    if (!raw) {
      return { day: "", month: "" };
    }

    const d = new Date(raw);
    if (Number.isNaN(d.getTime())) {
      return { day: "", month: "" };
    }

    const day = String(d.getDate()).padStart(2, "0");
    const month = d
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();

    return { day, month };
  };

  // ---- EXCERPT (use blog_content, strip HTML, limit length) ----
  const getExcerpt = (blog) => {
    let raw =
      blog.excerpt ||
      blog.description ||
      blog.blog_content || // <- main field from backend
      blog.content ||
      "";

    if (!raw) return "";

    // strip tags & normalize spaces
    raw = raw
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/p>/gi, " ")
      .replace(/<p[^>]*>/gi, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/\r/g, "")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const maxLen = 220; // how much text you want to show
    if (raw.length <= maxLen) return raw;

    return raw.slice(0, maxLen).trim();
  };

  return (
    <main className="blogs-page">
      {/* TOP HERO CARD */}
      <section className="blogs-hero">
        <div className="blogs-hero__card">
          <h1 className="blogs-hero__title">Blogs</h1>
        </div>
      </section>

      {/* LIST SECTION */}
      <section className="blogs-list">
        <div className="blogs-list__header">
          <div className="blogs-list__line" />
          <span className="blogs-list__label">Latest</span>
        </div>

        <div className="blogs-list__items">
          {blogs.map((post) => {
            const { day, month } = getDateParts(post);
            const excerpt = getExcerpt(post);
            const author = post.author || "@samurai2099";
            const tags = post.tags || [];

            return (
              <Link
                key={post.id}
                to={`/blogs/${post.id}`}
                className="blog-item__link"
              >
                <article className="blog-item">
                  {/* LEFT: DATE + AUTHOR */}
                  <div className="blog-item__left">
                    <div className="blog-item__date">
                      <span className="blog-item__day">{day}</span>
                      <span className="blog-item__month">{month}</span>
                    </div>
                    <span className="blog-item__author-vert">
                      {author}
                    </span>
                  </div>

                  {/* RIGHT: TEXT + TAGS */}
                  <div className="blog-item__right">
                    <h2 className="blog-item__title">{post.title}</h2>
                    <p className="blog-item__excerpt">
                      {excerpt}
                      {excerpt && (
                        <button className="blog-item__readmore">
                          ....Read more
                        </button>
                      )}
                    </p>

                    {tags.length > 0 && (
                      <div className="blog-item__tags">
                        {tags.map((tag) => (
                          <span key={tag} className="blog-item__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            );
          })}

          {blogs.length === 0 && (
            <p className="blogs-empty">No blogs found.</p>
          )}
        </div>
      </section>

      {/* BOTTOM PINK ABOUT-US STRIP */}
      <section className="blogs-approach">
        <div className="blogs-approach__inner">
          <p className="blogs-approach__text">
            We&apos;re A Precision-Driven Transcription And Language Support
            Company Built On Trust, Accuracy, And Innovation. Learn How Our
            Expertise Adds Value To Every Client We Serve.
          </p>

          {/* <Link to="/about" className="blogs-approach__button">
            ABOUT US
          </Link> */}
               <div
                  className="blogs-approach__button"
                  onClick={() => navigate("/about")}
                  style={{ cursor: "pointer" }}
                >
                  {/* <Button name="ABOUT US" /> */}
                                                     <Button
                                name="ABOUT US"
                                paddingXL="8.6vw"
                                paddingXM="24.5vw" // ← mobile padding
                                widthL="10.88vw" // ← THIS IS KEY: let content decide width
                                widthM="30.3vw" // ← auto width on mobile too
                                bacgrounClr="#022447"
                                bacgrounArrow="#ffffff"
                                colorArrow="#022447"
                                colorText="#ffffff"
                                colorTextHover="#022447"
                              />
                </div>
        </div>
      </section>
    </main>
  );
};

export default BlogsListPage;

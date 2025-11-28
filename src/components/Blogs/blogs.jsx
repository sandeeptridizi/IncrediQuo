// src/components/Blogs/BlogPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../appStyles/blogs/BlogPage.css";
import { database, ref, get } from "../../Firebase/firebase";
import BlogHeroImg from "../../assets/blogs/Rectangle 3.png";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
    const navigate = useNavigate();
  // FETCH BLOG DETAILS
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogRef = ref(database, `blogs/${blogId}`);
        const snapshot = await get(blogRef);

        if (snapshot.exists()) {
          setBlog(snapshot.val());
        } else {
          console.warn("Blog not found:", blogId);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (!blog) return <p className="blog-loading">Loading blog...</p>;

  // FORMAT DATE
  const formatDate = (value) => {
    if (!value) return "";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const author = blog.author || "@anonymous";
  const date = formatDate(blog.createdAt || blog.created_at || blog.date);

  // ===== CLEAN BLOG BODY (REMOVE <p>, </p>, <br>, &nbsp; etc.) =====
  const rawBody = blog.blog_content || blog.content || "";

  const paragraphs = rawBody
    // turn <br> into newlines
    .replace(/<br\s*\/?>/gi, "\n")
    // close </p> becomes newline
    .replace(/<\/p>/gi, "\n")
    // remove opening <p ...> tags
    .replace(/<p[^>]*>/gi, "")
    // remove non-breaking spaces
    .replace(/&nbsp;/gi, " ")
    // normalise CR
    .replace(/\r/g, "")
    // split into lines
    .split("\n")
    // trim and keep only non-empty lines
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return (
    <main className="blog-page">
      {/* HERO IMAGE */}
      <section className="blog-hero">
        <img
          src={blog.image_url || BlogHeroImg}
          alt="Blog hero"
          className="blog-hero__image"
        />
      </section>

      {/* ARTICLE */}
      <article className="blog-article">
        <h1 className="blog-article__title">{blog.title}</h1>

        <div className="blog-article__meta">
          <p>
            written by <span>{author}</span>
          </p>
          <p>on {date}</p>
        </div>

        <div className="blog-article__content">
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </article>

      {/* CONTACT BLOCK */}
      <section className="blog-contact">
        <div className="blog-contact__inner">
          <div className="blog-contact__card">
            <form className="blog-contact__form">
              <label className="blog-contact__field">
                <input type="text" placeholder="Your Name" />
              </label>

              <label className="blog-contact__field">
                <input type="email" placeholder="Your Email" />
              </label>

              <label className="blog-contact__field">
                <textarea placeholder="Your Message" rows={4} />
              </label>

              {/* <button type="button" className="blog-contact__submit">
                Submit
              </button> */}

                <div>
            <Button name="Submit form" className="blog-contact__submit"/>
          </div>
            </form>
          </div>

          <div className="blog-contact__text">
            <h2>Get in touch with us</h2>
            <p>
              We strive to respond to all inquiries within 48 hours. Thank you
              for your patience and interest.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT US STRIP */}
      <section className="blog-approach">
        <div className="blog-approach__inner">
          <p className="blog-approach__text">
            Our Approach Is Rooted In A Deep Understanding Of Your Needs. We
            Support You With Tools, Expert Guidance, And Tailored Resources.
          </p>

          {/* <Link to="/about" className="blog-approach__button">
            ABOUT US
          </Link> */}
                         <div
                            className="blogs-approach__button"
                            onClick={() => navigate("/about")}
                            style={{ cursor: "pointer" }}
                          >
                            <Button name="ABOUT US" />
                          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;

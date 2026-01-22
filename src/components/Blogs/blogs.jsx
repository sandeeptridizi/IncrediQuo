// src/components/Blogs/BlogPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "../../appStyles/blogs/BlogPage.css";
import { database, ref, get } from "../../Firebase/firebase";
import BlogHeroImg from "../../assets/blogs/Rectangle 3.png";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BlogPage = ({ onSuccess, onError }) => {
  const { blogId } = useParams();
    const navigate = useNavigate();
  const location = useLocation();
const [showSuccessModal, setShowSuccessModal] = useState(false);
const [showErrorModal, setShowErrorModal] = useState(false);

  const [blog, setBlog] = useState(null);
console.log(blog, "blog")
    const getSourcePage = () => {
    return "Single Blog";
  };


  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
    Sourcepage: getSourcePage(),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);



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

    useEffect(() => {
    setFormData((prev) => ({ ...prev, Sourcepage: getSourcePage() }));
  }, [location]);

  useEffect(() => {
  if (showSuccessModal) {
    const timer = setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
    return () => clearTimeout(timer);
  }
}, [showSuccessModal]);


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
    .replace(/<h3[^>]*>/gi, "\n")
  .replace(/<\/h3>/gi, "\n")
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

    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Submitting your message...");

    try {
      const payload = new URLSearchParams();
      payload.append("Name", formData.Name);
      payload.append("Email", formData.Email);
      payload.append("PhoneNumber", formData.PhoneNumber);
      payload.append("Message", formData.Message);
      payload.append("Sourcepage", formData.Sourcepage);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxHdCiCLSC5Vta17Okxf3fFmBhO9K4YjCNy0pzBn_IvKULGUYEq5inO6Tia317gWaWbBw/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: payload,
        }
      );

      const result = await response.json();
      toast.dismiss(toastId);

      if (result.status === "success") {
        toast.success("Message sent successfully!");
        setFormData({
          ...formData,
          Name: "",
          Email: "",
          PhoneNumber: "",
          Message: "",
        });
setShowSuccessModal(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Failed to send message. Please try again.");
setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </div>
      </article>

      {/* CONTACT BLOCK */}
      <section className="blog-contact">
        <div className="blog-contact__inner">
          <div className="blog-contact__card">
            <form className="blog-contact__form" onSubmit={handleSubmit}>
              <label className="blog-contact__field">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </label>

              <label className="blog-contact__field">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </label>

              <label className="blog-contact__field">
                <textarea
                  rows="4"
                  name="Message"
                  placeholder="Your message"
                  value={formData.Message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </label>

              <div className="blog-contact__submit">
                {/* <Button name="Submit form" /> */}
                <Button
                  // name="Submit form"
                  name={isSubmitting ? "Submitting..." : "Submit form"}
                  disabled={isSubmitting}
                  paddingXL="8.6vw"
                  paddingXM="24.5vw"
                  widthL="11.15vw"
                  widthM="30.3vw"
                  bacgrounClr="#022447"
                  bacgrounArrow="#ffffff"
                  colorArrow="#022447"
                  colorText="#ffffff"
                  colorTextHover="#022447"
                />
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
          <div
            className="blogs-approach__button"
            onClick={() => navigate("/about")}
            style={{ cursor: "pointer" }}
          >
            <Button
              name="ABOUT US"
              paddingXL="8.6vw"
              paddingXM="24.5vw" // ← mobile padding
              widthL="10.87vw" // ← THIS IS KEY: let content decide width
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
      {showSuccessModal && (
  <div className="success-modal-backdrop">
    <div className="success-modal">
      <div className="success-icon">✔</div>
      <h3>Thank You!</h3>
      <p>Your message has been sent successfully.</p>
      <button
        className="success-close-btn"
        onClick={() => setShowSuccessModal(false)}
      >
        Close
      </button>
    </div>
  </div>
)}
{showErrorModal && (
  <div className="error-modal-backdrop">
    <div className="error-modal">
      <div className="error-icon">✖</div>
      <h3>Oops! Something went wrong</h3>
      <p>
        We couldn't send your message right now.
        <br />
        Please try again later.
      </p>
      <button
        className="error-close-btn"
        onClick={() => setShowErrorModal(false)}
      >
        Try Again
      </button>
    </div>
  </div>
)}

    </main>
  );
};

export default BlogPage;

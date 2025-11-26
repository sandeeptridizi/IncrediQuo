// src/App.jsx
import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Navbar from "./components/HomePage/Navbar";
import Hero from "./components/HomePage/Hero";
import TaglineScroller from "./components/HomePage/TaglineScroller";
import BannerStats from "./components/HomePage/BannerStats";
import Services from "./components/HomePage/Services";
import FeatureSection from "./components/HomePage/FeatureSection";
import Industries from "./components/HomePage/Industries";
import LatestPosts from "./components/HomePage/LatestPosts";
import CTA from "./components/HomePage/CTA";
import Footer from "./components/HomePage/Footer";
import ContactSection from "./components/HomePage/ContactSection";
import PostDetails from "./components/HomePage/PostDetails";

import AboutPage from "./components/AboutUs/AboutPage";
import ContactPage from "./components/ContactUs/ContactPage";

// service pages
import TranscriptionServicePage from "./components/TranscriptionService/TranscriptionServicePage";
import ClosedCaptionServicePage from "./components/ClosedCaptionService/ClosedCaptionServicePage";
import SummarizationServicePage from "./components/SummarizationService/SummarizationServicePage";
import AdditionalSupportServicePage from "./components/AdditionalSupportService/AdditionalSupportServicePage";

// careers page
import Careers from "./components/Career/Careers";

// terms page
import TermsPage from "./components/Terms/TermsPage";

// privacy page
import PrivacyPage from "./components/Privacy/PrivacyPage";

import "./appStyles/AppLayout.css";
import { CreateBlog } from "./components/BlogCreationPage/blogcreation";
import { Manageblogs } from "./components/ManageBlogs/Manageblogs";
import { UpdateBlog } from "./components/BlogUpdation/BlogUpdation";
import CareerCreation from "./components/careerCreation/careerCreation";
import SmallCard from "./components/managingCareers/managingCareers";
import CareerUpdate from "./components/careerCreation/updationCareerpage";
import SingleBlogPage from "./components/SingleBlogPage/SingleBlogPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/blogs";
import LoginPage from "./components/LogInPage/LogIn";

function App() {
  const [showContact, setShowContact] = useState(false);
  const servicesRef = useRef(null);

  const location = useLocation();
  const hiddenLayoutRoutes = [
    "/login",
    "/dashboard",
    "/createBlog",
    "/manageblogs",
    "/blog-updation",
    "/createCareer",
    "/managecareers",
    "/career-update",
  ];
  const shouldHideLayout = hiddenLayoutRoutes.includes(location.pathname);

  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);

  const handleOpenServices = () => {
    if (servicesRef.current?.openFirstService) {
      servicesRef.current.openFirstService();
    }

    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* <Navbar onOpenContact={openContact} onOpenServices={handleOpenServices} /> */}
      {/* Show Navbar only if NOT in hidden routes */}
      {!shouldHideLayout && (
        <Navbar
          onOpenContact={openContact}
          onOpenServices={handleOpenServices}
        />
      )}
      <div className="app">
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero onOpenContact={openContact} />
                <TaglineScroller />
                <BannerStats />
                <Services />
                <FeatureSection />
                <Industries />
                <LatestPosts />
                <CTA />
              </>
            }
          />

          {/* ABOUT PAGE */}
          <Route path="/about" element={<AboutPage />} />

          {/* CONTACT PAGE */}
          <Route path="/contact" element={<ContactPage />} />

          {/* CAREERS PAGE */}
          <Route
            path="/careers"
            element={
              <>
                <Careers />
                {/* optional CTA under careers page, remove if you don't want */}
              </>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
          {/* POST DETAILS PAGE */}
          <Route path="/post/:id" element={<PostDetails />} />

          {/* TRANSCRIPTION SERVICE PAGE */}
          <Route
            path="/services/transcription"
            element={
              <>
                <TranscriptionServicePage />
                <CTA />
              </>
            }
          />

          {/* CLOSED CAPTIONING & SUBTITLING PAGE */}
          <Route
            path="/services/closed-captioning"
            element={
              <>
                <ClosedCaptionServicePage />
                <CTA />
              </>
            }
          />

          {/* SUMMARIZATION SERVICE PAGE */}
          <Route
            path="/services/summarization"
            element={
              <>
                <SummarizationServicePage />
                <CTA />
              </>
            }
          />

          {/* ADDITIONAL SUPPORT SERVICE PAGE */}
          <Route
            path="/services/additional-support"
            element={
              <>
                <AdditionalSupportServicePage />
                <CTA />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/manageblogs" element={<Manageblogs />} />
          <Route path="/blog/:blogId" element={<SingleBlogPage />} />
          <Route path="/blog-updation" element={<UpdateBlog />} />
          <Route path="/createCareer" element={<CareerCreation />} />
          <Route path="/managecareers" element={<SmallCard />} />
          <Route path="/career-update" element={<CareerUpdate />} />
        </Routes>
      </div>

      {/* <Footer /> */}
      {!shouldHideLayout && <Footer />}
      {showContact && <ContactSection onClose={closeContact} />}
    </>
  );
}

export default App;

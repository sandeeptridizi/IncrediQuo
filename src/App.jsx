
import React, { useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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

import TranscriptionServicePage from "./components/TranscriptionService/TranscriptionServicePage";
import ClosedCaptionServicePage from "./components/ClosedCaptionService/ClosedCaptionServicePage";
import SummarizationServicePage from "./components/SummarizationService/SummarizationServicePage";
import AdditionalSupportServicePage from "./components/AdditionalSupportService/AdditionalSupportServicePage";

import Careers from "./components/Career/Careers";
import TermsPage from "./components/Terms/TermsPage";
import PrivacyPage from "./components/Privacy/PrivacyPage";
import WhatsAppButton from "./components/WhatsAppButton";
import "./appStyles/AppLayout.css";
import { CreateBlog } from "./components/BlogCreationPage/blogcreation";
import { Manageblogs } from "./components/ManageBlogs/Manageblogs";
import { UpdateBlog } from "./components/BlogUpdation/BlogUpdation";
import CareerCreation from "./components/careerCreation/careerCreation";
import SmallCard from "./components/managingCareers/managingCareers";
import CareerUpdate from "./components/careerCreation/updationCareerpage";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/LogInPage/LogIn";
import BlogsListPage from "./components/Blogs/BlogsListPage";   
import BlogPage from "./components/Blogs/blogs";               

import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  const [showContact, setShowContact] = useState(false);
  const servicesRef = useRef(null);

  const location = useLocation();
  const hiddenLayoutRoutes = [
    "/login", "/dashboard", "/createBlog",
    "/manageblogs", "/blog-updation",
    "/createCareer", "/managecareers",
    "/career-update",
  ];
  const shouldHideLayout = hiddenLayoutRoutes.includes(location.pathname);

  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onOpenContact={openContact} />
                {/* <TaglineScroller /> */}
                <BannerStats onOpenContact={openContact} />
                <Services />
                <FeatureSection />
                <Industries />
                <LatestPosts />
                <CTA />
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/careers" element={<Careers />} /> */}
          <Route
  path="/careers"
  element={<Careers onOpenContact={openContact} />}
/>

          <Route path="/blogs" element={<BlogsListPage />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />

          {/* Service Pages */}
          <Route
            path="/services/transcription"
            element={<TranscriptionServicePage onOpenContact={openContact} />}
          />
          <Route
            path="/services/closed-captioning"
            element={<ClosedCaptionServicePage onOpenContact={openContact} />}
          />
          <Route
            path="/services/summarization"
            element={<SummarizationServicePage onOpenContact={openContact} />}
          />
          <Route
            path="/services/additional-support"
            element={<AdditionalSupportServicePage onOpenContact={openContact} />}
          />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/manageblogs" element={<Manageblogs />} />
          <Route path="/blog-updation" element={<UpdateBlog />} />
          <Route path="/createCareer" element={<CareerCreation />} />
          <Route path="/managecareers" element={<SmallCard />} />
          <Route path="/career-update" element={<CareerUpdate />} />
        </Routes>
      </div>

       {!shouldHideLayout && <WhatsAppButton />}
      {!shouldHideLayout && <Footer />}
      {showContact && <ContactSection onClose={closeContact} />}
    </>
  );
}

export default App;

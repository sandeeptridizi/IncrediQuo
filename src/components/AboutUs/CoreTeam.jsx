import React from "react";
import "../../appStyles/AboutUs/CoreTeam.css";
import Member1 from "../../assets/Abouthero/1.png";
import Member2 from "../../assets/Abouthero/2.png";
import { FaLinkedin } from "react-icons/fa"; 

const CoreTeam = () => {
    const team = [
        {
            id: 1,
            img: Member1,
            name: "Shashank Paturi",
            role: "Co-Founder and Director",
            bio: "With over two decades of global experience, Shashank has built his career across media monitoring, healthcare, and legal support services. He began his journey in the media intelligence space in the United States market, where he developed a strong foundation in operations, client delivery, and quality-driven processes. His early roles shaped his ability to manage high-volume, time-sensitive work with precision and consistency.",
            bio2:"He then moved into a Fortune 500 healthcare organization, further expanding his expertise in large-scale operations, compliance, and process optimization. His leadership strengths became more pronounced when he later led India operations for an Australia-based legal services company, managing high-performing teams and driving operational excellence for global clients. ",
            bio3:"Fueled by a vision to build world-class transcription and support services from India, Shashank founded IncrediQuo Solutions. What began as an idea driven by passion has now grown into a company known for its reliability, accuracy, and client-first approach. Under his leadership, IncrediQuo continues to scale while staying rooted in its core values of quality, integrity, and innovation",
            linkedinUrl: "https://www.linkedin.com/in/shashankpaturi/", 
        },
        {
            id: 2,
            img: Member2,
            name: "Ramani Kalanadhabhatta",
            role: "Co-Founder and Director",
            bio: "IncrediQuo was built on the belief that every word matters. And behind that belief stands its Co-Founder, Ramani Kalanadhabhatta — a professional with over two decades of deep expertise in transcription, quality assurance, and industry operations  ",
            bio2:"Ramani’s journey began at Osmania University, where she completed her Bachelor’s degree in Microbiology, Chemistry, and Zoology, followed by a Master’s degree in Biotechnology. Her early career led her into transcription and later into the pharmaceutical sector, where she contributed to major international projects, including the AstraZeneca COVID vaccine (AZD1222). She supported global teams across databases like Sapphire and Oracle, served as a Subject Matter Expert, and trained multiple teams to achieve high performance and consistency.",
            bio3:"Drawing from this diverse experience, Ramani founded IncrediQuo with a clear mission: to deliver unmatched transcription quality through precision, expertise, and client-driven processes.Today, she personally oversees quality control, team training, and performance alignment with client expectations. Her leadership ensures that every output from IncrediQuo stands out for its accuracy, clarity, and incredible attention to detail — making the company a trusted partner for businesses worldwide.",
            
            linkedinUrl: "https://www.linkedin.com/in/ramani-kalanadhabhatta-735214145/", 

        },
    ];

    return (
        <section className="core-team snap-section">
            <div className="core-team__inner">
                <h2>Our Founders</h2>

                <div className="core-team__grid">
                    {team.map((member) => (
                        <article key={member.id} className="core-team__card">
                            <div className="core-team__flipper">
                                <div className="core-team__front">
                                    <div className="core-team__image-wrap">
                                        <img src={member.img} alt={member.name} />
                                    </div>
                                    <div className="core-team__overlay">
                                        <p className="core-team__name">{member.name}</p>
                                        <p className="core-team__role">{member.role}</p>
                                    </div>
                                </div>

                                <div className="core-team__back">
                                    <p className="core-team__back-name">{member.name}</p>
                                    <p className="core-team__back-role">{member.role}</p>
                                    <p className="core-team__bio-text">{member.bio}</p>
                                    <p className="core-team__bio-text">{member.bio2}</p>
                                    <p className="core-team__bio-text">{member.bio3}</p>
                                    
                                    {/* 🚀 ROBUST FIX IMPLEMENTED HERE */}
                                    <a
                                        href={member.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="core-team__linkedin-link"
                                        onClick={(e) => {
                                            // 1. Stop the event from bubbling up to the card flip handler
                                            e.stopPropagation(); 
                                            // 2. Prevent the link's default behavior 
                                            e.preventDefault(); 
                                            // 3. Manually open the URL in a new window/tab
                                            window.open(member.linkedinUrl, '_blank'); 
                                        }} 
                                    >
                                        <FaLinkedin className="core-team__linkedin-icon" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreTeam;
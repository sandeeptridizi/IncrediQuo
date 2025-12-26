import React, { useState, useEffect, useRef } from "react";
import "../../appStyles/Career/CareerHero.css";
import heroImg from "../../assets/carrers/carrerphoto.png";
import { Button } from "../Button/Button";

// Dedicated component to handle typing animation and line breaks
const AnimatedH1 = ({ text, delay }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const separator = '~'; // Using tilde to clearly denote line breaks in the input string

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, delay, text]);

    // Split the raw output by the separator and insert <br /> tags
    const renderedText = displayText.split(separator).map((item, index) => (
        <React.Fragment key={index}>
            {item}
            {/* Add <br /> only between the segments */}
            {index < displayText.split(separator).length - 1 && <br />}
        </React.Fragment>
    ));

    return (
        <>{renderedText}</>
    );
};

const CareerHero = ({ onSearch, locations = [], titles = [] }) => {

    const [location, setLocation] = useState("");
  // const [title, setTitle] = useState("");

    const handleSearch = () => {
    onSearch({
      location,
      titles,
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Choose job role");

  const dropdownRef = useRef(null);

  const filteredOptions = titles.filter(option =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = value => {
    setSelected(value);
    setIsOpen(false);
    setSearch("");
  };

  // Use '~' as a separator to represent the desired line breaks (<br />)
  const rawAnimatedText = "Build Your Future~with IncrediQuo~Solutions"; 
  const typingDelay = 75; // Milliseconds per character

  return (
    <section className="career-hero">
      <div className="career-hero__inner">
        {/* BLUE PANEL */}
        <div className="career-hero__panel">
          {/* LEFT TEXT */}
          <div className="career-hero__text">
            <h1>
              {/* Using the dedicated component for the animation */}
              <AnimatedH1 text={rawAnimatedText} delay={typingDelay} />
            </h1>

            <p className="career-hero__subtitle">
              Innovate, create, and shape the future of
              <br />
              language solutions
            </p>

             </div>

          {/* RIGHT IMAGE */}
          <div className="career-hero__image-wrapper">
            <img
              src={heroImg}
              alt="Team member working"
              className="career-hero__image"
            />
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="career-hero__search">
          {/* Location field */}
      <div className="search-field">
        <label>Location</label>
        <input
          list="locations"
          placeholder="Select your city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-input"
        />
        {/* <datalist id="locations">
          {locations.map((loc, i) => (
            <option key={i} value={loc} />
          ))}
        </datalist> */}
      </div>

          {/* Title field */}
<div className="custom-select-career" ref={dropdownRef}>
        <p className="Title_Css-career">Title</p>
      <div className="select-box-career" onClick={() => setIsOpen(!isOpen)}>
        <span>{selected}</span>
        <span className="arrow-career">▼</span>
      </div>

      {isOpen && (
        <div className="dropdown-career">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <ul>
            {filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                <li key={option} onClick={() => handleSelect(option)}>
                  {option}
                </li>
              ))
            ) : (
              <li className="no-data-career">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>

          {/* SEARCH BUTTON */}
          <div onClick={handleSearch}>
         <Button
            name="Search....."
            type="button"
            paddingXL="8.6vw"
            paddingXM="24.5vw"
            widthL="10.35vw"
            widthM="3vw"
            bacgrounClr="#022447"
            bacgrounArrow="#ffff"
            colorArrow="#022447"
            colorText="#ffff"
            colorTextHover="#022447"
          />
          </div>
 
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
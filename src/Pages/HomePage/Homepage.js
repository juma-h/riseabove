import React, { useState, useEffect } from "react";
import {
  Header,
  Intro,
  WhatWeDo,
  FAQ,
  Testimonials,
  Footer,
} from "../../Components";
import "./homepage.css";

function Homepage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div
        className={`col-12 col-sm-12 Header ${
          scrollPosition > "9em"? "show" : ""
        }`}
      >
        {scrollPosition > 80 && <Header />}
      </div>

      <div className="col-12 col-sm-12">
        <Intro />
      </div>
      <div className="col-12 col-sm-12">
        <WhatWeDo />
      </div>
      <div className="col-12 col-sm-12">
        <FAQ />
      </div>
      <div className="col-12 col-sm-12">
        <Testimonials />
      </div>
      <div className="col-12 col-sm-12">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;

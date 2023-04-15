import React from "react";
import "./faq.css";
import FAQAccordion from "../Accordion/Accordion";

function FAQ() {
  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="title1-faq">We're Here To Help!</h2>
        <h1 className="title2-faq"> FAQ's</h1>
        <p className="more-info-faq">
          We’ve put together some frequently asked questions (FAQs) to give you
          more information about Rise Above Coaching and what we offer. 
          <br></br>If you
          have a question that you can’t find the answer to, please use the
          <br></br>
          <a className="link"> Contact page.</a>
        </p>
      </div>

      <div>
        <p className="more-info-faq"> ‍ <strong>NOTE:</strong> Clicking on the question will reveal the answer.</p>
        <FAQAccordion/>
      
      </div>
    </div>
  );
}

export default FAQ;

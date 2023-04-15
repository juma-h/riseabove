import React, {useEffect} from "react";
import AOS from 'aos';
import pic1 from "../../Assets/Images-20230412T100529Z-001/Images/organization.png";
import pic2 from "../../Assets/Images-20230412T100529Z-001/Images/hr.png";
import pic3 from "../../Assets/Images-20230412T100529Z-001/Images/diverse.png";
import pic4 from "../../Assets/Images-20230412T100529Z-001/Images/assesment.png";
import "./whatwedo.css";

function WhatWeDo() {

  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: 'ease-in-out',
      once: true,
      offset: -200
    });
  }, []);
  return (
    <div className="container-sm p-5" style={{ height: "auto" }}>
      <h1 className="what-h2">What we do </h1>
      <p className="what-p">
        Rise Above Coaching is a global organizational consulting firm that
        believes in the power of partnership. We believe in partnering with our
        clients to elevate their most valuable assets — people. We partner with
        organizations to ensure diversity, equity and inclusion are pillars of
        the organizational cultures. We help organizations solve problems,
        enhance performance, and manage the complexities of today’s business
        environment through consulting and coaching services.
      </p>
      <div className="container-sm mt-5" >
        <div  data-aos="fade-up-left" className="row m-3  left-div text-right" >
          <div className="col-md-7">
            <h2 className="title1">Organizational Coaching & </h2>
            <h1 className="title2">Professional Development.</h1>
            <div className="row mr-3">
              <div className="col-md-6"></div>
              <div className=" col-md-6">
                <p className="more-info">
                  <strong>Building an Organization That Delivers:</strong> We work with
                  leaders, teams, and individual contributors to create
                  long-lasting motivation to reach organizational goals and
                  produce results through tailored coaching services.
                </p>
              </div>
            </div>
            <div>
              <button className="button-23">View More</button>
            </div>
          </div>
          <div className="col-md-5">
            <img className="what-img" src={pic1} alt="what-img" />
          </div>
        </div>

        <div data-aos="fade-up-right" className="row right-div p-3">
          <div className="col-md-6">
            <img className="what-img" src={pic2} alt="what-img" />
          </div>
          <div className="col-md-6">
            <h2 className="title1left">Human Resources Outsourcing </h2>
            <h1 className="title2left"> and Consultation</h1>
            <div className="row mr-3">
              <div className=" col-md-6">
                <p className="more-infoleft">
                  <strong>People Strategy:</strong> We partner with human resources teams to
                  address human capital needs, challenges, or gaps through our
                  outsourcing or consulting services.
                </p>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div>
              <button className="button-23" style={{ float: "left" }}>
                View More
              </button>
            </div>
          </div>
        </div>

        <div data-aos="fade-up-left" className="row left-div text-right">
          <div className="col-md-6">
            <h2 className="title1">Diversity,</h2>
            <h1 className="title2">Equity, and Inclusion (DEI)</h1>
            <div className="row mr-3">
              <div className="col-md-6"></div>
              <div className=" col-md-6">
                <p className="more-info">
                 <strong> Core Values: </strong>Diversity, Equity, and Inclusion: We work with
                  you to ensure DEI is embedded in every aspect of the
                  organization.
                </p>
              </div>
            </div>
            <div>
              <button className="button-23">View More</button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="what-img"
              style={{ width: "600px" }}
              src={pic3}
              alt="what-img"
            />
          </div>
        </div>

        <div  data-aos="fade-up-right"className="row right-div p-3">
          <div className="col-md-6">
            <img className="what-img" src={pic4} alt="what-img" />
          </div>
          <div className="col-md-6">
            <h2 className="title1left">Assessments</h2>
            <div className="row mr-3">
              <div className=" col-md-6">
                <p className="more-infoleft">
                 <strong> Discover, Engage, and Bridge:</strong> We prepare you and your talent
                  for the future and facilitate employee development.
                </p>
              </div>
            </div>
            <div>
              <button className="button-23" style={{ float: "left" }}>
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhatWeDo;

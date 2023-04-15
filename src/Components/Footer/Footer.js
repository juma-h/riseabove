import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="row mt-3 mb-3 p-5 footer-container">
      <div className="col-md-7">
        <h2 className="footer-header">GET OUR LATEST</h2>
        <h1 className="footer-sub">NEWSLETTER</h1>
        <div>
          <form>
            <label
              className="footer-label"
              style={{ color: "white", float: "left", fontSize: "20px" }}
            >
              Practical Resources. No spam ever
            </label>
            <div class="input-group ">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Enter you mail"
                style={{ background: "none", borderRadius: "0px" }}
              />
            </div>
            <div className="submit-div">
              <div className="submit-circle"></div>
              <a className="submit-link" href="#">
                Submit
              </a>
            </div>
          </form>

          <div className="row mt-3 contact-details">
            <div className="col-md-4">
              <p>info@riseabovecoaching.com </p>
              <p>(202)880-9490 </p>
            </div>
            <div className="col-md-4">
              <i class="fab fa-facebook fa-2xl"></i>
              <i class="fab fa-instagram fa-2xl"></i>
              <i class="fab fa-linkedin fa-2xl"></i>
              <i class="fab fa-youtube fa-2xl"></i>
            </div>
            <div className="col-md-4">
              6089 Old Central Avenue, Suite 31076<br></br>
              Capitol Heights, Maryland 20731<br></br>
              United States
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 right-footer">
        <div class="circle">
          <p>
            Book a<br></br> session <br></br>
            today
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

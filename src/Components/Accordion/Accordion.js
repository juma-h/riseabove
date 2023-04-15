import * as React from "react";
import "./accordion.css";

export default function FAQAccordion(props) {
  return (
    <div className="container d-flex justify-content-center">
      <div
        className="row m-5 p-5 d-flex align-center"
        style={{ width: "50em" }}
      >
        <div class="accordion" id="accordionExample">
          <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingOne">
              <i class="fas fa-comments-alt"></i>
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                What is Coaching ?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Partnering with clients in a thought-provoking and creative
                process that inspires them to maximize their personal and
                professional potential. (International Coaching Federation-ICF)
              </div>
            </div>
          </div>

          <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How does Rise Above Consulting provide HR Consulting ?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Rise Above Coaching partners with organizations that need access
                to real resources HR support infrastructure. When you are facing
                complex and time-consuming projects or compliance issues, such
                as HR department startup, compensation and benefits plan design,
                HRIS implementation, or HR handbooks, we provide you with HR
                consultants who are available to provide support you on-site and
                will get the assignment completed effectively. The process
                includes establishing the scope of the work, developing
                timelines and defining deliverables and determining which model
                best suits your organization’s needs and budget.
              </div>
            </div>
          </div>
          <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How does Rise Above Consulting provideDEI initiatives ?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Rise Above Coaching partners with organizations to support
                Diversity, Equity, and Inclusion leadership and management to
                provide organizations the partnership, support, and resources
                needed to move their diversity & inclusion programs forward or
                start on their DEI Journey.
              </div>
            </div>
          </div>
          <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Does Rise Above Consulting offer Everything DISC?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-left">
                Yes, we are an authorized partner of Everything DiSC which means
                we are licensed to offer the full Everything DiSC® Application
                Suite which includes: ‍
                <ul>
                  <li>Everything DiSC Workplace®</li>
                  Engages every individual in building more effective
                  relationships at work.
                  <li>Everything DiSC® Management T</li>
                  Teaches managers to successfully engage, motivate, and develop
                  their people.
                  <li>Everything DiSC® Productive Conflict</li>
                  Harnesses the power of conflict by transforming destructive
                  behavior into productive responses.
                  <li>Everything DiSC Work of Leaders®</li>
                  Creates impactful leaders through the process of Vision,
                  Alignment, and Execution.
                  <li>Everything DiSC® Sales</li>
                  Provides salespeople with the skills to adapt to customers’
                  preferences and expectations.
                  <li>Everything DiSC 363® for Leaders</li>
                  Elevates leadership effectiveness with our dynamic 360-degree
                  feedback tool.
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

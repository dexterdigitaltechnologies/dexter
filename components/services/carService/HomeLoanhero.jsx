
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div style={{background:'#f6f9fb'}} className="fancy-short-banner-twelve position-relative mt-90 zn2 pt-160 lg-pt-50">
      <div className="container">
        <div className="border-bottom pb-140 lg-pb-40">
          <div className="row">
            <div className="col-xxl-9 col-xl-10 m-auto text-center">
              <div
                className=" wow"
                // data-aos="fade-up"
                // data-aos-delay="100"
              >
                <h2 className="main-text fw-normal tx-dark">
                Car Loan Melbourne
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className=" text-lg fs-24  mt-20 mb-35 lg-mb-30 lg-mt-20"
                // data-aos="fade-up"
                // data-aos-delay="200"
              >
               Driving Your Dreams with Unify Finance Car Loan Services in Melbourne
              </p>
              <p className="fs-18 mt-20 mb-35 lg-mb-30 lg-mt-20">
              Are you eager to hit the road in your dream car? At Unify Finance, we make car ownership a reality with our flexible and competitive Car Loan Services in Melbourne. Whether you're buying your first car or upgrading to a luxury vehicle, we're here to drive your dreams forward.

              </p>
            
            </div>
          </div>
        </div>
      </div>
      {/* <div className="shapes shape-one" />
      <div className="shapes shape-two" /> */}
    </div>
  );
};

export default CallToAction;

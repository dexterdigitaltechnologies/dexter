
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
                Asset Finance Melbourne
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className=" text-lg fs-24  mt-20 mb-35 lg-mb-30 lg-mt-20"
                // data-aos="fade-up"
                // data-aos-delay="200"
              >
              Turning Your Aspirations into Reality with Unify Finance Asset Finance Services in Melbourne
              </p>
              <p className="fs-18 mt-20 mb-35 lg-mb-30 lg-mt-20">
              Looking to acquire assets without tying up significant capital? Unify Finance offers Asset Finance solutions in Melbourne that empower individuals and businesses to access the assets they need, from machinery and equipment to technology and vehicles, with flexible payment options.

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

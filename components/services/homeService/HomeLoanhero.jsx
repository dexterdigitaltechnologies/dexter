
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
                Home Loan Melbourne
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className=" text-lg fs-24  mt-20 mb-35 lg-mb-30 lg-mt-20"
                // data-aos="fade-up"
                // data-aos-delay="200"
              >
              Welcome to Unify Finance Melbourne Home Loan Services. We unlock the Door to Your Dream Home.
              </p>
              <p className="fs-18 mt-20 mb-35 lg-mb-30 lg-mt-20">
              At Unify Finance, we understand that a home is not just a place; it's a reflection of your dreams and aspirations. Whether you're a first-time homebuyer or looking to upgrade to your forever home, our Home Loan Services in Melbourne are tailored to simplify the process and make your homeownership journey seamless and enjoyable.
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

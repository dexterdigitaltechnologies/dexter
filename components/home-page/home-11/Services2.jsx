import Link from "next/link";

const Services2 = () => {
  const services = [
    {
      icon: "/images/icon/icon_09.svg",
      title: "Software design & development",
      delay: 100,
    },
    {
      icon: "/images/icon/icon_52.svg",
      title: "ERP implementation",
      delay: 200,
    },
    {
      icon: "/images/icon/icon_53.svg",
      title: "Software Consulting",
      delay: 100,
    },
    {
      icon: "/images/icon/icon_54.svg",
      title: "UI/UX Design",
      delay: 200,
    },
    {
      icon: "/images/icon/icon_55.svg",
      title: "SEO & Social Marketing",
      delay: 300,
    },
  

  ];
  





  return (
    <>
      <div className="col-lg-5 me-auto mt-40 md-mt-10" data-aos="fade-up">
        <div className="title-style-one">
          <h2 className="main-title fw-normal tx-dark m0">
            Our <br /> <span>Services</span> 
          </h2>
        </div>
        {/* /.title-style-one */}
      </div>
      {/* End .col-lg-5 */}

      {services.map((service, index) => (
        <div
          key={index}
          className={`col-lg-3 col-sm-6 d-flex mt-40`}
          data-aos="fade-up"
          data-aos-delay={service.delay}
        >
          <div className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30">
            <div className="icon d-flex align-items-end">
              <img src={service.icon} alt="icon" className="lazy-img" />
            </div>
            <h4 className="fw-500 mt-20 mb-50">{service.title}</h4>
            <Link
              href="/pages-menu/service-details"
              className="read-btn mt-auto tran3s"
            >
              <img
                src="/images/icon/icon_12.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link>
          </div>
          {/* /.card-style-ten */}
        </div>
      ))}

   
      {/* End .col-xxl-2 */}
    </>
  );
};

export default Services2;

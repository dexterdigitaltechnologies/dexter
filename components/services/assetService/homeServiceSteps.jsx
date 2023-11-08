import Link from "next/link";


const cards = [
    {
      id: 1,
      icon: "/images/icon/icon_63.svg",
      title: "Consultation",
      description:
        " Get in touch with Unify Finance to schedule a consultation with our asset finance specialists. We'll discuss your asset needs and financial preferences.",
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/images/icon/icon_64.svg",
      title: "Financing Options",
      description:
        "Based on our discussion, we'll present you with suitable asset financing options and help you decide on the right fit for your aspirations. ",
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/images/icon/icon_65.svg",
      title: "Application and Documentation",
      description:
        "Our team will guide you through the application process, ensuring you have all the necessary documentation to move forward.",
      delayAnim: "300",
    },
    {
      id: 4,
      icon: "/images/icon/icon_66.svg",
      title: "Approval and Asset Acquisition",
      description:
        " Upon approval, we'll finalize the financing arrangement, enabling you to acquire the assets you need to achieve your goals.",
      delayAnim: "100",
    },
   
   
  ];

 
  

  const ProductTabs = () => {
    return (
      

      <>

   {cards.map((card) => (
          <div 
          className="col-md-3 col-sm-6 d-flex"
          key={card.id}
          // data-aos="fade-up"
          // data-aos-delay={card.delayAnim}
        >
          <div className="card-style-eleven text-center text-lg-start w-60 mt-60 lg-mt-50 xs-mt-40">
            <div  className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              {/* <img src={card.icon} alt="illustration" className="lazy-img" /> */}
              <span style={{color:'#ffffff', fontWeight:'700'}}>{card.id}</span>
            </div>
            
            <h5 className="mt-30 mb-20 lg-mb-10 fs-20">{card.title}</h5>
            <p className="fs-14">{card.description}</p>
          </div>
          {/* /.card-style-eleven */}
        </div>
    
      ))}

      </>
    );
  };
  
  export default ProductTabs;
  
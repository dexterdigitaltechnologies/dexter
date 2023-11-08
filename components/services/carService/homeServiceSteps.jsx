import Link from "next/link";


const cards = [
    {
      id: 1,
      icon: "/images/icon/icon_63.svg",
      title: "Consultation",
      description:
        " Contact Unify Finance to schedule your Car Loan consultation. Our specialists will discuss your car preferences and budget to find the right loan options.",
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/images/icon/icon_64.svg",
      title: "Loan Evaluation",
      description:
        "We'll evaluate your financial information and car loan requirements to present you with suitable financing options.",
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/images/icon/icon_65.svg",
      title: "Application and Documentation:",
      description:
        " Our team will assist you in completing the loan application and gathering the necessary documentation. ",
      delayAnim: "300",
    },
    {
      id: 4,
      icon: "/images/icon/icon_66.svg",
      title: "Approval and Vehicle Purchase",
      description:
        "Upon approval, you'll be ready to purchase your dream car and hit the road with confidence.",
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
  
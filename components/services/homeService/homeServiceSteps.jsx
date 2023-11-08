import Link from "next/link";


const cards = [
    {
      id: 1,
      icon: "/images/icon/icon_63.svg",
      title: "Initial Consultation",
      description:
        "Contact Unify Finance through our website or by phone to schedule your complimentary consultation. During this meeting, we'll discuss your homeownership goals, financial situation, and preferences.",
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/images/icon/icon_64.svg",
      title: "Loan Evaluation",
      description:
        "Our mortgage experts will carefully evaluate your financial details to recommend the most suitable home loan options for you.",
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/images/icon/icon_65.svg",
      title: "Application and Pre-Approval",
      description:
        "Once you've chosen the right loan, we'll assist you with the application process and help you obtain pre-approval from the lender.",
      delayAnim: "300",
    },
    {
      id: 4,
      icon: "/images/icon/icon_66.svg",
      title: "Underwriting and Closing",
      description:
        " We'll work diligently to facilitate the underwriting process and ensure a seamless closing, so you can step into your new home with confidence.",
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
  
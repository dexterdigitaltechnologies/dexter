import Link from "next/link";


const cards = [
    {
      id: 1,
      icon: "/images/icon/icon_63.svg",
      title: "Consultation",
      description:
        " Contact Unify Finance for a Cashflow Finance consultation. Our experts will discuss your business's cash flow challenges and objectives.",
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/images/icon/icon_64.svg",
      title: "Cashflow Evaluation",
      description:
        " We'll evaluate your cash flow needs and recommend suitable financing options to address your specific requirements.",
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/images/icon/icon_65.svg",
      title: "Application and documentation",
      description:
        "Our team will guide you through the application process and gather the necessary documentation for funding.",
      delayAnim: "300",
    },
    {
      id: 4,
      icon: "/images/icon/icon_66.svg",
      title: "Approval and Funding",
      description:
        "Upon approval, we'll finalize the financing arrangement, providing you with the funds you need to bolster your cash flow.",
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
  
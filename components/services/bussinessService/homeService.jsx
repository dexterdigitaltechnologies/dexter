import Link from "next/link";
const services = [
  {
    iconSrc: "/images/unifyicon/icon4.svg",
    title: "Small Business Loans",
    desc:"Whether you're a startup or an established small business, our Small Business Loans Melbourne can provide the financial boost you need for expansion, inventory, marketing, and more.",
  },
  {
    iconSrc: "/images/unifyicon/icon20.svg",
    title: "Equipment Financing",
    desc:" Upgrade or acquire new equipment without breaking the bank. Our Equipment Financing options in Melbourne are tailored to match your business's unique needs and cash flow.",
 
  },
  {
    iconSrc: "/images/unifyicon/icon17.svg",
    title: "Working Capital Loans",
    desc:"  Maintain your day-to-day operations smoothly with our Working Capital Loans, designed to bridge the gap between payables and receivables. ",
  },
  {
    iconSrc: "/images/unifyicon/icon17.svg",
    title: " Commercial Real Estate Loans",
    desc:"Looking to expand your business premises? Our Commercial Real Estate Loans can help you acquire or refinance commercial properties at favorable terms. ",
  },
  {
    iconSrc: "/images/unifyicon/icon17.svg",
    title: "Business Acquisition Loans",
    desc:" If you're considering acquiring an existing business, our Business Acquisition Loans offer the funding and support required for a successful transition.",
  },
  
];


const Service1 = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
        >
          <div style={{padding:'40px 15px 67px'}} className="card-style-sixteen tran3s text-center position-relative mt-40">
            <div className="icon">
              <img width="50" height="50"
                src={service.iconSrc}
                alt="icon"
                className="lazy-img w40 m-auto"
              />
            </div>
           
            <h4 className="tx-dark pt-20 fs-20">{service.title}</h4>
            <p style={{color:'#000'}} className="fs-14 tx-dark m0 pt-20">{service.desc}</p>
          
          </div>
        </div>
      ))}
    </>
  );
};

export default Service1;

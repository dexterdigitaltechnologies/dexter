import Link from "next/link";
const services = [
  {
    iconSrc: "/images/unifyicon/icon4.svg",
    title: "Real Estate Investment Loans Melbourne",
    desc:" Whether you are looking to acquire residential or commercial properties, our Real Estate Investment Loans in Melbourne provide the financial support to make your investments profitable.",
  },
  {
    iconSrc: "/images/unifyicon/icon20.svg",
    title: "Stock and Portfolio Investment Loans",
    desc:" Diversify your investment portfolio with our Stock and Portfolio Investment Loans, tailored to support your stock market ventures. ",
 
  },
  {
    iconSrc: "/images/unifyicon/icon17.svg",
    title: "Business Investment Loans Melbourne",
    desc:" Invest in promising business opportunities or expand your existing ventures with our Business Investment Loans.",
  },
  {
    iconSrc: "/images/unifyicon/icon4.svg",
    title: "  Fixed-Income Investment Loans",
    desc:" For those seeking steady returns, our Fixed-Income Investment Loans provide the necessary capital for fixed-income securities and investments. ",
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

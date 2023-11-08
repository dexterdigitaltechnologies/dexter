import Link from "next/link";
const services = [
  {
    iconSrc: "/images/unifyicon/icon4.svg",
    title: "Invoice Factoring ",
    desc:" Convert outstanding invoices into immediate cash with our Invoice Factoring solutions, enhancing your business's cash flow without waiting for payment.",
  },
  {
    iconSrc: "/images/unifyicon/icon20.svg",
    title: "Accounts Receivable Financing",
    desc:" Utilize your accounts receivable as collateral to secure the funding you need, enabling you to maintain smooth operations. ",
 
  },
  {
    iconSrc: "/images/unifyicon/icon17.svg",
    title: "Purchase Order Financing",
    desc:" Secure the necessary funds to fulfill large orders and take advantage of growth opportunities with our Purchase Order Financing.",
  },
  {
    iconSrc: "/images/unifyicon/icon4.svg",
    title: "Trade Finance",
    desc:" Improve your cash flow by optimizing your trade cycle with our Trade Finance solutions. ",
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

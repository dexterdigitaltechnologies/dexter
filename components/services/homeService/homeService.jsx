import Link from "next/link";
const services = [
  {
    iconSrc: "/images/unifyicon/icon4.svg",
    title: "Home Purchase Loans",
    desc:"The key to your new home lies in our Home Purchase Loans. Whether youre a first-time homebuyer or an experienced one, well help you secure the right mortgage with favorable terms and rates.",
  },
  {
    iconSrc: "/images/unifyicon/icon20.svg",
    title: "Refinancing Solutions",
    desc:"Optimize your mortgage with Unify Finance Refinancing Solutions. Lower your monthly payments, shorten your loan term, or access your homes equity for other financial needs.",
 
  },
  {
    iconSrc: "/images/unifyicon/icon17.svg",
    title: "Construction Loans",
    desc:"Building your dream home from the ground up? Our Construction Loans offer the necessary funding and flexibility to bring your vision to life. Our team works with lenders during all the stages of construction.",
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

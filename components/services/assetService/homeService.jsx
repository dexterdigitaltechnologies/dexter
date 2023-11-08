import Link from "next/link";
const services = [
  {
    iconSrc: "/images/unifyicon/icon4.svg",
    title: "Equipment Financing",
    desc:" Upgrade or obtain essential machinery and equipment without a significant upfront investment. Our Equipment Financing options provide flexibility and convenience. ",
  },
  {
    iconSrc: "/images/unifyicon/icon20.svg",
    title: "Vehicle Finance",
    desc:"Whether it's a single company car or an entire fleet, our Vehicle Finance solutions help you drive your business forward.",
 
  },
  {
    iconSrc: "/images/unifyicon/icon17.svg",
    title: "Technology and IT Finance",
    desc: "Stay ahead in the digital era with our Technology and IT Finance, ensuring you have the latest hardware and software without financial strain",
  },
  {
    iconSrc: "/images/unifyicon/icon20.svg",
    title: "Real Estate Finance",
    desc:" Unlock the potential of commercial and industrial properties with our Real Estate Finance solutions, tailored to your unique property acquisition needs",
 
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

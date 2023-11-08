import Link from "next/link";
const services = [
  {
    iconSrc: "/images/unifyicon/icon4.svg",
    title: "New Car Loans",
 desc:" Own the latest model and enjoy the perks of a new vehicle with our New Car Loans, designed to get you behind the wheel of your dream car.",
  },
  {
    iconSrc: "/images/unifyicon/icon20.svg",
    title: " Used Car Loans Melbourne",
    desc:"Looking for a pre-owned vehicle? Our Used Car Loans offer the financing you need to get a quality used car without stretching your budget. ",
 
  },
  {
    iconSrc: "/images/unifyicon/icon17.svg",
    title: "Luxury Car Loans",
    desc:"Experience the thrill of driving a luxury vehicle with our Luxury Car Loans, designed for those seeking the finer things in life.",
  },
  {
    iconSrc: "/images/unifyicon/icon4.svg",
    title: "Commercial Vehicle Loans Melbourne",
 desc:"  For business owners, our Commercial Vehicle Loans provide the capital to add commercial vehicles to your fleet or upgrade existing ones.",
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

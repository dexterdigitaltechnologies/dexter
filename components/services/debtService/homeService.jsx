import Link from "next/link";
const services = [
  {
    iconSrc: "/images/unifyicon/icon4.svg",
    title: "Debt Consolidation Loans Melbourne",
    desc:" Combine all your debts into a single loan with our Debt Consolidation Loans in Melbourne. Enjoy the convenience of one monthly payment and potentially lower interest rates.",
  },
  {
    iconSrc: "/images/unifyicon/icon20.svg",
    title: " Debt Management Plans",
    desc:" Our Debt Management Plans provide structured payment arrangements that suit your financial situation and help you pay off your debts more effectively.",
 
  },
  {
    iconSrc: "/images/unifyicon/icon17.svg",
    title: "Negotiation with Creditors",
    desc:"Unify Finance Melbourne will negotiate with your creditors on your behalf, aiming to reduce interest rates and arrange more favorable terms.",
  },
  {
    iconSrc: "/images/unifyicon/icon20.svg",
    title: "Personalized Budgeting Assistance",
    desc:" We'll assist you in creating a realistic budget to manage your expenses and improve your financial discipline.",
 
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

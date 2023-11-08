const Faq = () => {
    const faqData = [
      {
        question: "Tailored Financing Solutions",
        answer:
          "We recognize that each business is unique, and so are its financial needs. Our experienced team will work closely with you to understand your business goals and craft customized financing solutions that align with your vision.",
      },
      
      {
        question: "Expert Advice",
        answer:
          "Our business loan experts in Melbourne bring a wealth of knowledge and experience to the table. Beyond offering loan services, we are committed to providing valuable advice in identifying the right loan solutions to help your business thrive.",
      },
      {
        question: "Access to Diverse Lenders",
        answer:
          " As a reputable business loan brokerage in Melbourne, Unify Finance has fostered strong relationships with a wide network of lenders. This allows us to offer competitive interest rates and various loan options, ensuring you get the deal suited to your needs.",
      },
      {
        question:
          "Streamlined Application Process",
        answer:
          " We know your time is valuable. Our team will handle the application process efficiently, guiding you every step of the way, so you can focus on growing your business.",
      },
      
    ];
  
    return (
      <div className="accordion accordion-style-two" id="accordionOne">
        {faqData.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed fs-20 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </div>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionOne"
            >
              <div className="accordion-body">
                <p style={{fontSize:'14px'}}>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Faq;
  
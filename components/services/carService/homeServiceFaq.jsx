const Faq = () => {
    const faqData = [
      {
        question: "Extensive Car Loan Options",
        answer:
          " Our Car Loan services in Melbourne cover a wide range of vehicles, from compact cars to high-end luxury vehicles. We offer various loan options, so you can find the one that suits your budget and preferences. ",
      },
      
      {
        question: "Competitive Interest Rates:",
        answer:
          " With access to diverse lenders, we can offer competitive interest rates, potentially saving you money over the life of your loan.",
      },
      {
        question: "Fast and Efficient Process",
        answer:
          " We understand your excitement to hit the road. Our team will expedite the loan application process, ensuring you drive away with your new car sooner. ",
      },
      {
        question:
          "Transparent Financing",
        answer:
          " We believe in transparency in every step of the process. Our experts will provide a clear breakdown of loan terms and conditions, so you can make an informed decision.",
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
  
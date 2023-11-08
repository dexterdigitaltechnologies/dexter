const Faq = () => {
    const faqData = [
      {
        question: "Tailored Cashflow Solutions",
        answer:
          " We recognize that cash flow needs vary from business to business. Our financial experts will work closely with you to understand your specific cash flow requirements and craft a customized financing plan.",
      },
      
      {
        question: "Efficient and Timely Funding",
        answer:
          "We understand the importance of timely financing. Our streamlined process ensures you receive the funds you need quickly, allowing you to address cash flow gaps promptly.",
      },
      {
        question: "Expert Guidance",
        answer:
          "Our team offers valuable financial guidance in finding the right loan solutions to help you optimize your cash flow management and improve your business's overall financial health.",
      },
      {
        question:
          "Flexible Repayment Terms",
        answer:
          " We provide flexible repayment terms that align with your business's cash flow cycle, ensuring repayment is manageable and stress-free.",
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
  
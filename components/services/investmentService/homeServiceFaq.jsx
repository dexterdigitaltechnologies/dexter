const Faq = () => {
    const faqData = [
      {
        question: "Investment Expertise",
        answer:
          "Our team of financial experts possesses in-depth knowledge of investment strategies and trends. We offer valuable insights to help you make well-informed investment decisions.",
      },
      
      {
        question: "Customized Investment Solutions",
        answer:
          " We understand that every investor has unique goals and risk tolerance. Our Investment Loan solutions in Melbourne are tailored to match your investment objectives.",
      },
      {
        question: " Access to Multiple Lenders",
        answer:
          "As a leading brokerage, Unify Finance Melbourne has established strong relationships with diverse lenders, offering you competitive interest rates and favorable loan terms.",
      },
      {
        question:
          "Seamless Investment Process",
        answer:
          " Our streamlined application process allows you to secure the funds you need quickly, so you can capitalize on time-sensitive investment opportunities.",
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
  
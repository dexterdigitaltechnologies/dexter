const Faq = () => {
    const faqData = [
      {
        question: "Customized Debt Solutions",
        answer:
          " We understand that each individual's debt situation is unique. Our financial experts will analyze your debts and tailor a restructuring plan that suits your financial capacity.",
      },
      
      {
        question: "Expert Debt Management Advice:",
        answer:
          "  Our team of debt management experts will guide you through the process, offering valuable advice to help you navigate the path to financial stability.",
      },
      {
        question: "Debt Consolidation Made Easy",
        answer:
          " By consolidating multiple debts into a single manageable loan, you can simplify your finances and focus on paying off your debt faster.",
      },
      {
        question:
        "Reduced Financial Stress",
        answer:
          " Our Debt Restructuring services in Melbourne aim to reduce your financial burden, allowing you to regain control of your finances and live with peace of mind. ",
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
  
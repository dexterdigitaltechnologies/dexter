const Faq = () => {
    const faqData = [
      {
        question: "Diverse Asset Financing Options",
        answer:
          " We understand that different assets require different financing structures. Our Asset Finance solutions cover a wide range of assets, tailored to suit your specific requirements.",
      },
      
      {
        question: "Efficient Financing Process:",
        answer:
          " Our streamlined financing process ensures a quick turnaround, allowing you to acquire the assets you need without delay.",
      },
      {
        question: "Expert Asset Advice",
        answer:
          "Our financial experts are well-versed in asset financing and can provide valuable guidance on the right financing options for your unique needs. ",
      },
      {
        question:
          " Customized Solutions",
        answer:
          " At Unify Finance, we believe in personalized service. Our team will work closely with you to understand your goals and create a financing solution that aligns perfectly with your aspirations. ",
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
  
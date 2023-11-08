const Faq = () => {
    const faqData = [
      {
        question: "Expert Mortgage Guidance",
        answer:
          "Our team of experienced mortgage professionals is dedicated to assisting you every step of the way. We take the time to understand your unique financial situation and homeownership goals, providing personalized guidance and expert advice to help you make informed decisions.",
      },
      
      {
        question: "A Wide Range of Lenders at Your Fingertips",
        answer:
          "As a leading mortgage brokerage, we have established strong partnerships with an extensive network of lenders. This gives you access to a diverse array of loan products and competitive interest rates, ensuring you find the perfect fit for your needs.",
      },
      {
        question: "Tailored Home Loan Solutions",
        answer:
          "At Unify Finance, we believe that one size does not fit all. Our experts will work closely with you to create a customized home loan solution that aligns with your financial objectives, making your dream of homeownership a reality.",
      },
      {
        question:
          "Streamlined Application Process",
        answer:
          "We understand that navigating the home loan application process can be daunting. Our team will handle the paperwork, liaise with lenders, and ensure a smooth and efficient application process, making it stress-free for you.",
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
  